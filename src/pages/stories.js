import React, { Component } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import arrow_right_black from "../assets/ui/arrow_right_black.svg"
import Layout from "../components/Layout"
import InnerGridContainer from "../components/InnerGridContainer"
import DoubleLine from "../components/DoubleLine"
import Story from "../components/Story"
import HeadingWithBody from "../components/HeadingWithBody"
import { NextPanel, PageHeadingPanel } from "../components/Panel"

import storyData from "../storyData"

const storiesByUs = storyData.filter(s => s.storyType === "by_us")
const storiesAboutUs = storyData.filter(s => s.storyType === "about_us")
const storiesInPress = storyData.filter(s => s.storyType === "in_the_press")
const podcasts = storyData.filter(s => s.storyType === "podcast")

const _StoryContainer = styled.section.attrs({
  className: "flex flex-wrap justify-between",
})``
const colourOptions = ["yellow", "blue", "green", "red"]

const mapStories = (array, limit) => {
  return array.slice(0, limit).map((story, key) => {
    return (
      <Story
        key={key}
        colour={colourOptions[key % 4]}
        heading={story.heading && story.heading}
        subtitle={story.subtitle && story.subtitle}
        author={story.author && story.author}
        publication={story.publication && story.publication}
        date={story.date && story.date}
        url={story.url}
        img={story.img && story.img}
      />
    )
  })
}

const StorySection = ({ title, array, seeMoreStories, limit }) => {
  return (
    <HeadingWithBody title={title} className="mb7">
      <_StoryContainer>{mapStories(array, limit)}</_StoryContainer>
      {array.length > limit && (
        <div
          className="mt2 lh-copy ttu flex items-center pointer f4"
          onClick={() => {
            seeMoreStories(title)
          }}
        >
          More
          <img className="ml2 w1 h1" src={arrow_right_black} />
        </div>
      )}
    </HeadingWithBody>
  )
}

class StoriesPage extends Component {
  state = {
    byUsLimit: 4,
    aboutUsLimit: 4,
    pressLimit: 4,
    podcastLimit: 4,
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

  incremementLimit(stateSection) {
    this.setState(state => {
      return { [stateSection]: state[stateSection] + 4 }
    })
  }
  seeMoreStories = section => {
    switch (section) {
      case "Stories by us":
        return this.incremementLimit("byUsLimit")
      case "Stories about us":
        return this.incremementLimit("aboutUsLimit")
      case "From the press":
        return this.incremementLimit("pressLimit")
      case "Podcasts":
        return this.incremementLimit("podcastLimit")
      default:
        break
    }
  }
  render() {
    const { showing } = this.state
    const { location } = this.props

    return (
      <Layout location={location}>
        <Helmet>
          <meta
            name="description"
            content="Read stories by and about our diverse community making a social impact with technology all over the world."
          />
          <title>Our Stories - Founders and Coders</title>
        </Helmet>
        <main>
          <InnerGridContainer>
            <PageHeadingPanel title="Stories by and about us" />
            <HeadingWithBody title="Overview" className="mr7-m">
              Curious to learn more about us? Here you’ll find stories by and
              about our diverse community of founders and coders making a social
              impact with technology all over the world.
            </HeadingWithBody>
            <DoubleLine colour="red" showing={showing} />

            <StorySection
              title="Stories by us"
              array={storiesByUs}
              limit={this.state.byUsLimit}
              seeMoreStories={this.seeMoreStories}
            />
            <StorySection
              title="Stories about us"
              array={storiesAboutUs}
              limit={this.state.aboutUsLimit}
              seeMoreStories={this.seeMoreStories}
            />
            <StorySection
              title="From the press"
              array={storiesInPress}
              limit={this.state.pressLimit}
              seeMoreStories={this.seeMoreStories}
            />
            <StorySection
              title="Podcasts"
              array={podcasts}
              limit={this.state.podcastLimit}
              seeMoreStories={this.seeMoreStories}
            />

            <NextPanel component={this} to="/" topBorder>
              Back to homepage
            </NextPanel>
          </InnerGridContainer>
        </main>
      </Layout>
    )
  }
}
export default StoriesPage
