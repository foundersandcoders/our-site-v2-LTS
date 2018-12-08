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
  className: "relative w-100 flex-ns outer-carousel dn",
})`
  background: url(${stripey_small}) repeat;
  clip-path: polygon(0 100%, 0 12%, 25% 0, 50% 12%, 75% 0, 100% 12%, 100% 100%);
  ${breakpoint.ns`
    clip-path: polygon(0 100%, 0 3.25rem, 3% 6.5rem, 10% 0, 17% 6.5rem, 24% 0, 31% 6.5rem, 38% 0, 45% 6.5rem, 52% 0, 59% 6.5rem, 66% 0, 73% 6.5rem, 80% 0, 87% 6.5rem, 94% 0, 100% 6.5rem, 100% 100%);
    padding-top: 15%;
    background-attachment: fixed;
    height: ${({ carouselWidth, extraPadding }) =>
      `${carouselWidth * extraPadding}px`}
  `};
`

const _OuterApplicationContainer = styled.div.attrs({
  className: "relative w-100 flex-ns outer-carousel dn",
})`
  height: ${({ carouselWidth, extraPadding }) =>
    `${carouselWidth * extraPadding}px`};
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
  className: "flex relative items-center justify-between inner-carousel fl",
  style: ({ scrollY, carouselWidth }) => {
    const carouselProgress = scrollY / carouselWidth
    return {
      transform: `translate(${carouselProgress * carouselWidth * 1.1}px, -50%)`,
    }
  },
})`
  ${({ carouselClass }) => carouselClass};
  z-index: -1;
  top: 50%;
  will-change: transform;
`

class Carousel extends Component {
  state = {
    scrollY: 0,
    carouselWidth: 0,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("resize", this.handleResize)
    this.handleScroll()
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = () => {
    const innerCarousel = document
      .querySelector(".inner-carousel")
      .getBoundingClientRect()
    this.setState({
      carouselWidth: innerCarousel.width,
    })
  }
  handleScroll = () => {
    const outerCarousel = document
      .querySelector(".outer-carousel")
      .getBoundingClientRect()
    this.setState({
      scrollY: outerCarousel.top,
    })
  }

  render() {
    const { scrollY, carouselWidth } = this.state
    const {
      type,
      children,
      component,
      extraPadding = "1",
      applicationsAreOpen,
      className,
      title,
      carouselClass,
    } = this.props
    switch (type) {
      case TESTIMONIAL_CAROUSEL:
        return (
          <_OuterContainer
            className={className}
            carouselWidth={carouselWidth}
            extraPadding={extraPadding}
            onMouseEnter={() => mouseOnCarousel(component)}
            onMouseLeave={() => mouseOff(component)}
          >
            <_InnerContainer>
              <_Carousel
                scrollY={scrollY}
                carouselWidth={carouselWidth}
                carouselClass={carouselClass}
              >
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
            extraPadding={extraPadding}
            onMouseEnter={() => mouseOnCarousel(component)}
            onMouseLeave={() => mouseOff(component)}
          >
            <_InnerApplicationContainer>
              <InnerGridContainer>
                <HeadingWithBody title={title} bgColour="light-gray pv4">
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
