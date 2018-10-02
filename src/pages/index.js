import React, { Component } from "react"
import styled from "styled-components"

import homeSplash from "../assets/splashes/homeSplash.png"
import bez from "../assets/portraits/bez.png"

import { Panel, NextPanel } from "../components/Panel"
import Layout from "../components/layout"
import HeadingBody from "../components/headingWithBody"
import Carousel from "../components/Carousel"
import Cursor from "../components/Cursor"
import { Card } from "../components/Card"

const Splash = styled.img.attrs({
  className: "w-100 mv7",
})``

const _BigText = styled.h1.attrs({
  className: ({ colour = "black" }) => `headline fw5 w-70 ${colour}`,
})``

const Bez = () => (
  <Card
    firstName="Besart"
    secondName="Hoxhaj"
    title="FAC cohort #2"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”"
  />
)

class IndexPage extends Component {
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
        <Cursor next={next} colour="blue" />
        <main>
          <Panel height="70vh" justify="end">
            <_BigText className="pt5">we are Founders and Coders</_BigText>
          </Panel>
          <HeadingBody title="Overview">
            Founders and Coders CIC is a UK-based nonprofit that develops and
            runs tuition-free, peer-led training programmes in web development,
            guided by our core values of cooperation, inclusion and social
            impact.
          </HeadingBody>
          <Splash src={homeSplash} />
          <Carousel>
            <Bez />
            <Bez />
            <Bez />
            <Bez />
          </Carousel>
          <NextPanel onMouseOver={this.handleMouseNextElement} to="/about">
            What is Founders and Coders?
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
