import React, { Component } from "react"
import styled from "styled-components"

import questionCornerYellow from "../assets/icons/question-corner-yellow.svg"
import questionCornerGreen from "../assets/icons/question-corner-green.svg"
import questionCornerBlue from "../assets/icons/question-corner-blue.svg"
import questionCornerRed from "../assets/icons/question-corner-red.svg"
import questionArrow from "../assets/icons/question-arrow.svg"
import questionCross from "../assets/icons/question-cross.svg"
import questionDivider from "../assets/icons/question-divider.svg"

const Wrapper = styled.div.attrs({
  className: "relative mh1 mb4",
})`
  width: 462px;
  overflow: hidden;
  transition: all 0.75s;
  max-height: ${({ collapsed }) => (collapsed ? "147px" : "462px")};
`

const Question = styled.div.attrs({ className: "mt3" })``

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
          className="absolute top-0 left-0"
          alt="colourful corner"
        />

        <Question>
          <p className="mb4 font-4">{question}</p>
        </Question>
        <Answer collapsed={collapsed}>{children}</Answer>
        <div className="flex items-center">
          <img src={questionDivider} alt="divider" />
          <img
            onClick={this.toggleCollapse}
            src={collapsed ? questionArrow : questionCross}
            className="mh1 pointer"
            alt="down arrow"
          />
          <img src={questionDivider} alt="divider" />
        </div>
      </Wrapper>
    )
  }
}

const colourToCornerIcon = colour => {
  switch (colour) {
    case "yellow":
      return questionCornerYellow
    case "blue":
      return questionCornerBlue
    case "green":
      return questionCornerGreen
    case "red":
      return questionCornerRed
  }
}

export default CollapsableQuestion
