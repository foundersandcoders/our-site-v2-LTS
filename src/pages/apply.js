import React, { Component } from "react"
import * as r from "ramda"

import { APPLICATION_CAROUSEL, DOWN_CURSOR } from "../constants"
import { APPLICATIONS_OPEN } from "../maintenance"

import Layout from "../components/Layout"
import { PageHeadingPanel, NextPanel, ExtendedPanel } from "../components/Panel"
import ApplicationsStatus from "../components/ApplicationsStatus"

import Table from "../components/Table"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import HeadingWithBody from "../components/HeadingWithBody"
import { _Heading } from "../components/Text"
import DoubleLine from "../components/DoubleLine"
import FlickityCarousel from "../components/FlickityCarousel"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"
import { CollapsableQuestion, QuestionWrapper } from "../components/Question"
import ApplicationSteps from "../components/StudentApplicationSteps"

import FAC10 from "../assets/photos/FAC10.jpg"
import FAC13 from "../assets/photos/FAC13.jpg"
import FAC14 from "../assets/photos/FAC14.jpg"
import FACN3 from "../assets/photos/FACN3.png"
import FACG3 from "../assets/photos/FACG3.png"

const CarouselImg = ({ src }) => (
  <BackgroundImg
    src={src}
    height="calc(10rem + 25vw)"
    width="100%"
    gradient="radial-gradient( rgba(141,140,355,0.25), rgba(4,2,171,0.25) 120%)"
  />
)

const carouselImages = [
  { caption: "London Cohort #14", src: FAC14 },
  { caption: "Gaza Cohort #4", src: FACG3 },
  { caption: "London Cohort #13", src: FAC13 },
  { caption: "Nazareth Cohort #3", src: FACN3 },
  { caption: "London Cohort #10", src: FAC10 },
]

const initialCarouselIdx = 0

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
            <PageHeadingPanel title="Apply to our course" />
            <HeadingWithBody title="Overview" className="mr7-m">
              Our programme is designed for people who are serious about a
              career in web development, are comfortable with uncertainty, can
              take initiative, and believe strongly in the value of community
              and helping others.
            </HeadingWithBody>
            <DoubleLine colour="blue" />
            <HeadingWithBody
              title="What you need to know"
              className="mb5 mr2-m"
            >
              <Table />
              <QuestionWrapper hideL>
                <CollapsableQuestion
                  question="Cohort of Spring 2019"
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
                Applications close at midnight GMT on the final day of the
                window.
              </div>
            </HeadingWithBody>
          </InnerGridContainer>
          <section className="mb7-ns mb6 pb5-ns pb0">
            <ExtendedPanel className="bg-light-gray db-l dn">
              <Carousel
                carouselWidth="300vw"
                carouselLength="210vw"
                type={APPLICATION_CAROUSEL}
                title="How do I apply?"
                component={this}
                applicationsAreOpen={APPLICATIONS_OPEN}
              >
                <ApplicationSteps />
              </Carousel>
            </ExtendedPanel>
            <div className="bg-light-gray ma0 db dn-l">
              <HeadingWithBody
                title="How do I apply?"
                className="db dn-l bg-light-gray pv6 mr7-m"
              >
                <ApplicationSteps />
              </HeadingWithBody>
              <ApplicationsStatus areOpen={APPLICATIONS_OPEN} />
            </div>
          </section>

          <InnerGridContainer className="mb7 mb5-m pb5">
            <HeadingWithBody title="Join our developer community">
              <span className="font-5 dark-gray pb3 db">
                {this.state.carouselCaption}
              </span>
              <FlickityCarousel
                options={{
                  pageDots: true,
                  prevNextButtons: false,
                  initialIndex: initialCarouselIdx,
                }}
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
