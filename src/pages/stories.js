import React, { Component, Fragment } from "react"
import styled from "styled-components"

import rebecca_and_matt from "../assets/photos/rebecca_and_matt.png"
import becky_and_johanna from "../assets/photos/becky_and_johanna.png"

import Layout from "../components/Layout"
import { DOWN_CURSOR } from "../constants"
import DoubleLine from "../components/DoubleLine"
import Story from "../components/Story"

import HeadingWithBody from "../components/HeadingWithBody"
import { Cursor } from "../components/Cursor"
import { BigUnderline } from "../components/Text"
import { NextPanel, Panel } from "../components/Panel"

const _StoryContainer = styled.section.attrs({
  className: "flex flex-wrap justify-between",
})``

const StoryContainer = ({ children }) => (
  <Fragment>
    <_StoryContainer>{children}</_StoryContainer>
    {children.length > 3 && <div className="mt5 lh-copy ttu">More</div>}
  </Fragment>
)
class StoriesPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <main>
          <Panel justify="end" className="mt7 mb6">
            <div className="w-75">
              <BigUnderline>Stories by and about us</BigUnderline>
            </div>
          </Panel>
          <HeadingWithBody title="Overview">
            Curious to learn more about us? Here you’ll find stories by and
            about our diverse community of founders and coders making a social
            impact with technology all over the world.
          </HeadingWithBody>
          <DoubleLine colour="red" />
          <HeadingWithBody title="Stories by us">
            <StoryContainer>
              <Story
                colour="yellow"
                img={rebecca_and_matt}
                heading="“The biggest challenge is checking yourself at the door”"
                subtitle="Matt King talks about his experiences mentoring and facilitating at Founders and Coders in London…"
                author="Founders and Coders"
                date="Sep 3"
              />
              <Story
                colour="blue"
                img={becky_and_johanna}
                heading="From Coders to Founders: The Workbird story"
                subtitle="How Becky Botha and Johanna Herman learnt to code and launched Workerbird, a Tech for Good startup, in less than a year"
                author="Founders and Coders"
                date="Sep 10"
              />
              <Story
                colour="green"
                heading="The Boot-camp that changed my coding life — Founders and Coders"
                subtitle="Matt King talks about his experiences mentoring and facilitating at Founders and Coders in London…"
                author="Founders and Coders"
                date="Sep 10"
              />
              <Story
                colour="red"
                heading="From Coders to Founders: The Workerbird story"
                subtitle="How Becky Botha and Johanna Herman learnt to code and launched Workerbird, a Tech for Good startup…"
                author="Founders and Coders"
                date="Sep 22"
              />
            </StoryContainer>
          </HeadingWithBody>
          <HeadingWithBody title="Stories about us">
            <StoryContainer>
              <Story
                colour="yellow"
                heading="How I became a Web Developer in 5 Months"
                subtitle="One year ago I was a non-technical founder of a startup at the edge of bankruptcy. Today I work as a…"
                author="Per Harald Borgen"
                date="Nov 26, 2015"
              />
              <Story
                colour="blue"
                heading="London tech developers to set up new worker co-op"
                subtitle="How Becky Botha and Johanna Herman learnt to code and launched Workerbird, a Tech for Good startup, in less than a year"
                author="Founders and Coders"
                date="Sep 22"
              />
              <Story
                colour="green"
                heading="The Boot-camp that changed my coding life — Founders and Coders"
                subtitle="Matt King talks about his experiences mentoring and facilitating at Founders and Coders in London…"
                author="Founders and Coders"
                date="Sep 10"
              />
              <Story
                colour="red"
                heading="From Coders to Founders: The Workerbird story"
                subtitle="How Becky Botha and Johanna Herman learnt to code and launched Workerbird, a Tech for Good startup…"
                author="Founders and Coders"
                date="Sep 22"
              />
            </StoryContainer>
          </HeadingWithBody>
          <NextPanel component={this} to="/" topBorder>
            Back to homepage
          </NextPanel>
        </main>
      </Layout>
    )
  }
}
export default StoriesPage
