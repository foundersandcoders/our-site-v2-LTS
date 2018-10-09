import React from "react"
import styled from "styled-components"

const _DoubleLine = styled.img.attrs({
  className: "relative mt3 mb6",
})`
  left: 33%;
`

const _DoubleLineContainer = styled.div.attrs({
  className: "relative flex flex justify-end",
})``

const ColouredLine = ({ colour }) => {
  console.log("col", colour)
  return (
    <_DoubleLineContainer>
      <div className="w-75">
        <_DoubleLine src={colour} />
      </div>
    </_DoubleLineContainer>
  )
}

export { ColouredLine }
