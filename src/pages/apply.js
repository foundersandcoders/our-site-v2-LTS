import React, { Component } from "react"
import styled from "styled-components"

import { APPLICATION_CAROUSEL, DOWN_CURSOR } from "../constants"
import Layout from "../components/layout"
import { Panel, NextPanel, ExtendedPanel } from "../components/Panel"

import Table from "../components/Table"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import HeadingWithBody from "../components/headingWithBody"
import { BigUnderline, MassiveUnderline } from "../components/underlineText"
import { BlueLine } from "../components/DoubleLine"

const _Step = styled.div.attrs({
  className: ({ step }) =>
    `flex flex-column justify-between ${step && "bt bb bw1 b--black-20"}`,
})`
  width: 30vw;
  height: 60vh;
`

const _Heading = styled.h2.attrs({
  className: "fw5 b font-3",
})``

const _SubHeading = styled.h3.attrs({
  className: "fw5 b font-4",
})``

const _ListItem = styled.li`
  list-style-type: circle;
  list-style-position: inside;
`

const Step = ({ step, title, colour, children }) => (
  <_Step step={step && title}>
    {step && <MassiveUnderline colour={colour}>{step}</MassiveUnderline>}
    {title && <_Heading>{title}</_Heading>}
    <div className="font-4 fw3">{children}</div>
  </_Step>
)

class ApplyPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <main>
          <Panel justify="end" className="mt7 mb6">
            <div className="w-75">
              <BigUnderline>Apply to our course</BigUnderline>
            </div>
          </Panel>
          <HeadingWithBody title="Overview">
            Our programme is designed for people who are serious about a career
            in web development, are comfortable with uncertainty, can take
            initiative, and believe strongly in the value of community and
            helping others.
          </HeadingWithBody>
          <BlueLine />
          <HeadingWithBody title="What you need to know">
            <Table />
          </HeadingWithBody>
          <ExtendedPanel className="bg-light-gray">
            <Carousel
              carouselWidth="200vw"
              type={APPLICATION_CAROUSEL}
              component={this}
            >
              <Step
                step="01"
                colour="yellow"
                title="Submit your expression of interest"
              >
                Please submit an expression of interest to get invited to
                events, workshops and meetups for prospective students. We open
                expressions of interest six months before a cohort begins.
              </Step>
              <Step
                step="02"
                colour="blue"
                title="Start work on our course prerequisites"
              >
                <span className="b">
                  Before we can consider your application,
                </span>
                you will need to complete our course prerequisites. We encourage
                applicants to take as much time as they need to work through the
                material and to support each other during the preparation
                process, both online and through our meetups.
              </Step>
              <Step>
                <p>
                  <_SubHeading>Create a GitHub account</_SubHeading>
                  You will use this account to join Gitter and to create your
                  one-page site on GitHub Pages.
                </p>
                <p>
                  <_SubHeading>FreeCodeCamp</_SubHeading>
                  Earn a minimum of 200 points on freeCodeCamp. We recommend
                  beginning with the following sections:
                  <h3 className="underline">
                    Responsive Web Design Certification
                  </h3>
                  <ul>
                    <_ListItem>Basic HTML and HTML5</_ListItem>
                    <_ListItem>Basic CSS</_ListItem>
                    <_ListItem>Responsive Web Design Principles</_ListItem>
                    <_ListItem>CSS Flexbox</_ListItem>
                  </ul>
                  <h3 className="underline">
                    Javascript Algorithms and Data Structures Certification
                  </h3>
                  <ul>
                    <_ListItem>Basic JavaScript</_ListItem>
                    <_ListItem>ES6</_ListItem>
                    <_ListItem>Basic Data Structures</_ListItem>
                    <_ListItem>Basic Algorithm Scripting</_ListItem>
                  </ul>
                </p>
              </Step>
              <Step step="03" colour="red" title="Submit an application">
                <p>
                  Use [prereq-check] to ensure you are prepared to submit your
                  application. Plan to spend about an hour completing the
                  application form.
                </p>
                <p>
                  If you submit your application before the deadline, we
                  encourage you to keep learning and tidying up your website. We
                  will evaluate your progress as of the date the window closes.
                </p>
              </Step>
              <Step
                step="04"
                colour="green"
                title="The conversational interview"
              >
                We invite a minimum of 24 people to interview (in person or
                remotely), and{" "}
                <span className="b">
                  offer places to sixteen people per cohort
                </span>
                . You’ll be interviewed by a panel of Founders and Coders staff
                and alumni.
              </Step>
            </Carousel>
          </ExtendedPanel>

          <NextPanel component={this} to="/hire">
            Hire our graduates
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default ApplyPage
