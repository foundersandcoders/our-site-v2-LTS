import React, { Component } from "react"

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
    const { children, options } = this.props

    return (
      <div>
        {Flickity && (
          <Flickity
            options={options}
            className={"outline-0 w-100 mb7 overflow-hidden"}
          >
            {children}
          </Flickity>
        )}
      </div>
    )
  }
}

export default FlickityCarousel
