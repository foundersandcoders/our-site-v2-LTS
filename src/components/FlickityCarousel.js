import React, { Component } from "react"
import styled from "styled-components"

const FlickityContainer = styled.div.attrs({
  className: ({ className }) => className,
})`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

class FlickityCarousel extends Component {
  state = { Flickity: null }
  constructor(props) {
    super(props)
    if (typeof window !== "undefined") {
      this.state.Flickity = require("react-flickity-component")
    }
  }

  render() {
    const { Flickity } = this.state
    const { children, options, className, width, height } = this.props

    return (
      <FlickityContainer className={className} width={width} height={height}>
        {Flickity && (
          <Flickity
            options={options}
            className={"outline-0 w-100 overflow-hidden"}
            disableImagesLoaded={true}
          >
            {children}
          </Flickity>
        )}
      </FlickityContainer>
    )
  }
}

export default FlickityCarousel
