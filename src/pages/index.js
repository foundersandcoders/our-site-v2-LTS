import React, { Component } from "react"
import styled from "styled-components"
import { TESTIMONIAL_CAROUSEL, DOWN_CURSOR } from "../constants"
import { withPrefix } from "gatsby"

import dwyl from "../assets/logos/cooperate_logos/dwyl_grayscale.png"
import gaza_sky_geeks from "../assets/logos/cooperate_logos/gaza_sky_geeks_grayscale.png"
import outlandish from "../assets/logos/cooperate_logos/outlandish_grayscale.png"
import space4 from "../assets/logos/cooperate_logos/Space4.svg"
import cotech from "../assets/logos/cooperate_logos/cotech_grayscale.png"
import infact from "../assets/logos/cooperate_logos/infact_grayscale.png"
import stripey_small from "../assets/ui/stripey_small.svg"

import Layout from "../components/Layout"
import { SmallUnderline } from "../components/Text"
import HeadingBody from "../components/HeadingWithBody"
import { NextPanel, PageHeadingPanel } from "../components/Panel"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import { Amelie, Helen, Owen, Ruth, Fatimat } from "../components/Card"
import DoubleLine from "../components/DoubleLine"
import FlickityCarousel from "../components/FlickityCarousel"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"
import { breakpoint } from "../styles/utils"

const Video = styled.video.attrs({
  className: "w-100",
})`
  height: calc((100vw - 32px) / 1.78);
  max-height: 719.1px;
  max-width: 1279px;
  ${breakpoint.ns`
    height: calc((100vw - 160px) / 1.78);
  `};
`

const VideoContainer = styled.div.attrs({
  className: "flex justify-center mh6-ns mh2 mb7 video-container pt3",
})`
  -webkit-clip-path: polygon(45% 45%, 45% 45%, 45% 45%, 45% 45%);
`

const StripeyContainer = styled.div.attrs({})`
  background: url(${stripey_small}) repeat;
  padding-top: 50%;
  clip-path: polygon(0 100%, 0 2%, 25% 0, 50% 2%, 75% 0, 100% 2%, 100% 100%);
`

const MobileFacsterCards = ({ className }) => (
  <StripeyContainer className={className}>
    <Amelie />
    <Helen />
    <Owen />
    <Ruth />
    <Fatimat />
  </StripeyContainer>
)

const PartnerLogo = styled(BackgroundImg).attrs({
  className: "h4 w5 mt5-ns mt4 mh4 mb3",
  bgSize: "contain",
})``

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      cursor: DOWN_CURSOR,
      showing: true,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const doubleLine = document
      .querySelector(".double-line")
      .getBoundingClientRect()

    const doubleLineTopOffset = doubleLine.top - 300
    const videoContainer = document.querySelector(".video-container")
    const videoTop = videoContainer.getBoundingClientRect().top - 150

    if (doubleLineTopOffset < 0 && videoTop > 0) {
      const progress = (videoTop / (videoTop - doubleLineTopOffset)) * 100
      videoContainer.setAttribute(
        "style",
        `-webkit-clip-path: polygon(${progress / 2}% ${progress / 2}%,${100 -
          progress / 2}% ${progress / 2}%, ${100 - progress / 2}% ${100 -
          progress / 2}%, ${progress / 2}% ${100 - progress / 2}%);`
      )
    } else if (videoTop < 0) {
      videoContainer.setAttribute(
        "style",
        `-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);`
      )
    }
  }

  render() {
    const { cursor } = this.state
    const { location } = this.props

    return (
      <Layout location={location}>
        <Cursor cursor={cursor} colour="blue" />
        <main>
          <InnerGridContainer>
            <PageHeadingPanel
              title="we are Founders and Coders"
              textSize="XL"
            />
            <DoubleLine colour="yellow" showing={true} />
            <VideoContainer>
              <Video muted autoPlay loop playsInline poster="">
                <source src={withPrefix("/home_page_video.mp4?no-cache=1")} />
              </Video>
            </VideoContainer>
            <HeadingBody
              title="Overview"
              className="ma2 mh0-ns mb7-ns mb5 mr7-m overview-text"
            >
              Founders and Coders CIC is a UK-based nonprofit that develops and
              runs tuition-free, peer-led training programmes in web
              development, guided by our core values of cooperation, inclusion
              and social impact. We operate in London and work with Mercy Corps
              and the UK government to deliver programmes in the Middle East and
              Africa.
            </HeadingBody>
          </InnerGridContainer>
          <section className="mb7-ns mb5">
            <InnerGridContainer>
              <SmallUnderline className="ml2 ml6-ns">
                We proudly co-operate with
              </SmallUnderline>
            </InnerGridContainer>
            <FlickityCarousel
              options={{
                initialIndex: 4,
                prevNextButtons: false,
                pageDots: false,
                autoPlay: 1300,
                pauseAutoPlayOnHover: false,
                wrapAround: true,
              }}
            >
              <PartnerLogo src={cotech} />
              <PartnerLogo src={infact} />
              <PartnerLogo src={outlandish} />
              <PartnerLogo src={dwyl} />
              <PartnerLogo src={space4} />
              <PartnerLogo src={gaza_sky_geeks} />
              <PartnerLogo src={cotech} />
              <PartnerLogo src={infact} />
              <PartnerLogo src={outlandish} />
              <PartnerLogo src={dwyl} />
              <PartnerLogo src={space4} />
              <PartnerLogo src={gaza_sky_geeks} />
            </FlickityCarousel>
          </section>
          <Carousel
            type={TESTIMONIAL_CAROUSEL}
            component={this}
            carouselClass="padding-left: 300px;"
          >
            <Amelie />
            <Helen />
            <Owen />
            <Ruth />
            <Fatimat />
          </Carousel>
          <MobileFacsterCards className="db dn-ns" />
          <NextPanel component={this} to="/about">
            What is Founders and Coders?
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
