import React, { Component } from "react"
import styled from "styled-components"

import stripey_small from "../assets/ui/stripey_small.svg"

import Layout from "../components/layout"
import CollapsableQuestion from "../components/collapsable-q"
import { BigUnderline } from "../components/underlineText"
import { Panel, NextPanel } from "../components/Panel"
import HeadingWithBody from "../components/headingWithBody"
import { GreenLine } from "../components/DoubleLine"
import { Cursor } from "../components/Cursor"
import { DOWN_CURSOR } from "../constants"
import { Dan, Ines } from "../components/Card"

const Footnote = styled.p.attrs({
  className: "fw3 i font-4",
})``

const StaffPanel = styled(Panel).attrs({
  className: "pa7 flex flex-wrap items-between justify-around",
})`
  padding-top: 10rem;
  background: url("${stripey_small}") center;
  clip-path: polygon(
    0 100%,
    0 5%,
    3% 10%,
    10% 0,
    17% 10%,
    24% 0,
    31% 10%,
    38% 0,
    45% 10%,
    52% 0,
    59% 10%,
    66% 0,
    73% 10%,
    80% 0,
    87% 10%,
    94% 0,
    100% 7%,
    100% 100%
  );
`

class AboutPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="red" />
        <Panel justify="end" className="mt7 mb6">
          <div className="w-75">
            <BigUnderline>What is Founders and Coders?</BigUnderline>
          </div>
        </Panel>
        <HeadingWithBody title="Overview">
          Founders and Coders is not your ordinary coding bootcamp. We’re on a
          mission to prove that for many people peer-led learning is the most
          effective and least expensive route into the tech industry. Curious to
          learn more about our cooperative learning community? Read on for all
          your questions answered.
        </HeadingWithBody>
        <GreenLine />
        <HeadingWithBody title="More information">
          <div>
            <div className="flex">
              <CollapsableQuestion
                question="Where and when are your courses?"
                colour="yellow"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="Who else will be doing the course?"
                colour="green"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="What will be expected of me?"
                colour="blue"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="What will I learn on the course?"
                colour="red"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="What do you mean by 'peer-led' programme?"
                colour="green"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="How do you run the programme without charging fees?"
                colour="yellow"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="What are the opportunities after I graduate?"
                colour="red"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="I'd like to start my own business. Should I attend Founders and Coders?"
                colour="blue"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="I'm not a UK citizen. Can I attend Founders and Coders?"
                colour="yellow"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="Is there a minimum age for attending Founders and Coders?"
                colour="green"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="Why do you require applicants to use freeCodeCamp and Codewars?"
                colour="blue"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="How long will it take me to complete the prerequisites?"
                colour="red"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="What happens in your interviews?"
                colour="green"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="Can you tell me why I wasn't admitted or give me feedback on my application?"
                colour="yellow"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="Can I visit Founders and Coders?"
                colour="red"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
              <CollapsableQuestion
                question="Can I take time off the course?"
                colour="blue"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
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
                question="How did Founders and Coders get started?"
                colour="yellow"
              >
                <p>
                  Each course runs for sixteen weeks at Space4 in Finsbury Park,
                  <span className="fw5">
                    {" "}
                    five days a week from 10:00 to 18:00.{" "}
                  </span>
                  We do not offer part-time or remote courses.
                </p>
              </CollapsableQuestion>
            </div>
          </div>
          <Footnote>
            * Have a question we didn’t answer? Contact us and we’ll get right
            back to you!
          </Footnote>
        </HeadingWithBody>
        <HeadingWithBody title="Staff" className="pt4 mt7 pb7 mb5">
          Founders and Coders is a labour of love run by a small team of
          permanent staff. We are also tremendously grateful to the friends and
          alumni who graciously donate their time and energy to our thriving
          cooperative community.
        </HeadingWithBody>
        <StaffPanel height="120vh">
          <Dan />
          <Ines />
          <Dan />
          <Ines />
          <Dan />
        </StaffPanel>
        <NextPanel component={this} to={"/apply"}>
          Apply to our course
        </NextPanel>
      </Layout>
    )
  }
}

export default AboutPage
