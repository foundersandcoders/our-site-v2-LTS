import React, { Component } from "react"
import styled from "styled-components"

const _Flickity = styled.div.attrs({
  className: "outline-0 w-100 mb7",
})`
  overflow: hidden;
`

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

    return (
      <_Flickity>
        <Flickity options={options} disableImagesLoaded={true}>
          {children}
        </Flickity>
      </_Flickity>
    )
  }
}

export default InfiniteCarousel
