import React, { Component, Fragment } from "react"
import styled from "styled-components"

import link_arrow_button from "../assets/ui/link_arrow_button.svg"
import tech_for_better_splash from "../assets/splashes/tech_for_better_splash.png"
import home_splash from "../assets/splashes/home_splash.png"

import Layout from "../components/Layout"
import { DOWN_CURSOR, APPLICATION_CAROUSEL } from "../constants"

import { Cursor } from "../components/Cursor"
import { BigUnderline, _SubHeading, _BigText, _ExternalLink } from "../components/Text"
import DoubleLine from "../components/DoubleLine"
import Carousel from "../components/Carousel"
import Step from "../components/Step"
import HeadingWithBody from "../components/HeadingWithBody"
import { CollapsableQuestion, QuestionWrapper } from "../components/Question"
import { Panel, ExtendedPanel, NextPanel } from "../components/Panel"
import InnerGridContainer from "../components/InnerGridContainer"

const TechforBetterSteps = () => (
  <Fragment>
    <Step
      step="01"
      colour="yellow"
      title="Step 1: Introductory workshop (2 hours)"
    >
      Start by defining your challenge, describing your users, and identifying
      their needs. Finish up by preparing a user survey, which you will conduct
      over the following week.
    </Step>
    <Step
      step="02"
      colour="green"
      title="Step 2: Definition workshop (2 hours)"
    >
      Recap the results of the user survey and redefine the problem, identify a
      specific user journey that addresses that problem, and begin the design
      process with some paper prototyping.
    </Step>
    <Step
      step="03"
      colour="red"
      title="Step 3: Product owner workshop (2 hours)"
    >
      Explore your role as a product owner and familiarise yourself with project
      management tools and the application development process. End by creating
      a series of user stories which can form the basis of your app.
    </Step>
    <Step step="04" colour="blue" title="Development (3-4 weeks)">
      At this point, we are ready to schedule product development! A team of 2-4
      developers will work with you to build a mobile web app that can be tested
      with users and form the basis of applications for further funding.
    </Step>
  </Fragment>
)
const Splash = styled.img.attrs({
  className: "w-90 w-100-ns mv7-ns pt5-ns pt4 pb6-ns pb5 mh2 mh0-ns",
})``

const _Link = styled.a.attrs({
  className: "mt1 v-mid flex items-center blue",
})``

const Button = styled.button.attrs({
  className: "db font-2 b fw5 pv2 ph6 bg-black white pointer tc center",
})``

const LinkWrapper = styled.a.attrs({
  className: "no-underline",
  target: "_blank"
})``

