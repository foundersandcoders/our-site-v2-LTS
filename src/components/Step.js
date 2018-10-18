import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import { MassiveUnderline, _Heading } from "./Text"

const Step = ({ step, title, colour, children }) => (
  <_Step step={step && title}>
    {step && <MassiveUnderline colour={colour}>{step}</MassiveUnderline>}
    {title && <_Heading>{title}</_Heading>}
    <div className="font-4 fw3">{children}</div>
  </_Step>
)

const _Step = styled.div.attrs({
  className: ({ step }) =>
    `flex flex-column ${
      step ? "bt bb bw1 b--black-20 justify-between" : "justify-around"
    } pv4`,
})`
  ${breakpoint.ns`
  width: 30vw;
  height: 60vh;
`};

  width: 90vw;
  height: 90vh;
`

export default Step
