import React, { Component } from "react"
import styled from "styled-components"

import question_corner_yellow from "../assets/icons/question_corner_yellow.svg"
import question_corner_green from "../assets/icons/question_corner_green.svg"
import question_corner_blue from "../assets/icons/question_corner_blue.svg"
import question_corner_red from "../assets/icons/question_corner_red.svg"
import question_arrow from "../assets/icons/question_arrow.svg"
import question_cross from "../assets/icons/question_cross.svg"
import question_divider from "../assets/icons/question_divider.svg"

const Wrapper = styled.div.attrs({
  className: "relative mh1 mb4",
})`
  width: 462px;
  overflow: hidden;
  transition: all 0.75s;
  max-height: ${({ collapsed }) => (collapsed ? "147px" : "462px")};
`

const Question = styled.div.attrs({ className: "mt3" })`
  height: 84px;
`

const Answer = styled.div.attrs({
  className: ({ collapsed }) => `font-4 fw3 ${collapsed ? "mb0" : "mb4"}`,
})`
  transition: all 0.35s ease-out;
  p {
    overflow: hidden;
    transition: all 0.5s ease-out;
    max-height: ${({ collapsed }) => (collapsed ? "0" : "96px")};
  }
`

class CollapsableQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    const { children, question, colour } = this.props

    return (
      <Wrapper>
        <img
          src={colourToCornerIcon(colour)}
          className="absolute mt2 left-0"
          alt="colourful corner"
        />

        <Question>
          <p className="mb5 mt4 font-4">{question}</p>
        </Question>
        <Answer collapsed={collapsed}>{children}</Answer>
        <div className="flex items-center">
          <img src={question_divider} alt="divider" />
          <img
            onClick={this.toggleCollapse}
            src={collapsed ? question_arrow : question_cross}
            className="mh1 pointer"
            alt="down arrow"
          />
          <img src={question_divider} alt="divider" />
        </div>
      </Wrapper>
    )
  }
}

const colourToCornerIcon = colour => {
  switch (colour) {
    case "yellow":
      return question_corner_yellow
    case "blue":
      return question_corner_blue
    case "green":
      return question_corner_green
    case "red":
      return question_corner_red
  }
}

export default CollapsableQuestion