const CaseStudy = ({ title, url, children }) => (
  <div className="flex flex-column justify-between font-4 mb5-ns mb3">
    <_SubHeading className="mb1">{title}</_SubHeading>
    {children}
    <_Link href={url} className="mt1" target="_blank">
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
            <Panel justify="center justify-end-ns">
              <_BigText className="pt5 ph1 ph0-ns w-100 w-75-ns">
                Tech for Better Programme
              </_BigText>
            </Panel>
            <DoubleLine colour="yellow" />
            <Panel
              justify="center justify-end-ns"
              className="mb6-ns mb5 mh2 mh0-ns"
            >
              <div className="w-75-ns">
                <BigUnderline>
                  Your ideas can make the world a better place.
                </BigUnderline>
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
          <ExtendedPanel className="bg-light-gray mb7-ns dn db-ns">
            <Carousel
              title="How does it work?"
              carouselWidth="200vw"
              type={APPLICATION_CAROUSEL}
              component={this}
            >
              <TechforBetterSteps />
            </ Carousel>
          </ExtendedPanel>
          <div className="bg-light-gray mb5">
            <HeadingWithBody
              title="How do I apply?"
              className="db dn-ns bg-light-gray pv6"
            >
              <TechforBetterSteps />
            </HeadingWithBody>
          </div>
          <InnerGridContainer>
            <HeadingWithBody title="More information" className="mb7-ns pb4-ns">
              <QuestionWrapper>
                <CollapsableQuestion
                  question="How will this programme benefit me?"
                  colour="yellow"
                >
                  <p>
                  You will gain experience working with a software development team and see your ideas take shape in digital form. By the end of the process you will have a working mobile web app that you can test with users.
                  </p>
                </CollapsableQuestion>
                <CollapsableQuestion
                  question="What is the total time commitment required of me?"
                  colour="green"
                >
                  <p>
                  After the initial workshops, around 20 hours over the one-month product development period, testing the app, giving feedback and meeting with the developers.
                  </p>
                </CollapsableQuestion>

                <CollapsableQuestion
                  question="What if I want to continue development after the programme ends?"
                  colour="blue"
                >
                  <p>
                  We are in the process of identifying potential sources of funding for continued development of projects.
                  </p>
                </CollapsableQuestion>
                <CollapsableQuestion
                  question="Why are you running this programme?"
                  colour="red"
                >
                  <p>
                  This programme provides an opportunity for our developers in both London and Gaza to gain experience, improve their employability, and work on projects that make a real difference to people’s lives.
                  </p>
                </CollapsableQuestion>
                <CollapsableQuestion
                  question="What is a 'web app'?"
                  colour="green"
                >
                  <p>
                  A web app is a website that looks and feels like a mobile app. This means that users won’t have to download anything from an app store. Web apps can be accessed by anyone using a web browser on a computer, tablet, or smartphone.
                  </p>
                </CollapsableQuestion>
                <CollapsableQuestion
                  question="What sorts of apps do you build?"
                  colour="yellow"
                >
                  <p>
                  Three examples of previous projects are linked to below. 
                  </p>
                </CollapsableQuestion>
              </QuestionWrapper>
            </HeadingWithBody>
            <HeadingWithBody title="Case studies" className="mb3 mb0-ns">
              <CaseStudy
                title="Breathe With Me (Anna Freud Centre, 2016)"
                url="https://breathewithme.co.uk/"
              >
                is a web app that helps young people manage their anxiety, built
                with input from young people and the clinical team at the Anna
                Freud Centre.
              </CaseStudy>
              <CaseStudy
                title="Down to Earth (Quaker Social Action, CAST, 2016)"
                url="https://quaker-social-action.github.io/dte-website/www/"
              ><div>
                is a service that provides practical support for people
                struggling with funeral costs. During the <_ExternalLink href="https://wearecast.org.uk/for-nonprofits/fellowship/">CAST Digital
                Fellowship</_ExternalLink>, our developers built a funeral costs calculator
                which was shortlisted for the <_ExternalLink href="https://www.comicrelief.com/news/tech-for-good-2018">2018 Comic Relief Tech for Good
                awards</_ExternalLink>.
                </div>
              </CaseStudy>
              <CaseStudy title="Little Window (CHAYN, 2018)" url="https://chayn.co/">
                <div>
                is a chatbot to help women who are victims of domestic abuse
                find information on the Chayn website relevant to their needs,
                funded by <_ExternalLink href="https://www.filament.ai/">Filament Consultancy Group</_ExternalLink>. Read about both <_ExternalLink href="https://medium.com/hack-for-chayn/were-trying-something-new-say-hello-to-little-window-our-chatbot-36a65ac44fda">the
                client’s</_ExternalLink> and <_ExternalLink href="https://medium.com/hack-for-chayn/building-little-window-how-we-created-a-chatbot-for-chayn-682ecf7bd495">the developers’</_ExternalLink> experience of the project.
                </div>
              </CaseStudy>
            </HeadingWithBody>
            <LinkWrapper href="https://airtable.com/shrMtNWdsGQQs65mO"><Button>Apply</Button></LinkWrapper>
            <Splash src={home_splash} />
            <HeadingWithBody
              title="What is Founders and Coders?"
              className="mb7 pb2"
            >
              Founders and Coders CIC is a UK-based nonprofit that develops and
              runs tuition-free training programmes in web development, guided
              by our core values of cooperation, inclusion and social impact. In
              2017, <_ExternalLink href="/">we partnered with MercyCorps to establish a campus in Gaza</_ExternalLink>,
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
