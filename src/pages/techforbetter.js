import React, { Component } from "react"
import styled from "styled-components"

import link_arrow_button from "../assets/ui/link_arrow_button.svg"
import tech_for_better_splash from "../assets/splashes/tech_for_better_splash.png"
import home_splash from "../assets/splashes/home_splash.png"

import Layout from "../components/Layout"
import { DOWN_CURSOR, APPLICATION_CAROUSEL } from "../constants"

import { Cursor } from "../components/Cursor"
import { BigUnderline, _SubHeading, _BigText } from "../components/Text"
import DoubleLine from "../components/DoubleLine"
import Carousel from "../components/Carousel"
import Step from "../components/Step"
import HeadingWithBody from "../components/HeadingWithBody"
import { CollapsableQuestion } from "../components/Question"
import { Panel, ExtendedPanel, NextPanel } from "../components/Panel"
import InnerGridContainer from "../components/InnerGridContainer"

const Splash = styled.img.attrs({
  className: "w-100 mv7 pt5 pb6",
})``

const _Link = styled.a.attrs({
  className: "mt1 v-mid flex items-center",
})``

const Button = styled.button.attrs({
  className: "db font-2 b fw5 pv2 ph6 bg-black white pointer tc center",
})``

const CaseStudy = ({ title, url, children }) => (
  <div className="flex flex-column justify-between font-4 mb5">
    <_SubHeading className="mb1">{title}</_SubHeading>
    {children}
    <_Link href={url} className="mt1">
      <img src={link_arrow_button} className="mr1" />
      Check it out!
    </_Link>
  </div>
)

class TechForBetterPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="blue" />
        <main>
          <InnerGridContainer>
            <Panel justify="end">
              <_BigText className="pt5 w-75">
                Tech for Better Programme
              </_BigText>
            </Panel>
            <DoubleLine colour="yellow" />
            <Panel justify="end" className="mt7 mb6">
              <div className="w-75">
                <BigUnderline>Your ideas can make the</BigUnderline>
                <BigUnderline>world a better place.</BigUnderline>
              </div>
            </Panel>
            <HeadingWithBody title="Overview">
              Tech for Better is a pro-bono programme for nonprofits to build
              mobile web apps using developers in London and Gaza. Our
              developers will work closely with you to identify your needs, then
              build an app that meet those needs and helps you do what you do,
              but better. The only thing it will cost is your time.
            </HeadingWithBody>
            <Splash src={tech_for_better_splash} />
          </InnerGridContainer>
          <ExtendedPanel className="bg-light-gray mb7">
            <Carousel
              title="How does it work?"
              carouselWidth="200vw"
              type={APPLICATION_CAROUSEL}
              component={this}
            >
              <Step
                step="01"
                colour="yellow"
                title="Step 1: Introductory workshop (2 hours)"
              >
                Start by defining your challenge, describing your users, and
                identifying their needs. Finish up by preparing a user survey,
                which you will conduct over the following week.
              </Step>
              <Step
                step="02"
                colour="green"
                title="Step 2: Definition workshop (2 hours)"
              >
                Recap the results of the user survey and redefine the problem,
                identify a specific user journey that addresses that problem,
                and begin the design process with some paper prototyping.
              </Step>
              <Step
                step="03"
                colour="red"
                title="Step 3: Product owner workshop (2 hours)"
              >
                Explore your role as a product owner and familiarise yourself
                with project management tools and the application development
                process. End by creating a series of user stories which can form
                the basis of your app.
              </Step>
              <Step step="04" colour="blue" title="Development (3-4 weeks)">
                At this point, we are ready to schedule product development! A
                team of 2-4 developers will work with you to build a mobile web
                app that can be tested with users and form the basis of
                applications for further funding.
              </Step>
            </Carousel>
          </ExtendedPanel>
          <InnerGridContainer>
            <HeadingWithBody title="More information" className="mb7 pb4">
              <div>
                <div className="flex">
                  <CollapsableQuestion
                    question="How will this programme benefit me?"
                    colour="yellow"
                  >
                    <p>
                      Each course runs for sixteen weeks at Space4 in Finsbury
                      Park,
                      <span className="fw5">
                        {" "}
                        five days a week from 10:00 to 18:00.{" "}
                      </span>
                      We do not offer part-time or remote courses.
                    </p>
                  </CollapsableQuestion>
                  <CollapsableQuestion
                    question="What is the total time commitment required of me?"
                    colour="green"
                  >
                    <p>
                      Each course runs for sixteen weeks at Space4 in Finsbury
                      Park,
                      <span className="fw5">
                        {" "}
                        five days a week from 10:00 to 18:00.{" "}
                      </span>
                      We do not offer part-time or remote courses.
                    </p>
                  </CollapsableQuestion>
                </div>

                <div className="flex">
                  <CollapsableQuestion
                    question="What if I want to continue development after the programme ends?"
                    colour="blue"
                  >
                    <p>
                      Each course runs for sixteen weeks at Space4 in Finsbury
                      Park,
                      <span className="fw5">
                        {" "}
                        five days a week from 10:00 to 18:00.{" "}
                      </span>
                      We do not offer part-time or remote courses.
                    </p>
                  </CollapsableQuestion>
                  <CollapsableQuestion
                    question="Why are you running this programme?"
                    colour="red"
                  >
                    <p>
                      Each course runs for sixteen weeks at Space4 in Finsbury
                      Park,
                      <span className="fw5">
                        {" "}
                        five days a week from 10:00 to 18:00.{" "}
                      </span>
                      We do not offer part-time or remote courses.
                    </p>
                  </CollapsableQuestion>
                </div>
                <div className="flex">
                  <CollapsableQuestion
                    question="What is a 'web app'?"
                    colour="green"
                  >
                    <p>
                      Each course runs for sixteen weeks at Space4 in Finsbury
                      Park,
                      <span className="fw5">
                        {" "}
                        five days a week from 10:00 to 18:00.{" "}
                      </span>
                      We do not offer part-time or remote courses.
                    </p>
                  </CollapsableQuestion>
                  <CollapsableQuestion
                    question="What sorts of apps do you build?"
                    colour="yellow"
                  >
                    <p>
                      Each course runs for sixteen weeks at Space4 in Finsbury
                      Park,
                      <span className="fw5">
                        {" "}
                        five days a week from 10:00 to 18:00.{" "}
                      </span>
                      We do not offer part-time or remote courses.
                    </p>
                  </CollapsableQuestion>
                </div>
              </div>
            </HeadingWithBody>
            <HeadingWithBody title="Case studies">
              <CaseStudy
                title="Breathe With Me (Anna Freud Centre, 2016)"
                url="/"
              >
                is a web app that helps young people manage their anxiety, built
                with input from young people and the clinical team at the Anna
                Freud Centre.
              </CaseStudy>
              <CaseStudy
                title="Down to Earth (Quaker Social Action, CAST, 2016)"
                url="/"
              >
                is a service that provides practical support for people
                struggling with funeral costs. During the CAST Digital
                Fellowship, our developers built a funeral costs calculator
                which was shortlisted for the 2018 Comic Relief Tech for Good
                awards.
              </CaseStudy>
              <CaseStudy title="Little Window (CHAYN, 2018)" url="/">
                is a chatbot to help women who are victims of domestic abuse
                find information on the Chayn website relevant to their needs,
                funded by Filament Consultancy Group. Read about both the
                client’s and the developers’ experience of the project.
              </CaseStudy>
            </HeadingWithBody>
            <Button>Apply</Button>
            <Splash src={home_splash} />
            <HeadingWithBody
              title="What is Founders and Coders?"
              className="mb7 pb2"
            >
              Founders and Coders CIC is a UK-based nonprofit that develops and
              runs tuition-free training programmes in web development, guided
              by our core values of cooperation, inclusion and social impact. In
              2017, we partnered with MercyCorps to establish a campus in Gaza,
              where youth unemployment is among the highest in the world. The
              Tech for Better programme provides a rare opportunity for our
              developers there to gain experience working on real projects with
              overseas clients.
            </HeadingWithBody>
          </InnerGridContainer>
          <NextPanel component={this} to="/stories" topBorder>
            Stories about us
          </NextPanel>
        </main>
      </Layout>
    )
  }
}
export default TechForBetterPage
