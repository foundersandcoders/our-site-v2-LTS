import React, { Component } from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import stripey_small from "../assets/ui/stripey_small.svg"

import { TESTIMONIAL_CAROUSEL, APPLICATION_CAROUSEL } from "../constants"
import ApplicationsStatus from "./ApplicationsStatus"
import HeadingWithBody from "./HeadingWithBody"
import { mouseOnCarousel, mouseOff } from "./Cursor"
import InnerGridContainer from "./InnerGridContainer"

const _OuterContainer = styled.div.attrs({
  className: "relative w-100 flex-ns carousel dn",
})`
  background: url(${stripey_small}) repeat;
  clip-path: polygon(0 100%, 0 12%, 25% 0, 50% 12%, 75% 0, 100% 12%, 100% 100%);
  ${breakpoint.ns`
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
  padding-top: 15%;
  background-attachment: fixed;
  height: ${({ carouselWidth }) => carouselWidth};
`};
`

const _OuterApplicationContainer = styled.div.attrs({
  className: "relative w-100 flex-ns carousel dn",
})`
  height: ${({ carouselWidth }) => carouselWidth};
`
const _InnerContainer = styled.div.attrs({
  className: "sticky w-100 overflow-hidden top-0",
})`
  height: 100vh;
`
const _InnerApplicationContainer = styled.div.attrs({
  className: "sticky w-100 overflow-hidden top-0 flex justify-between",
})`
  height: 100vh;
`

const _Carousel = styled.section.attrs({
  className: "flex relative items-center justify-around w-75",
  style: ({ scrollY }) => ({
    transform: `translate(${0.1 * scrollY}vw, -50%)`,
  }),
})`
  z-index: -1;
  top: 50%;
  will-change: transform;
  width: ${({ carouselWidth }) => carouselWidth};
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
    const carousel = document.querySelector(".carousel").getBoundingClientRect()
    this.setState({
      scrollY: carousel.top,
    })
  }

  render() {
    const { scrollY } = this.state
    const {
      type,
      children,
      carouselWidth,
      component,
      applicationsAreOpen,
      className,
      title,
    } = this.props
    switch (type) {
      case TESTIMONIAL_CAROUSEL:
        return (
          <_OuterContainer
            className={className}
            carouselWidth={carouselWidth}
            onMouseEnter={() => mouseOnCarousel(component)}
            onMouseLeave={() => mouseOff(component)}
          >
            <_InnerContainer>
              <_Carousel scrollY={scrollY} carouselWidth={carouselWidth}>
                {children}
              </_Carousel>
            </_InnerContainer>
          </_OuterContainer>
        )
      case APPLICATION_CAROUSEL:
        return (
          <_OuterApplicationContainer
            className={className}
            carouselWidth={carouselWidth}
            onMouseEnter={() => mouseOnCarousel(component)}
            onMouseLeave={() => mouseOff(component)}
          >
            <_InnerApplicationContainer>
              <InnerGridContainer>
                <HeadingWithBody title={title} bgColour="light-gray pr4 pv4 pl4">
                  <_Carousel scrollY={scrollY} carouselWidth={carouselWidth}>
                    {children}
                  </_Carousel>
                </HeadingWithBody>
              </InnerGridContainer>
              {applicationsAreOpen !== undefined && (
                <ApplicationsStatus areOpen={applicationsAreOpen} />
              )}
            </_InnerApplicationContainer>
          </_OuterApplicationContainer>
        )
    }
  }
}

export default Carousel
