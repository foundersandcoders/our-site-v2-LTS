import React from "react"
import styled from "styled-components"
import Flickity from "react-flickity-component"

const _Flickity = styled(Flickity).attrs({
  className: "outline-0 w-100 mb7",
})`
  overflow: hidden;
`

const InfiniteCarousel = ({ children }) => (
  <_Flickity
    options={{
      initialIndex: 4,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 1500,
      wrapAround: true,
    }}
    disableImagesLoaded={true}
  >
    {children}
  </_Flickity>
)

export default InfiniteCarousel
