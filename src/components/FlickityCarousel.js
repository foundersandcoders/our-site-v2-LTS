import React, { Component } from "react"
import styled from "styled-components"

class InfiniteCarousel extends Component {
  state = { Flickity: null }
  constructor(props) {
    super(props)
    if (typeof window !== "undefined") {
      this.state.Flickity = require("react-flickity-component")
    }
  }

  render() {
    const { Flickity } = this.state

    if (!Flickity) return <div />

    const { children, options } = this.props

    const _Flickity = styled(Flickity).attrs({
      className: "outline-0 w-100 mb7",
    })`
      overflow: hidden;
    `

    return (
      <_Flickity options={options} disableImagesLoaded={true}>
        {children}
      </_Flickity>
    )
  }
}

export default InfiniteCarousel
