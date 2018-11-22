import React from "react"
import double_line_green from "../assets/icons/double_line_green.svg"
import double_line_blue from "../assets/icons/double_line_blue.svg"
import double_line_red from "../assets/icons/double_line_red.svg"
import double_line_yellow from "../assets/icons/double_line_yellow.svg"
import styled from "styled-components"

const _DoubleLine = styled.img.attrs({
  className: "relative mt4 mb6-ns mb5 double-line",
})`
  left: 50%;
  transform: translateX(-50%);
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

const DoubleLine = ({ colour }) => (
  <div className="w-100">
    <_DoubleLine src={returnDoubleLineImage({ colour })} />
  </div>
)

export default DoubleLine
