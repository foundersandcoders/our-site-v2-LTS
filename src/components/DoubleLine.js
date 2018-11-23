import React from "react"
import double_line_green from "../assets/icons/double_line_green.svg"
import double_line_blue from "../assets/icons/double_line_blue.svg"
import double_line_red from "../assets/icons/double_line_red.svg"
import double_line_yellow from "../assets/icons/double_line_yellow.svg"
import styled from "styled-components"

const _Container = styled.div.attrs({
  className: "w-100 relative",
})`
  height: 328px;
`

const _DoubleLine = styled.img.attrs({
  className: "absolute mt4 mb6-ns mb5 double-line",
})`
  transition: transform 1200ms cubic-bezier(0.86, 0, 0.07, 1);
  transform-origin: bottom center;
  transform: ${({ showing }) =>
    showing ? "translateX(-50%) scale(1,1)" : "translateX(-50%) scale(1,0)"};
  left: 50%;
`

const returnDoubleLineImage = ({ colour }) => {
  switch (colour) {
    case "red":
      return double_line_red
    case "blue":
      return double_line_blue
    case "green":
      return double_line_green
    case "yellow":
      return double_line_yellow
  }
}

const DoubleLine = ({ colour, showing }) => (
  <_Container>
    <_DoubleLine src={returnDoubleLineImage({ colour })} showing={showing} />
  </_Container>
)

export default DoubleLine
