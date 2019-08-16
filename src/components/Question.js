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
  className: "relative mb4",
})`
  display: flex;
  flex-direction: column;
`

const Answer = styled.div.attrs({
  className: "font-4 fw3 answer",
})`
  flex: 1;
`

const Divider = styled.div.attrs({
  className: "flex items-center justify-center",
})`
  height: 4px;
  background-image: linear-gradient(
    to right,
    var(--black-30) 0%,
    var(--black-30) 100%
  );
  background-repeat: repeat-x;
  background-position: 0 50%;
  background-size: 100% 2px;
`

function Question({ children, question, colour }) {
  return (
    <Wrapper>
      <img
        src={colourToCornerIcon(colour)}
        className="absolute mt2 left-0"
        alt="colourful corner"
      />

      <div className="mt3 mb4">
        <p className="pt4 pt3-ns font-4 fw5">{question}</p>
      </div>
      <Answer>
        <div className="mb4">{children}</div>
      </Answer>
      <Divider />
    </Wrapper>
  )
}

const QuestionWrapper = styled.section.attrs({
  className: "",
})`
  ${breakpoint.ns`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
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

export { Question, QuestionWrapper }
