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
import { breakpoint } from "../styles/utils"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"

import hireSplash from "../assets/splashes/home_splash.png"
import quotemarks from "../assets/icons/quotemarks.svg"
import night_zoo_keeper from "../assets/logos/night-zoo-keeper.png"

const PartnerLogo = styled(BackgroundImg).attrs({
  className: "h5 w5 mt4-ns mt0",
})``

const SplashImg = ({ src }) => (
  <BackgroundImg src={src} height="calc(10rem + 25vw)" width="100%" />
)

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-yellow tr ph1`,
})`
  width: fit-content;
`

const NameAndCompany = ({ firstName, secondName, company, className }) => (
  <div className={className}>
    <Text font="ttu fw5 font-1-ns font-3">{firstName}</Text>
    <Text font="ttu fw5 font-1-ns font-3">{secondName}</Text>
    <Text font="font-5-ns font-6">{company}</Text>
  </div>
)

const _NameAndCompany = styled(NameAndCompany).attrs({
  className: "absolute flex items-end flex-column",
})`
  ${breakpoint.ns`
 bottom: -72px;
  right: -166px;
`};
  bottom: -80px;
  right: 0;
`

const QuoteSlideContainer = styled.div.attrs({
  className: "bg-white mt6 ph3 pv2 tc font-3-ns font-4 i",
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
  <div className="w-100-ns w-90 mh2 mh0-ns">
    <div className="w-33-ns w-90 relative center bg-white">
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
          <Panel justify="center justify-end-ns" className="mt7 mb6-ns mb5">
            <div className="w-75-ns">
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
          <section className="mb7 pb5 mh2 mh0-ns">
            <FlickityCarousel
              options={{
                pageDots: true,
                prevNextButtons: false,
                initialIndex: 2,
              }}
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
              quote="Blah vlasalkdjlkj"
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
        <section className="mb7 pb5-ns pb0">
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
