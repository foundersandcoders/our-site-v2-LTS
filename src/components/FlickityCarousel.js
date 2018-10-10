import React from "react"
import styled from "styled-components"
import Flickity from "react-flickity-component"

const _Flickity = styled(Flickity).attrs({
  className: "outline-0 w-100 mb7",
})`
  overflow: hidden;
`

const InfiniteCarousel = ({ children, options }) => (
  <_Flickity options={options} disableImagesLoaded={true}>
    {children}
  </_Flickity>
)

export default InfiniteCarousel
