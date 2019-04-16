import React from "react"
import styled from "styled-components"

import { breakpoint } from "../styles/utils"

import { SmallUnderline } from "./Text"

const Container = styled.div`
  max-width: 1280px;
  ${breakpoint.ql`
    width: 88%;
  `};
`

const ContentContainer = styled.div`
  z-index: 1;
  ${breakpoint.l`
    width: 78%;
    `};
`

const HeadingWithBody = ({
  title = "",
  className = "",
  bgColour,
  children,
  subtitle,
}) => (
  <Container className={`mh2 ml7-m mh0-l ${className} relative-l center-l`}>
    <SmallUnderline bgColour={bgColour} className={`mb2 mb0-l w-50-m w-25-l`}>
      {title}
    </SmallUnderline>

    {subtitle && (
      <p className="font-5 o-70 w-50-m w-20-l mt2 mb2-m absolute-l">
        {subtitle}
      </p>
    )}

    <div className="w-100 flex justify-end-l justify-start pl0 pl0-m overflow-x-hidden">
      <ContentContainer className="font-2d5-l font-3-m font-4 fw3 w-100 mr2-m">
        {children}
      </ContentContainer>
    </div>
  </Container>
)

export default HeadingWithBody
