import React, { Component, Fragment } from "react"
import styled from "styled-components"

import arrow_right_black from "../assets/ui/arrow_right_black.svg"
import rebecca_and_matt from "../assets/photos/rebecca_and_matt.png"
import becky_and_johanna from "../assets/photos/becky_and_johanna.png"
import coding_stress from "../assets/photos/coding_stress.png"
import boot_camp_rebels from "../assets/photos/boot_camp_rebels.png"
import get_with_the_program from "../assets/photos/get_with_the_program.png"
import little_window from "../assets/photos/little_window.png"

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
    {children.length > 3 && (
      <div className="mt2 lh-copy ttu flex items-center pointer">
        More
        <img className="ml2 w1" src={arrow_right_black} />
      </div>
    )}
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
          <HeadingWithBody title="Stories by us" className="mb7">
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
          <HeadingWithBody title="Stories about us" className="mb7">
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
                heading="How to Choose The Right Coding Bootcamp"
                img={coding_stress}
                subtitle="Last year I went through the Founders and Coders (FAC) software training program in London in order to turn my hobby into a living…"
                author="Per Harald Borgen"
                date="Jan 19 2016"
              />
              <Story
                colour="red"
                img={little_window}
                heading="Building Little Window: how we created a chatbot for Chayn"
                subtitle="Little Window — one of the first chatbot and AI innovations at the intersection of gender-based violence and tech for good..."
                author="Johanna Herman"
                date="Apr 15"
              />
              <Story
                colour="yellow"
                heading="London tech developers to set up new worker co-op"
                subtitle="One year ago I was a non-technical founder of a startup at the edge of bankruptcy. Today I work as a…"
                author="Anca Voinea"
                date="Jul 21 2018"
              />
              <Story
                colour="blue"
                heading="How studying law helped me with programming"
                subtitle="When I decided to learn to code, I didn’t expect there to be anything other than work ethic that would be transferable from my law degree."
                author="Katerina Pascoulis"
                date="Aug 2 2018"
              />
            </StoryContainer>
          </HeadingWithBody>
          <HeadingWithBody title="From the press" className="mb7">
            <StoryContainer>
              <Story
                colour="yellow"
                img={boot_camp_rebels}
                heading="Boot camp rebels: tech developers quit corporate careers"
                subtitle="Disappointed with “big tech”, coders are starting social impact start-ups. To some, technology companies represent the future..."
                author="Aliya Ram"
                publication="Financial Times"
                date="Oct 26, 2017"
              />
              <Story
                colour="blue"
                img={get_with_the_program}
                heading="Get with the program: the codeers offering training for free"
                subtitle="It’s the must-have skill-set of the 21st century, yet unless you’re rich enough to afford the training, or fortunate enough to be attending…"
                author="Kit Buchan"
                publication="The Guardian"
                date="Jul 26, 2015"
              />
              <Story
                colour="green"
                heading="The Free Coding Academy Model: How to Teach Our Next Generation…"
                subtitle="The world needs more trained software engineers; it’s a basic fact. The world also urgently needs more of those…"
                author="Adrian Bridgewater"
                publication="Forbes"
                date="Aug 31, 2015"
              />
              <Story
                colour="red"
                heading="Web developers crack the tuition code to snap up Young Co-operators Prize"
                subtitle="Full-time courses in software development do not usually come cheap. Even at the lower end of the market students are likely to be…"
                publication="Co-op UK"
                date="Mar 31, 2015"
              />
            </StoryContainer>
          </HeadingWithBody>
          <HeadingWithBody title="Podcasts" className="mb7">
            <StoryContainer>
              <Story
                colour="yellow"
                heading="GeekGirl Meets Katerina Pascoulis, CEO & Co-Founder at Personably"
                subtitle="First up: meet Katerina Pascoulis, a coder and entrepreneur who’s passionate about getting other women into tech…"
                publication="GeekGirl Meetup UK"
                date="1 month ago"
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
