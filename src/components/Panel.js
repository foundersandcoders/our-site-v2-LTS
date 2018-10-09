import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { OffsetUnderlineText } from "./underlineText"
import { mouseOnNext, mouseOff } from "../components/Cursor"

const _BigText = styled.h1.attrs({
  className: ({ colour = "black" }) => `headline fw5 w-70 ${colour}`,
})``

const Panel = styled.section.attrs({
  className: ({ justify = "between", cursor = "" }) =>
    `flex justify-${justify} ${cursor}`,
})`
  height: ${({ height }) => height};
  width: ${({ width = "inherit" }) => width};
`
const NextPanel = ({ component, to, children }) => (
  <Link
    className="bg-black flex items-center justify-center pv5 vh-100 pointer link"
    onMouseEnter={() => mouseOnNext(component)}
    onMouseLeave={() => mouseOff(component)}
    to={to}
  >
    <Panel>
      <OffsetUnderlineText
        className="ml5"
        underlineColour="blue"
        colour="white"
        underlineWidth="4px"
        fontSize="font-5"
        fontWeight="fw3"
        title="Next"
      >
        Next
      </OffsetUnderlineText>
      <_BigText colour="white">{children}</_BigText>
    </Panel>
  </Link>
)

const ExtendedPanel = styled.section.attrs({
  className: ({ className }) => `${className} bg-light-gray`,
})`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: 9999px 0 0 var(--light-gray);
  }
`

export { Panel, NextPanel, ExtendedPanel }
