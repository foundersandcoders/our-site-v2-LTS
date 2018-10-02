import React, { Component } from "react"
import styled from "styled-components"

import stripey_small from "../assets/ui/stripey_small.svg"

const _OuterContainer = styled.div.attrs({
  className: "relative db w-100 flex",
})`
  background: url(${stripey_small}) repeat;
  clip-path: polygon(
    0 100%,
    0 1.5%,
    3% 3%,
    10% 0,
    17% 3%,
    24% 0,
    31% 3%,
    38% 0,
    45% 3%,
    52% 0,
    59% 3%,
    66% 0,
    73% 3%,
    80% 0,
    87% 3%,
    94% 0,
    100% 3%,
    100% 100%
  );
  background-attachment: fixed;
  height: 170vw;
`
const _InnerContainer = styled.div.attrs({
  className: "sticky w-100 overflow-hidden top-0",
})`
  padding-top: 11rem;
  height: 100vh;
`

const _Carousel = styled.section.attrs({
  className: "flex relative items-center justify-around",
  style: ({ scrollY }) => ({ transform: `translateX(${-0.09 * scrollY}vw)` }),
})`
  will-change: transform;
  width: 250vw;
`

class Carousel extends Component {
  state = { scrollY: 0 }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    this.setState({
      scrollY: top - 2200,
    })
  }

  render() {
    const { scrollY } = this.state
    const { children } = this.props
    return (
      <_OuterContainer>
        <_InnerContainer>
          <_Carousel scrollY={scrollY}>{children}</_Carousel>
        </_InnerContainer>
      </_OuterContainer>
    )
  }
}

export default Carousel
