import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
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
import { _ExternalLink, _SubHeading } from "../components/Text"

import FAC10 from "../assets/photos/FAC10.jpg"
import FAC13 from "../assets/photos/FAC13.jpg"
import FAC14 from "../assets/photos/FAC14.jpg"
import FACN3 from "../assets/photos/FACN3.png"
import FACG3 from "../assets/photos/FACG3.png"
import FAC15 from "../assets/photos/FAC15.jpg"
import FAC16 from "../assets/photos/FAC16.jpg"

const CarouselImg = ({ src }) => (
  <BackgroundImg
    src={src}
    height="calc(10rem + 25vw)"
    width="100%"
    gradient="radial-gradient( rgba(141,140,355,0.25), rgba(4,2,171,0.25) 120%)"
  />
)

const colourArray = ["red", "green", "blue", "yellow"]

const PreReq = ({ title, children }) => (
  <div className="flex flex-column justify-between font-4 mb4-ns mb3">
    <_SubHeading className="mb1">{title}</_SubHeading>
    {children}
  </div>
)

const _ListItem = styled.li`
  list-style-type: initial;
  list-style-position: outside;
  margin-left: 20px;
`
const VerticalStepsContainer = styled.div`
  @media screen and (max-height: 699px), screen and (max-width: 1039px) {
    display: block;
  }
  @media screen and (min-height: 700px) and (min-width: 1040px) {
    display: none;
  }
`

const _Bold = styled.span.attrs({
  className: "fw5",
})``

const _Link = styled.a.attrs({
  className: "mt1 v-mid flex items-center blue",
})``

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
  { caption: "London Cohort #16", src: FAC16 },
  { caption: "London Cohort #15", src: FAC15 },
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
                      color={colourArray[key % colourArray.length]}
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
            <ExtendedPanel className="bg-light-gray">
              <Carousel
                type={APPLICATION_CAROUSEL}
                title="How do I apply?"
                component={this}
                extraPadding="1.3"
                applicationsAreOpen={APPLICATIONS_OPEN}
              >
                <ApplicationSteps />
              </Carousel>
            </ExtendedPanel>
            <VerticalStepsContainer className="bg-light-gray ma0">
              <HeadingWithBody
                title="How do I apply?"
                className="bg-light-gray pv6 mr7-m"
              >
                <ApplicationSteps />
              </HeadingWithBody>
              <ApplicationsStatus areOpen={APPLICATIONS_OPEN} />
            </VerticalStepsContainer>
          </section>

          <InnerGridContainer className="mb7-ns mb5-m pb4">
            <HeadingWithBody
              title="Course prerequisites"
              className="mb3 mb0-l mr7-m"
            >
              <PreReq title="Create a Github Account">
                <div>
                  You will use this account to join{" "}
                  <_ExternalLink href="https://gitter.im">Gitter</_ExternalLink>{" "}
                  and to create your one-page site on{" "}
                  <_ExternalLink href="https://github.com">
                    GitHub
                  </_ExternalLink>{" "}
                  Pages.
                </div>
              </PreReq>
              <PreReq title="freeCodeCamp">
                <div>
                  Earn a minimum of 250 points on{" "}
                  <_ExternalLink href="https://www.freecodecamp.org/">
                    freeCodeCamp
                  </_ExternalLink>
                  . We recommend beginning with the following sections:
                  <h3 className="underline mt4 mb2">
                    Responsive Web Design Certification
                  </h3>
                  <ul>
                    <_ListItem>Basic HTML and HTML5</_ListItem>
                    <_ListItem>Basic CSS</_ListItem>
                    <_ListItem>Responsive Web Design Principles</_ListItem>
                    <_ListItem>CSS Flexbox</_ListItem>
                  </ul>
                  <h3 className="underline mt4 mb2">
                    JavaScript Algorithms and Data Structures Certification
                  </h3>
                  <ul>
                    <_ListItem>Basic JavaScript</_ListItem>
                    <_ListItem>ES6</_ListItem>
                    <_ListItem>Basic Data Structures</_ListItem>
                    <_ListItem>Basic Algorithm Scripting</_ListItem>
                  </ul>
                </div>
              </PreReq>

              <PreReq title="Create a personal website">
                <div>
                  Create a one-page website in HTML and CSS (using some vanilla
                  JavaScript if you’d like) and host it on GitHub Pages.{" "}
                  <_ExternalLink href="https://www.mokacoding.com/blog/your-git-log-should-tell-a-story/">
                    Your commit history should tell a story
                  </_ExternalLink>
                  , and your website <span className="i">must</span> be written by you, and:
                  <ul className="mt4">
                    <_ListItem>
                      Show us with your code who you are
                    </_ListItem>
                    <_ListItem>
                      Demonstrate your learning from the prerequisites
                    </_ListItem>
                    <_ListItem>
                      Tell us about why you are applying for the programme
                    </_ListItem>
                    <_ListItem>
                      Contain a link back to the GitHub repo that contains the
                      code for your site
                    </_ListItem>
                    <_ListItem>
                      Contain links to your freeCodeCamp (please make sure that
                      your profile is public) and Codewars pages
                    </_ListItem>
                    <_ListItem>
                      Include an{" "}
                      <_ExternalLink
                        href={
                          "https://github.com/foundersandcoders/master-reference/blob/master/coursebook/prerequisites/image-carousel.md"
                        }
                      >
                        image carousel
                      </_ExternalLink>
                      {" "}(the image carousel must be built into your website, a link to a separate page or CodePen will not be accepted)
                    </_ListItem>
                    <_ListItem>Be hosted on Github</_ListItem>
                    <_ListItem>Not use a GitHub theme</_ListItem>
                    <_ListItem>
                      Not use any JavaScript or CSS libraries like Bootstrap or
                      jQuery or use an image carousel package like Flickity ⁠— we
                      want to see your own code.
                    </_ListItem>
                  </ul>
                </div>
                <div />
              </PreReq>
              <PreReq title="Codewars">
                <div>
                  Reach 5 kyu <_Bold>and</_Bold> 300 honor points in JavaScript
                  on{" "}
                  <_ExternalLink href="https://www.codewars.com">
                    Codewars
                  </_ExternalLink>
                  .
                </div>
              </PreReq>
            </HeadingWithBody>
          </InnerGridContainer>

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
