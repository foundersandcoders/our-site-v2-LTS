import React, { Component } from "react"
import styled from "styled-components"

import home_splash from "../assets/splashes/home_splash.png"
import dwyl from "../assets/logos/dwyl_grayscale.png"
import gaza_sky_geeks from "../assets/logos/gaza_sky_geeks_grayscale.png"
import outlandish from "../assets/logos/outlandish_grayscale.png"
import cotech from "../assets/logos/cotech_grayscale.png"
import infact from "../assets/logos/infact_grayscale.png"

import { TESTIMONIAL_CAROUSEL, DOWN_CURSOR } from "../constants"

import Layout from "../components/Layout"
import { _BigText, SmallUnderline } from "../components/Text"
import HeadingBody from "../components/HeadingWithBody"
import { Panel, NextPanel } from "../components/Panel"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import { Amelie, Helen, Owen, Ruth, Fatimat } from "../components/Card"
import DoubleLine from "../components/DoubleLine"
import { breakpoint } from "../styles/utils"

import FlickityCarousel from "../components/FlickityCarousel"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"

const Splash = styled.img.attrs({
  className: "relative center db mb4 mb7-ns",
})`
  width: 94%;

  ${breakpoint.ns`
  width: 100%;
  `};
`

const PartnerLogo = styled(BackgroundImg).attrs({
  className: "h5 w5 mt4-ns mh4-ns mt0",
  bgSize: "contain",
})``

class IndexPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="blue" />
        <main>
          <InnerGridContainer>
            <Panel justify="center justify-end-ns">
              <_BigText className="pt5 ph1 ph0-ns w-100 w-75-ns">
                we are Founders and Coders
              </_BigText>
            </Panel>
            <DoubleLine colour="yellow" />
            <Splash src={home_splash} />
            <HeadingBody title="Overview" className="mh2 mh0-ns mb7-ns mb5">
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
              <SmallUnderline className="ml2">
                We proudly co-operate with
              </SmallUnderline>
            </InnerGridContainer>
            <FlickityCarousel
              options={{
                initialIndex: 4,
                prevNextButtons: false,
                pageDots: false,
                autoPlay: 1500,
                wrapAround: true,
              }}
            >
              <PartnerLogo src={dwyl} />
              <PartnerLogo src={infact} />
              <PartnerLogo src={outlandish} />
              <PartnerLogo src={cotech} />
              <PartnerLogo src={gaza_sky_geeks} />
              <PartnerLogo src={dwyl} />
              <PartnerLogo src={infact} />
              <PartnerLogo src={outlandish} />
              <PartnerLogo src={cotech} />
              <PartnerLogo src={gaza_sky_geeks} />
            </FlickityCarousel>
          </section>

          <Carousel
            type={TESTIMONIAL_CAROUSEL}
            carouselWidth="300vw"
            component={this}
          >
            <Amelie />
            <Helen />
            <Owen />
            <Ruth />
            <Fatimat />
          </Carousel>
          <NextPanel component={this} to="/about">
            What is Founders and Coders?
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
