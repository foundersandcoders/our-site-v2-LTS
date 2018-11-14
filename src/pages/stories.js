import React, { Component, Fragment } from "react"
import styled from "styled-components"

import arrow_right_black from "../assets/ui/arrow_right_black.svg"
import Layout from "../components/Layout"
import InnerGridContainer from "../components/InnerGridContainer"
import { DOWN_CURSOR } from "../constants"
import DoubleLine from "../components/DoubleLine"
import Story from "../components/Story"
import HeadingWithBody from "../components/HeadingWithBody"
import { Cursor } from "../components/Cursor"
import { BigUnderline } from "../components/Text"
import { NextPanel, Panel } from "../components/Panel"

import storyData from "../storyData"

const storiesByUs = storyData.filter(s => s.storyType === "by_us")
const storiesAboutUs = storyData.filter(s => s.storyType === "about_us")
const storiesInPress = storyData.filter(s => s.storyType === "in_the_press")
const podcasts = storyData.filter(s => s.storyType === "podcast")

const _StoryContainer = styled.section.attrs({
  className: "flex flex-wrap justify-between",
})``
const colourOptions = ["yellow","blue","green","red"]

const mapStories = (array) => {
  return array.map((story, key) => {
    return <Story
      key={key}
      colour={colourOptions[key%4]}
      heading={story.heading && story.heading}
      subtitle={story.subtitle && story.subtitle}
      author={story.author && story.author}
      publication={story.publication && story.publication}
      date={story.date && story.date}
      url={story.url}
    />
  })
}

const StoryContainer = ({ children }) => (
  <Fragment>
    <_StoryContainer>{children}</_StoryContainer>
    {children.length > 3 && (
      <div className="mt2 lh-copy ttu flex items-center pointer f4">
        More
        <img className="ml2 w1 h1" src={arrow_right_black} />
      </div>
    )}
  </Fragment>
)

const StorySection = ({title, array}) => {
  return (
  <HeadingWithBody title={title} className="mb7">
    <StoryContainer>
      {mapStories(array)}
    </StoryContainer>
  </HeadingWithBody>
  )
}

class StoriesPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
    byUsLimit: 4,
    aboutUsLimit: 4,
    pressLimit: 4,
    podcastLimit: 4
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <main>
          <InnerGridContainer>
            <Panel justify="center justify-end-ns" className="mt7 mb6-ns mb5">
              <div className="w-75-ns w-90">
                <BigUnderline>Stories by and about us</BigUnderline>
              </div>
            </Panel>
            <HeadingWithBody title="Overview">
              Curious to learn more about us? Here you’ll find stories by and
              about our diverse community of founders and coders making a social
              impact with technology all over the world.
            </HeadingWithBody>
            <DoubleLine colour="red" />
            
            <StorySection title="Stories by us" array={storiesByUs}/>
            <StorySection title="Stories about us" array={storiesAboutUs}/>
            <StorySection title="From the press" array={storiesInPress}/>
            <StorySection title="Podcasts" array={podcasts}/>

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
