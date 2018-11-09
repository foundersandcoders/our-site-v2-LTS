import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import { MassiveUnderline, _Heading } from "./Text"

const Step = ({ step, title, colour, children }) => (
  <_Step step={step && title}>
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
  ${breakpoint.ns`
  width: 30vw;
  height: 70vh;
  max-height: 75vh;
`};
  width: 90vw;
`

export default Step
