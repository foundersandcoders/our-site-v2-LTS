import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import stripey_small from "../assets/ui/stripey_small.svg"
import Layout from "../components/Layout"
import { DOWN_CURSOR } from "../constants"

import { _InternalLink } from "../components/Text"
import { QuestionWrapper } from "../components/Question"
import ShortCourseFAQs from "../components/ShortCourseFAQs"
import { PageHeadingPanel, Panel, NextPanel } from "../components/Panel"
import HeadingWithBody from "../components/HeadingWithBody"
import DoubleLine from "../components/DoubleLine"
import { Cursor } from "../components/Cursor"
import InnerGridContainer from "../components/InnerGridContainer"

const colours = [
  "yellow",
  "green",
  "blue",
  "red",
  "green",
  "yellow",
  "red",
  "blue",
]

const Footnote = styled.p.attrs({
  className: "fw3 i font-4",
})``

const StaffPanel = styled(Panel).attrs({
  className:
    "ph7-l ph3-m pv7 flex flex-wrap-ns flex-nowrap flex-column flex-row-ns items-between-ns justify-around-ns justify-center",
})`
  height: ${({ panelHeight: { s } }) => s};
  padding-top: 14rem;
  background: url("${stripey_small}") center;
  clip-path: polygon(0 100%, 0 5%, 25% 0, 50% 5%, 75% 0, 100% 5%, 100% 100%);

  ${breakpoint.l`
    height: ${({ panelHeight: { ns } }) => ns};
    clip-path: polygon(0 100%, 0 3.25rem, 3% 6.5rem, 10% 0, 17% 6.5rem, 24% 0, 31% 6.5rem, 38% 0, 45% 6.5rem, 52% 0, 59% 6.5rem, 66% 0, 73% 6.5rem, 80% 0, 87% 6.5rem, 94% 0, 100% 6.5rem, 100% 100%);
  `};
  ${breakpoint.m`
    height: auto;
    clip-path: polygon(0 100%, 0 3.25rem, 3% 6.5rem, 10% 0, 17% 6.5rem, 24% 0, 31% 6.5rem, 38% 0, 45% 6.5rem, 52% 0, 59% 6.5rem, 66% 0, 73% 6.5rem, 80% 0, 87% 6.5rem, 94% 0, 100% 6.5rem, 100% 100%);
    padding-top: 10rem;
    `}
    @media screen and (max-height: 700px) {
      height: auto;
    }
`

class WhatsOnPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
    showing: true,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleDoubleLines)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleDoubleLines)
  }

  handleDoubleLines = () => {
    const { showing } = this.state
    const doubleLine = document
      .querySelector(".double-line")
      .getBoundingClientRect().bottom

    if (doubleLine >= 500 && !showing) {
      this.setState({
        showing: true,
      })
    } else if (0 <= doubleLine && doubleLine <= 500 && showing) {
      this.setState({
        showing: false,
      })
    }
  }

  render() {
    const { cursor, showing } = this.state
    const { location } = this.props

    return (
      <Layout location={location}>
        <Helmet>
          <meta
            name="description"
            content="Find out about the Founders and Coders short course."
          />
          <title>Short Course - Founders and Coders</title>
        </Helmet>
        <Cursor cursor={cursor} colour="red" />
        <InnerGridContainer>
          <PageHeadingPanel title="What's on" />
          <HeadingWithBody title="Overview" className="mb7-ns mb5 mr7-m">
            As well as our full-time course, there's lots more going on here in
            Space4. Make sure to submit an{" "}
            <a href="http://www.foundersandcoders.com/apply" target="_blank">
              expression of interest
            </a>{" "}
            and be kept up to date!
            <br />
            <br />
            <h3>
              <span className="fw5"> Meetups</span>
            </h3>
            Monday evenings, from 18.30 - 20.30 here in Space4, Finsbury Park.
            An opportunity to improve your coding skills, work on the
            prerequisites, and meet current students in a relaxed,
            beginner-friendly environment.
            <br />
            <br />
            <h3>
              <span className="fw5"> Workshops</span>
            </h3>
            We occasionally replace our normal Monday meetup with a themed
            workshop - also from 18.30 - 20.30 here in Space4, Finsbury Park. We
            focus on topics like Codewars, GitHub and DOM manipulation.
            <br />
            <br />
            <h3>
              <span className="fw5"> Short course</span>
            </h3>
            This introductory part-time course takes place over four consecutive
            Tuesday evenings. See below for more info!
          </HeadingWithBody>
          <DoubleLine colour="green" showing={showing} />
          <HeadingWithBody title="Short course" className="mb7-ns mb5 mr0-m">
            <QuestionWrapper>
              {ShortCourseFAQs.map((Question, index) => (
                <Question color={colours[index % 8]} key={index} />
              ))}
            </QuestionWrapper>
            <Footnote>
              Have a question we didn’t answer?{" "}
              <_InternalLink to="/about#footer">Contact us</_InternalLink> and
              we’ll get right back to you!
            </Footnote>
          </HeadingWithBody>
        </InnerGridContainer>
        <NextPanel component={this} to={"/apply"}>
          Apply to our course
        </NextPanel>
      </Layout>
    )
  }
}

export default WhatsOnPage
