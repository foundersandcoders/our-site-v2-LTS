import React, { Component } from "react"
import Helmet from "react-helmet"
import * as r from "ramda"

import { APPLICATION_CAROUSEL, DOWN_CURSOR } from "../constants"
import { APPLICATIONS_OPEN, COHORT_DATES } from "../maintenance"

import Layout from "../components/Layout"
import { PageHeadingPanel, NextPanel, ExtendedPanel } from "../components/Panel"
import ApplicationsStatus from "../components/ApplicationsStatus"

import Table from "../components/Table"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import HeadingWithBody from "../components/HeadingWithBody"
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

const colorArray = ["red", "green", "blue", "yellow"]

const CohortExpandable = ({ obj, color }) => {
  return (
    <CollapsableQuestion question={`Cohort of ${obj.cohort}`} colour={color}>
      <div className="font-4 mb2">
        <h3 className="b">Expression of interest</h3>
        <p>{obj.expression_of_interest}</p>
      </div>
      <div className="font-4 mb2">
        <h3 className="b">Application window</h3>
        <p>{obj.application_window}</p>
      </div>
      <div className="font-4 mb2">
        <h3 className="b">Interview dates</h3>
        <p>{obj.interview_dates}</p>
      </div>
      <div className="font-4 mb2">
        <h3 className="b">Course dates</h3>
        <p>{obj.course_dates}</p>
      </div>
    </CollapsableQuestion>
  )
}

const carouselImages = [
  { caption: "London Cohort #14", src: FAC14 },
  { caption: "Gaza Cohort #3", src: FACG3 },
  { caption: "London Cohort #13", src: FAC13 },
  { caption: "Nazareth Cohort #3", src: FACN3 },
  { caption: "London Cohort #10", src: FAC10 },
]

const initialCarouselIdx = 0

class ApplyPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
    carouselCaption: carouselImages[initialCarouselIdx].caption,
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
            content="Apply to our tuition-free, peer-led coding bootcamp for the most effective and least expensive route into the tech industry."
          />
          <title>Apply to our Course - Founders and Coders</title>
        </Helmet>
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
            <DoubleLine colour="blue" showing={showing} />
            <HeadingWithBody
              title="What you need to know"
              className="mb5 mr2-m"
            >
              <Table />
              <QuestionWrapper hideL>
                {COHORT_DATES.map((obj, key) => {
                  return (
                    <CohortExpandable
                      obj={obj}
                      color={colorArray[key % 4]}
                      key={key}
                    />
                  )
                })}
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
            <HeadingWithBody
              title="Join our developer community"
              subtitle={this.state.carouselCaption}
            >
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
