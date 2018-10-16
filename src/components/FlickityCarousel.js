import React, { Component } from "react"
import styled from "styled-components"
import * as r from "ramda"
import { mouseOff, mouseOnHide } from "./Cursor"

const FlickityContainer = styled.div`
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

  componentDidMount = () => {
    const { children, changeCaption, ApplyCarousel } = this.props
    if (ApplyCarousel) {
      const captions = r.map(r.view(r.lensPath(["props", "name"])), children)
      this.flkty.on("dragEnd", () => {
        changeCaption(captions[this.flkty.selectedIndex])
      })
    }
  }

  render() {
    const { Flickity } = this.state
    const {
      children,
      options,
      className,
      width,
      height,
      component,
      hideCursor,
    } = this.props

    return (
      <FlickityContainer
        onMouseEnter={() => hideCursor && mouseOnHide(component)}
        onMouseLeave={() => hideCursor && mouseOff(component)}
        className={className}
        width={width}
        height={height}
      >
        {Flickity && (
          <Flickity
            flickityRef={c => (this.flkty = c)}
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
