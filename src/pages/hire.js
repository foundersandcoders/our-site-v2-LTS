import React, { Component } from "react"
import styled from "styled-components"

import { DOWN_CURSOR } from "../constants"
import { HIRE_CONTACT_FORM } from "../maintenance"

import Layout from "../components/Layout"
import { _ExternalLink } from "../components/Text"
import { NextPanel, PageHeadingPanel } from "../components/Panel"
import HeadingWithBody from "../components/HeadingWithBody"
import DoubleLine from "../components/DoubleLine"
import { Cursor } from "../components/Cursor"
import FlickityCarousel from "../components/FlickityCarousel"
import { breakpoint } from "../styles/utils"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"
import { SplashPhoto } from "../components/SplashPhoto"

import hireSplash from "../assets/splashes/hire_splash.jpg"
import quotemarks from "../assets/icons/quotemarks.svg"
import partnerLogos from "../components/partner_logos"

const PartnerLogo = styled(BackgroundImg).attrs({
  className: "h4 w5 mt5-ns mt4 ma3",
})`
  filter: grayscale(100%);
`

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-yellow tr ph1`,
})`
  width: fit-content;
  letter-spacing: 0.01rem;
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
  right: -100px;
`};
  bottom: -80px;
  right: 20px;
  letter-spacing: var(--letter-spacing-tight);
`

const QuoteSlideContainer = styled.div.attrs({
  className: "bg-white mt6 ph3 pv2 tc font-3-ns font-4 i",
})`
  margin-bottom: 122px;
`

const QuoteImg = styled(BackgroundImg).attrs({
  className: "absolute h2",
})`
  width: 39px;
  top: -16px;
  left: 5px;
`

const QuoteSlide = ({ quote, firstName, secondName, company, topPadding }) => (
  <div className={"w-100-ns w-90 mh2 mh0-ns " + topPadding}>
    <div className="w-40-l w-60-m w-90 relative center bg-white">
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
    const { location } = this.props

    return (
      <Layout location={location}>
        <Cursor cursor={cursor} colour="green" />
        <InnerGridContainer>
          <PageHeadingPanel title="Hire our graduates" />
          <HeadingWithBody title="Overview">
            Our dedicated network of employer partners are an essential part of
            the cooperative community at Founders and Coders. We are always
            looking for new partners committed to building inclusive workplaces
            where our diverse graduates will thrive. Think your company would be
            a good fit?{" "}
            <_ExternalLink href={HIRE_CONTACT_FORM}>
              Fill out this short form
            </_ExternalLink>
            .
          </HeadingWithBody>
          <DoubleLine colour="red" />
          <SplashPhoto src={hireSplash} />
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
              topPadding="pt5"
              quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
              firstName="Vinny"
              secondName="Marino"
              company="Unruly"
            />
            <QuoteSlide
              quote="Recruiting with Founders and Coders has been effortless and has proved valuable to us. Founders and Coders graduates demonstrate a commitment to the technical and non-technical skills that we prize. Their experience from Founders and Coders has enabled them to teach new concepts and collaborate on projects easily which has been essential to becoming successful mentors and consultants on our teams. "
              firstName="Jim"
              secondName="Suchy"
              company="8th Light"
            />
            <QuoteSlide
              quote="Founders and Coders graduates stand out by adding more value to a project than just their code. They understand the business case behind the technology, as well as the specific needs of the users, and work towards those on every occasion. In building our platform, we now rely solely on our team of developers from Founders and Coders and are very satisfied with that."
              firstName="Sonja"
              secondName="Wiencke"
              company="Power to Change + Twine"
            />
          </FlickityCarousel>
        </section>
        <section className="mb7 pb5-ns pb0">
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
            {partnerLogos.map((logo, key) => {
              return <PartnerLogo src={logo} key={key} bgSize="contain" />
            })}
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
