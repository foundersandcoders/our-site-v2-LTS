import React, { Component } from "react"
import styled from "styled-components"

import stripey_small from "../assets/ui/stripey_small.svg"

import { TESTIMONIAL_CAROUSEL, APPLICATION_CAROUSEL } from "../constants"
import HeadingWithBody from "./headingWithBody"
import { mouseOnCarousel, mouseOff } from "./Cursor"

const _ApplicationsStatus = styled.section.attrs({
  className: ({ areOpen }) =>
    `pv3 left-0 bottom-0 absolute w-100 tc font-3 bg-${
      areOpen ? "blue white" : "yellow black"
    }`,
})``

const ApplicationsStatus = ({ areOpen }) => (
  <_ApplicationsStatus areOpen={areOpen}>
    {areOpen
      ? "Applications are now open! APPLY HERE"
      : "Applications are currently closed. Please express interest HERE."}
  </_ApplicationsStatus>
)

const _OuterContainer = styled.div.attrs({
  className: "relative db w-100 flex carousel",
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
  height: ${({ carouselWidth }) => carouselWidth};
`
const _OuterApplicationContainer = styled.div.attrs({
  className: "relative db w-100 flex carousel",
})`
  height: ${({ carouselWidth }) => carouselWidth};
`
const _InnerContainer = styled.div.attrs({
  className: "sticky w-100 overflow-hidden top-0",
})`
  padding-top: 11rem;
  height: 100vh;
`
const _InnerApplicationContainer = styled.div.attrs({
  className: "sticky w-100 overflow-hidden top-0 flex justify-between",
})`
  padding-top: 11rem;
  height: 100vh;
`

const _Carousel = styled.section.attrs({
  className: "flex relative items-center justify-around w-75",
  style: ({ scrollY }) => ({ transform: `translateX(${0.1 * scrollY}vw)` }),
})`
  z-index: -1;
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
    const { type, children, carouselWidth, component } = this.props
    switch (type) {
      case TESTIMONIAL_CAROUSEL:
        return (
          <_OuterContainer
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
            carouselWidth={carouselWidth}
            onMouseEnter={() => mouseOnCarousel(component)}
            onMouseLeave={() => mouseOff(component)}
          >
            <_InnerApplicationContainer>
              <HeadingWithBody
                title="How do I apply?"
                bgColour="light-gray pr4"
              >
                <_Carousel scrollY={scrollY} carouselWidth={carouselWidth}>
                  {children}
                </_Carousel>
              </HeadingWithBody>
              <ApplicationsStatus areOpen={true} />
            </_InnerApplicationContainer>
          </_OuterApplicationContainer>
        )
    }
  }
}

export default Carousel
