import React, { Component } from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import stripey_small from "../assets/ui/stripey_small.svg"
import Layout from "../components/Layout"
import { DOWN_CURSOR } from "../constants"

import { _InternalLink } from "../components/Text"
import { QuestionWrapper } from "../components/Question"
import StudentFAQs from "../components/StudentFAQs"
import { PageHeadingPanel, Panel, NextPanel } from "../components/Panel"
import HeadingWithBody from "../components/HeadingWithBody"
import DoubleLine from "../components/DoubleLine"
import { Cursor } from "../components/Cursor"
import { Dan, Ines, Yvonne, Joe, Rebecca } from "../components/Card"
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
`

class AboutPage extends Component {
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
        <Cursor cursor={cursor} colour="red" />
        <InnerGridContainer>
          <PageHeadingPanel title="What is Founders and Coders?" />
          <HeadingWithBody title="Overview" className="mb7-ns mb5 mr7-m">
            Founders and Coders is not your ordinary coding bootcamp. We’re on a
            mission to prove that for many people peer-led learning is the most
            effective and least expensive route into the tech industry. Curious
            to learn more about our London Programme? Read on for all your
            questions answered.
          </HeadingWithBody>
          <DoubleLine colour="green" showing={showing} />
          <HeadingWithBody
            title="More information"
            className="mb7-ns mb5 mr0-m"
          >
            <QuestionWrapper>
              {StudentFAQs.map((Question, index) => (
                <Question color={colours[index % 8]} key={index} />
              ))}
            </QuestionWrapper>
            <Footnote>
              Have a question we didn’t answer?{" "}
              <_InternalLink href="#footer">Contact us</_InternalLink> and we’ll
              get right back to you!
            </Footnote>
          </HeadingWithBody>
          <HeadingWithBody
            title="Team"
            className="pt4-ns pt0 mt7-ns mt6-ns pb7-ns pb0 mb5 mr7-m"
          >
            Founders and Coders is a labour of love run by a small team of
            permanent staff. We are also tremendously grateful to the friends
            and alumni who graciously donate their time and energy to our
            thriving cooperative community.
          </HeadingWithBody>
        </InnerGridContainer>
        <StaffPanel panelHeight={{ ns: "175vh", m: "190vh", s: "450vh" }}>
          <Dan />
          <Ines />
          <Joe />
          <Yvonne />
          <Rebecca />
        </StaffPanel>
        <NextPanel component={this} to={"/apply"}>
          Apply to our course
        </NextPanel>
      </Layout>
    )
  }
}

export default AboutPage
