import React from "react"
import double_line_green from "../assets/icons/double_line_green.svg"
import double_line_blue from "../assets/icons/double_line_blue.svg"
import double_line_red from "../assets/icons/double_line_red.svg"
import double_line_yellow from "../assets/icons/double_line_yellow.svg"
import styled from "styled-components"

const _DoubleLine = styled.img.attrs({
  className: "relative mt3 mb6",
})`
  left: 33%;
`

const _DoubleLineContainer = styled.div.attrs({
  className: "relative flex flex justify-end mt3 mb6",
})``

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
  <_DoubleLineContainer>
    <div className="w-75">
      <_DoubleLine src={returnDoubleLineImage({ colour })} />
    </div>
  </_DoubleLineContainer>
)

export default DoubleLine
