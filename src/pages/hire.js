import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import QuoteCarousel from "../components/quoteCarousel"
import { BigUnderline } from "../components/underlineText"
import { Panel, NextPanel } from "../components/Panel"
import HeadingWithBody from "../components/headingWithBody"
import { DoubleLine } from "../components/DoubleLine"
import red from "../assets/icons/double_line_red.svg"
import { DOWN_CURSOR } from "../constants"

import Cursor from "../components/Cursor"
import hireSplash from "../assets/splashes/homeSplash.png"

const Splash = styled.img.attrs({
  className: "w-100 mb7 pb5",
})``

class HirePage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <Panel justify="end" className="mt7 mb6">
          <div className="w-75">
            <BigUnderline>Hire our graduates</BigUnderline>
          </div>
        </Panel>
        <HeadingWithBody title="Overview">
          Our dedicated network of employer partners are an essential part of
          the cooperative community at Founders and Coders. We are always
          looking for new partners committed to building inclusive workplaces
          where our diverse graduates will thrive. Think your company would be a
          good fit? Fill out this short form.
        </HeadingWithBody>
        <DoubleLine colour={red} />
        <Splash src={hireSplash} />
        <QuoteCarousel />
        <NextPanel component={this} to={"/techforbetter"}>
          Tech for Better programme
        </NextPanel>
      </Layout>
    )
  }
}

export default HirePage
