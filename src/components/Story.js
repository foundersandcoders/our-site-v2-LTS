import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import horizontal_line_red from "../assets/icons/horizontal_line_red.svg"
import horizontal_line_blue from "../assets/icons/horizontal_line_blue.svg"
import horizontal_line_yellow from "../assets/icons/horizontal_line_yellow.svg"
import horizontal_line_green from "../assets/icons/horizontal_line_green.svg"

const _Line = styled.img.attrs({
  className: "mb4 w-50 line-animate",
})`
  transition: all 0.3s ease-in-out;
`

const _Border = ({ colour }) => {
  let border
  switch (colour) {
    case "red":
      border = horizontal_line_red
      break
    case "blue":
      border = horizontal_line_blue
      break
    case "green":
      border = horizontal_line_green
      break
    case "yellow":
      border = horizontal_line_yellow
      break
    default:
      border = horizontal_line_blue
      break
  }

  return <_Line src={border} alt={`${colour}-border`} />
}

const _Story = styled.a.attrs({
  className:
    "mb4 link dib pointer flex flex-column items-start w-40-l w-100 bb bw1 b--black-20 black",
  target: "_blank",
})`
  ${breakpoint.m`
    width: 48%;
  `} &:hover {
    .line-animate {
      transform: translateY(5px);
    }
  }
`

const _Image = styled.div.attrs({
  className: "w-100 h5 mb3",
})`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${({ img }) => `url(${img})`};
`

const _Heading = styled.h2.attrs({
  className: "fw5 b font-3-l font-4",
})``

const _Subtitle = styled.div.attrs({
  className: "font-4-l font-5 fw3 mv2",
})``

const _Details = styled.div.attrs({
  className: "font-5 fw3 mb3",
})``

const Story = ({
  colour,
  img,
  heading,
  subtitle,
  author,
  publication,
  date,
  url,
}) => (
  <_Story href={url}>
    <_Border colour={colour} />
    <div>
      {img && <_Image img={img} />}
      <_Heading>{heading}</_Heading>
    </div>
    <_Subtitle>{subtitle}</_Subtitle>
    <_Details>
      {author && author}
      {author && <span className="light-silver"> ⦁ </span>}
      {publication && publication}
      {publication && <span className="light-silver"> ⦁ </span>}
      {date}
    </_Details>
  </_Story>
)

export default Story
