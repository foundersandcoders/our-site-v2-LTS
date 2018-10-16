import React, { Component } from "react"
import styled from "styled-components"

import { DOWN_CURSOR } from "../constants"

import Layout from "../components/Layout"
import { BigUnderline } from "../components/Text"
import { Panel, NextPanel } from "../components/Panel"
import HeadingWithBody from "../components/HeadingWithBody"
import DoubleLine from "../components/DoubleLine"
import { Cursor } from "../components/Cursor"
import FlickityCarousel from "../components/FlickityCarousel"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"

import hireSplash from "../assets/splashes/home_splash.png"
import quotemarks from "../assets/icons/quotemarks.svg"
import night_zoo_keeper from "../assets/logos/night-zoo-keeper.png"

const PartnerLogo = styled(BackgroundImg).attrs({ className: "h5 w5 mt4" })``

const SplashImg = ({ src }) => (
  <BackgroundImg src={src} width="1280px" height="750px" />
)

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-yellow tr ph1`,
})`
  width: fit-content;
`

const NameAndCompany = ({ firstName, secondName, company, className }) => (
  <div className={className}>
    <Text font="ttu fw5 font-1">{firstName}</Text>
    <Text font="ttu fw5 font-1">{secondName}</Text>
    <Text font="font-5">{company}</Text>
  </div>
)

const _NameAndCompany = styled(NameAndCompany).attrs({
  className: "absolute flex items-end flex-column",
})`
  bottom: -72px;
  right: -166px;
`

const QuoteSlideContainer = styled.div.attrs({
  className: "bg-white mt6 ph3 pv2 tc font-3 i",
})`
  margin-bottom: 152px;
`

const QuoteImg = styled(BackgroundImg).attrs({
  className: "absolute h2",
})`
  width: 39px;
  top: -16px;
  left: 5px;
`

const QuoteSlide = ({ quote, firstName, secondName, company }) => (
  <div className="w-100">
    <div className="w-33 relative center bg-white">
      <QuoteImg src={quotemarks} />
      <QuoteSlideContainer>{quote}</QuoteSlideContainer>
      <_NameAndCompany
        firstName={firstName}
        secondName={secondName}
        company={company}
      />
    </div>
  </div>
)

class HirePage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <InnerGridContainer>
          <Panel justify="end" className="mt7 mb6">
            <div className="w-75">
              <BigUnderline>Hire our graduates</BigUnderline>
            </div>
          </Panel>
          <HeadingWithBody title="Overview">
            Our dedicated network of employer partners are an essential part of
            the cooperative community at Founders and Coders. We are always
            looking for new partners committed to building inclusive workplaces
            where our diverse graduates will thrive. Think your company would be
            a good fit? Fill out this short form.
          </HeadingWithBody>
          <DoubleLine colour="red" />
          <section className="mb7 pb5">
            <FlickityCarousel
              options={{
                pageDots: true,
                prevNextButtons: false,
                initialIndex: 2,
              }}
              hideCursor
              component={this}
            >
              <SplashImg src={hireSplash} />
              <SplashImg src={hireSplash} />
              <SplashImg src={hireSplash} />
              <SplashImg src={hireSplash} />
              <SplashImg src={hireSplash} />
            </FlickityCarousel>
          </section>
        </InnerGridContainer>
        <section className="bg-light-gray">
          <FlickityCarousel
            options={{
              prevNextButtons: true,
              wrapAround: true,
              pageDots: false,
            }}
          >
            <QuoteSlide
              quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
              firstName="Vinny"
              secondName="Marino"
              company="Unruly"
            />
            <QuoteSlide
              quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
              firstName="Vinny"
              secondName="Marino"
              company="Unruly"
            />
            <QuoteSlide
              quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
              firstName="Vinny"
              secondName="Marino"
              company="Unruly"
            />
          </FlickityCarousel>
        </section>
        <section className="mb7 pb5">
          <FlickityCarousel
            options={{
              initialIndex: 4,
              prevNextButtons: false,
              pageDots: false,
              autoPlay: 1500,
              wrapAround: true,
            }}
          >
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
            <PartnerLogo src={night_zoo_keeper} />
          </FlickityCarousel>
        </section>
        <NextPanel component={this} to={"/techforbetter"} topBorder>
          Tech for Better programme
        </NextPanel>
      </Layout>
    )
  }
}

export default HirePage
