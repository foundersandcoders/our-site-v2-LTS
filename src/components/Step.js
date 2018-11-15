import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import { MassiveUnderline, _Heading } from "./Text"

const Step = ({ step, title, colour, children, last }) => (
  <_Step step={step && title} last={last}>
    {step && <MassiveUnderline colour={colour}>{step}</MassiveUnderline>}
    {title && <_HeadingWrapper><_Heading>{title}</_Heading></_HeadingWrapper>}
    <div className="font-4 fw3">{children}</div>
  </_Step>
)

const _HeadingWrapper = styled.div.attrs({
  className: "pv4"
})``

const _Step = styled.div.attrs({
  className: ({ step }) =>
    `flex flex-column ${
      step ? "bt bb-ns bw1 b--black-20" : "bt bb-ns bw1 b--black-20 justify-around"
    } pt4 pb3-ns pb4`,
})`
  ${breakpoint.l`
  width: 30vw;
  height: 70vh;
  max-height: 75vh;
  `};
  border-bottom: ${({last}) => `${last ? `0.125rem solid rgba(0, 0, 0, 0.2)` : null}` };
  width: 90vw;
`

export default Step
