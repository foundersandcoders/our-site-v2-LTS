import React, { Component } from "react"
import styled from "styled-components"

import questionCorner from "../assets/icons/question-corner.svg"
import questionArrow from "../assets/icons/question-arrow.svg"
import questionCross from "../assets/icons/question-cross.svg"
import questionDivider from "../assets/icons/question-divider.svg"

const Wrapper = styled.div.attrs({
  className: "relative",
})`
  width: 462px;
  overflow: hidden;
  transition: all 1s;
  max-height: ${({ collapsed }) => (collapsed ? "147px" : "215px")};
`

const Question = styled.div.attrs({ className: "mt3" })``

const Answer = styled.div.attrs({
  className: ({ collapsed }) => (collapsed ? "mb0" : "mb4"),
})`
  transition: all 0.55s ease-out;
  p {
    overflow: hidden;
    transition: all 0.8s ease-out;
    max-height: ${({ collapsed }) => (collapsed ? "0" : "48px")};
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
    return (
      <Wrapper>
        <img
          src={questionCorner}
          className="absolute top-0 left-0"
          alt="colourful corner"
        />

        <Question>
          <p className="mb4">Where and when are your courses?</p>
        </Question>

        <Answer collapsed={collapsed}>
          <p className="fw3">
            Each course runs for sixteen weeks at Space4 in Finsbury Park,
            <span className="fw5"> five days a week from 10:00 to 18:00. </span>
            We do not offer part-time or remote courses.
          </p>
        </Answer>
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

export default CollapsableQuestion
