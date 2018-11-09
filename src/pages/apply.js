import React, { Component, Fragment } from "react"
import styled from "styled-components"
import * as r from "ramda"

import { APPLICATION_CAROUSEL, DOWN_CURSOR } from "../constants"

import Layout from "../components/Layout"
import { Panel, NextPanel, ExtendedPanel } from "../components/Panel"
import ApplicationsStatus from "../components/ApplicationsStatus"
import Step from "../components/Step"
import Table from "../components/Table"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import HeadingWithBody from "../components/HeadingWithBody"
import { BigUnderline, _SubHeading } from "../components/Text"
import DoubleLine from "../components/DoubleLine"
import FlickityCarousel from "../components/FlickityCarousel"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"
import { CollapsableQuestion, QuestionWrapper } from "../components/Question"

import hireSplash from "../assets/splashes/home_splash.png"

const ApplicationSteps = () => (
  <Fragment>
    <Step step="01" colour="yellow" title="Submit your expression of interest">
      Please submit an expression of interest to get invited to events,
      workshops and meetups for prospective students. We open expressions of
      interest six months before a cohort begins.
      <br/><br/>
      <a href="">Submit expression of Interest</a>
    </Step>
    <Step
      step="02"
      colour="blue"
      title="Start work on our course prerequisites"
    >
      <span className="b">Before we can consider your application</span>, 
      you will need to complete our course prerequisites. We encourage
      applicants to take as much time as they need to work through the material
      and to support each other during the preparation process, both online and
      through our meetups.
    </Step>
    <Step>
      <div>
        <_SubHeading>Create a GitHub account</_SubHeading>
        You will use this account to join Gitter and to create your one-page
        site on GitHub Pages.
      </div>
      <div>
        <_SubHeading>FreeCodeCamp</_SubHeading>
        Earn a minimum of 200 points on freeCodeCamp. We recommend beginning
        with the following sections:
        <h3 className="underline">Responsive Web Design Certification</h3>
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
      </div>
    </Step>
    <Step step="03" colour="red" title="Submit an application">
      <p>
        Use [prereq-check] to ensure you are prepared to submit your
        application. Plan to spend about an hour completing the application
        form.
      </p>
      <p>
        If you submit your application before the deadline, we encourage you to
        keep learning and tidying up your website. We will evaluate your
        progress as of the date the window closes.
      </p>
    </Step>
    <Step step="04" colour="green" title="The conversational interview">
      We invite a minimum of 24 people to interview (in person or remotely), and{" "}
      <span className="b">offer places to sixteen people per cohort</span>.
      You’ll be interviewed by a panel of Founders and Coders staff and alumni.
    </Step>
  </Fragment>
)
const _ListItem = styled.li`
  list-style-type: circle;
  list-style-position: inside;
`

const CarouselImg = ({ src }) => (
  <BackgroundImg src={src} height="calc(10rem + 25vw)" width="100%" />
)

const carouselImages = [
  { caption: "London", src: hireSplash },
  { caption: "Nazareth", src: hireSplash },
  { caption: "Gaza", src: hireSplash },
  { caption: "West Bank", src: hireSplash },
  { caption: "Brazil", src: hireSplash },
]

const initialCarouselIdx = 2

class ApplyPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
    carouselCaption: carouselImages[initialCarouselIdx].caption,
  }

  render() {
    const { cursor } = this.state

    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <main>
          <InnerGridContainer>
            <Panel justify="center justify-end-ns" className="mt7 mb6-ns mb5">
              <div className="w-75-ns">
                <BigUnderline>Apply to our course</BigUnderline>
              </div>
            </Panel>
            <HeadingWithBody title="Overview">
              Our programme is designed for people who are serious about a
              career in web development, are comfortable with uncertainty, can
              take initiative, and believe strongly in the value of community
              and helping others.
            </HeadingWithBody>
            <DoubleLine colour="blue" />
            <HeadingWithBody title="What you need to know" className="mb5">
              <Table />
              <QuestionWrapper hideNS>
                <CollapsableQuestion
                  question="Cohort of Sprint 2019"
                  colour="red"
                >
                  <div className="font-4 mb2">
                    <h3 className="b">Expression of interest</h3>
                    <p>Until November 30</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Application window *</h3>
                    <p>December 1-31</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Interview dates</h3>
                    <p>January 7-12</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Course dates</h3>
                    <p>March 4, 2019 - June 21, 2019</p>
                  </div>
                </CollapsableQuestion>
                <CollapsableQuestion
                  question="Cohort of Summer 2019"
                  colour="green"
                >
                  <div className="font-4 mb2">
                    <h3 className="b">Expression of interest</h3>
                    <p>January - March</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Application window *</h3>
                    <p>April 1-30</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Interview dates</h3>
                    <p>May 7-11</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Course dates</h3>
                    <p>July 1, 2019 - October 18, 2019</p>
                  </div>
                </CollapsableQuestion>
                <CollapsableQuestion
                  question="Cohort of Winter 2019"
                  colour="blue"
                >
                  <div className="font-4 mb2">
                    <h3 className="b">Expression of interest</h3>
                    <p>May - July</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Application window *</h3>
                    <p>August 1-31</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Interview dates</h3>
                    <p>September 2-7</p>
                  </div>
                  <div className="font-4 mb2">
                    <h3 className="b">Course dates</h3>
                    <p>October 28, 2019 - February 21, 2020</p>
                  </div>
                </CollapsableQuestion>
              </QuestionWrapper>
              <div className="font-5 fw3">
                * Applications close at midnight GMT on the final day of the
                window.
              </div>
            </HeadingWithBody>
          </InnerGridContainer>
          <section className="mb7-ns mb6 pb5-ns pb0">
            <ExtendedPanel className="bg-light-gray db-ns dn">
              <Carousel
                carouselWidth="200vw"
                type={APPLICATION_CAROUSEL}
                title="How do I apply?"
                component={this}
                applicationsAreOpen={false}
              >
                <ApplicationSteps />
              </Carousel>
            </ExtendedPanel>
            <div className="bg-light-gray">
              <HeadingWithBody
                title="How do I apply?"
                className="db dn-ns bg-light-gray pv6"
              >
                <ApplicationSteps />
                <ApplicationsStatus />
              </HeadingWithBody>
            </div>
          </section>

          <InnerGridContainer className="mb7 pb5">
            <HeadingWithBody title={this.state.carouselCaption}>
              <FlickityCarousel
                options={{
                  pageDots: true,
                  prevNextButtons: false,
                  initialIndex: initialCarouselIdx,
                }}
                // width="953pxx
                // height="568px"
                changeCaption={caption =>
                  this.setState({ carouselCaption: caption })
                }
                ApplyCarousel
                hideCursor
                component={this}
              >
                {r.map(({ caption, src }) => (
                  <CarouselImg caption={caption} src={src} key={caption} />
                ))(carouselImages)}
              </FlickityCarousel>
            </HeadingWithBody>
          </InnerGridContainer>

          <NextPanel component={this} to="/hire" topBorder>
            Hire our graduates
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default ApplyPage
