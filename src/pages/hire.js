import React, { Component } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import QuoteCarousel from "../components/quoteCarousel"
import { BigUnderline } from "../components/underlineText"
import { Panel, NextPanel } from "../components/Panel"
import HeadingWithBody from "../components/headingWithBody"
import { ColouredLine } from "../components/DoubleLine"
import red from "../assets/icons/double_line_red.svg"

import Cursor from "../components/Cursor"
import hireSplash from "../assets/splashes/homeSplash.png"

const Splash = styled.img.attrs({
  className: "w-100 mb7 pb5",
})``

class HirePage extends Component {
  state = {
    next: false,
  }

  handleMouseNextElement = () => {
    this.setState({
      next: !this.state.next,
    })
  }

  render() {
    const { next } = this.state
    return (
      <Layout>
        <Cursor next={next} />
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
        <ColouredLine colour={red} />
        <Splash src={hireSplash} />
        <QuoteCarousel />
        <NextPanel
          onMouseOver={this.handleMouseNextElement}
          to={"/techforbetter"}
        >
          Tech for Better programme
        </NextPanel>
      </Layout>
    )
  }
}

export default HirePage
