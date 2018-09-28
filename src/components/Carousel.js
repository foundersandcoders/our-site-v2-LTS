import React, { Component } from 'react'
import styled from 'styled-components'

import stripes from '../assets/backgrounds/stripes.svg'

const _OuterContainer = styled.div.attrs({
  className: 'relative db w-100 flex',
})`
  background: url(${stripes}) repeat;
  background-attachment: fixed;
  height: 170vw;
`
const _InnerContainer = styled.div.attrs({
  className: 'sticky w-100 overflow-hidden top-0',
})`
  padding-top: 11rem;
  height: 100vh;
`

const _Carousel = styled.section.attrs({
  className: 'flex relative items-center justify-around',
  style: ({ scrollY }) => ({ transform: `translateX(${-0.09 * scrollY}vw)` }),
})`
  will-change: transform;
  width: 250vw;
`

class Carousel extends Component {
  state = { scrollY: 0 }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
