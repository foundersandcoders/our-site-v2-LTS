import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import { MassiveUnderline, _Heading } from "./Text"

const InnerContainer = styled.div`
  ${breakpoint.ql`
    font-size: var(--font-size-5);
    line-height: var(--line-height-5);
  `};
`

const Step = ({ step, title, colour, children, last }) => (
  <_Step step={step && title} last={last}>
    {step && <MassiveUnderline colour={colour}>{step}</MassiveUnderline>}
    {title && (
      <_HeadingWrapper>
        <_Heading>{title}</_Heading>
      </_HeadingWrapper>
    )}
    <InnerContainer className="font-4 fw3">{children}</InnerContainer>
  </_Step>
)

const _HeadingWrapper = styled.div.attrs({
  className: "pv4",
})`
  ${breakpoint.ql`
    padding-top: var(--spacing-small);
    padding-bottom: var(--spacing-small);
  `};
`

const _Step = styled.div.attrs({
  className: ({ step }) =>
    `flex flex-column ${
      step
        ? "bt bb-l bw1 b--black-20 pv3"
        : "justify-start overflow-y-visible pv4"
    }`,
})`
  ${breakpoint.l`
  width: 36vw;
  height: 70vh;
  max-height: 75vh;
  max-width: 490px;
  `};
  border-bottom: ${({ last }) =>
    `${last ? `0.125rem solid rgba(0, 0, 0, 0.2)` : null}`};
`

export default Step
