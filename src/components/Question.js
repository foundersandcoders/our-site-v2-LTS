import React, { Component, Fragment } from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import question_corner_yellow from "../assets/icons/question_corner_yellow.svg"
import question_corner_green from "../assets/icons/question_corner_green.svg"
import question_corner_blue from "../assets/icons/question_corner_blue.svg"
import question_corner_red from "../assets/icons/question_corner_red.svg"
import question_arrow from "../assets/icons/question_arrow.svg"
import question_cross from "../assets/icons/question_cross.svg"

const Wrapper = styled.div.attrs({
  className: "relative mb4 pointer",
})``

const Question = styled.div.attrs({ className: "mt3 mb4" })`
  ${breakpoint.ns`
    height: 84px;
  `}
`

const _Answer = styled.div.attrs({
  className: "font-4 fw3 answer",
})`
  overflow: hidden;
  transition: ${({ maxHeight }) => `all ${maxHeight * 0.0026}s ease`};
  max-height: ${({ collapsed, maxHeight }) =>
    collapsed ? "0" : `${maxHeight}px`};

  ${({ hiddenAnswer }) =>
    hiddenAnswer &&
    `
    position: absolute;
    top: -1000vh;
    max-height: none;
  `}
`

class Answer extends Component {
  myRef = React.createRef()
  state = {
    maxHeight: 0,
  }

  componentDidMount = () => {
    this.setState({ maxHeight: this.myRef.current.scrollHeight })
  }

  render() {
    return (
      <Fragment>
        <_Answer
          collapsed={this.props.collapsed}
          maxHeight={this.state.maxHeight}
        >
          <div className="mb4">{this.props.children}</div>
        </_Answer>
        <_Answer collapsed={this.props.collapsed} hiddenAnswer ref={this.myRef}>
          <div className="mb4">{this.props.children}</div>
        </_Answer>
      </Fragment>
    )
  }
}

const Divider = styled.div.attrs({
  className: "flex items-center justify-center",
})`
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
      <Wrapper onClick={this.toggleCollapse}>
        <img
          src={colourToCornerIcon(colour)}
          className="absolute mt2 left-0"
          alt="colourful corner"
        />

        <Question>
          <p className="pt3 font-4 fw5">{question}</p>
        </Question>
        <Answer collapsed={collapsed}>{children}</Answer>
        <Divider>
          <img
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
  className: "",
})`
  ${breakpoint.ns`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  `};

  ${({ hideL }) =>
    hideL &&
    breakpoint.l`
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
