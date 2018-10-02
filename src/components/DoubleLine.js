import React from "react"
import double_line_green from "../assets/icons/double_line_green.svg"
import styled from "styled-components"

const _DoubleLine = styled.img.attrs({
  className: "relative mt3 mb6",
})`
  left: 33%;
`

const _DoubleLineContainer = styled.div.attrs({
  className: "relative flex flex justify-end mt3 mb6",
})``

const GreenLine = () => (
  <_DoubleLineContainer>
    <div className="w-75">
      <_DoubleLine src={double_line_green} />
    </div>
  </_DoubleLineContainer>
)

export { GreenLine }
