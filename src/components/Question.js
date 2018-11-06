import React, { Component } from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import question_corner_yellow from "../assets/icons/question_corner_yellow.svg"
import question_corner_green from "../assets/icons/question_corner_green.svg"
import question_corner_blue from "../assets/icons/question_corner_blue.svg"
import question_corner_red from "../assets/icons/question_corner_red.svg"
import question_arrow from "../assets/icons/question_arrow.svg"
import question_cross from "../assets/icons/question_cross.svg"

const Wrapper = styled.div.attrs({
  className: "relative mh1 mb4 w-40-ns w-100",
})`
  overflow: hidden;
  transition: all 0.75s;
  max-height: ${({ collapsed }) => (collapsed ? "147px" : null)};
`

const Question = styled.div.attrs({ className: "mt3" })`
  ${breakpoint.ns`height: 84px`};
`

const Answer = styled.div.attrs({
  className: ({ collapsed }) => `font-4 fw3 ${collapsed ? "mv0" : "mt4"}`,
})`
  transition: all 0.35s ease-out;
  p,
  div {
    overflow: hidden;
    transition: all 0.5s ease-out;
    max-height: ${({ collapsed }) => (collapsed ? "0" : null)};
  }
`
const Divider = styled.div.attrs({
  className: "flex items-center justify-center mt5-ns mt4",
})`
  ${breakpoint.ns`
  margin-top: var(--spacing-large);
  `};

  margin-top: 38px;
  background-image: linear-gradient(
    to right,
    var(--black-30) 0%,
    var(--black-30) 100%
  );
  background-repeat: repeat-x;
  background-position: 0 50%;
  background-size: 100% 2px;
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
          <p className="pt3 font-4">{question}</p>
        </Question>
        <Answer collapsed={collapsed}>{children}</Answer>
        <Divider>
          <img
            onClick={this.toggleCollapse}
            src={collapsed ? question_arrow : question_cross}
            className="mh1 pointer"
            alt="down arrow"
          />
        </Divider>
      </Wrapper>
    )
  }
}

const QuestionWrapper = styled.section.attrs({
  className: "flex flex-wrap",
})`
  ${({ hideNS }) =>
    hideNS &&
    breakpoint.ns`
  display: none;
  `};
`
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

export { CollapsableQuestion, QuestionWrapper }
