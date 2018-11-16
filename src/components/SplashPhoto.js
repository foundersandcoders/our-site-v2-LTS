import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"
import BackgroundImg from "../components/BackgroundImg"

const _PhotoWrapper = styled.div.attrs({
  className: `mb7-ns mh2 mh6-ns`
})`
  ${breakpoint.ns`
    height: calc((100vw - 160px) / 1.8);
    width: calc(100vw - 160px);
  `}
  width: calc(100vw - 28px);
  height: calc((100vw - 28px) / 1.8);
`
const SplashPhoto = ({ src }) => (
  <_PhotoWrapper>
    <BackgroundImg 
      src={src} 
      height="100%"
      width="100%" 
      gradient="radial-gradient( rgba(141,140,355,0.25), rgba(4,2,171,0.25) 120%)"
    />
  </_PhotoWrapper>
)

export { SplashPhoto }