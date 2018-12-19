import Step from "../components/Step"
import styled from "styled-components"
import { _SubHeading, _ExternalLink } from "./Text"
import React, { Fragment } from "react"

import { EXPRESSION_OF_INTEREST_FORM } from "../maintenance"

const _ListItem = styled.li`
  list-style-type: circle;
  list-style-position: outside;
  margin-left: 20px;
`
const _Bold = styled.span.attrs({
  className: "fw5",
})``

const ApplicationSteps = () => (
  <Fragment>
    <Step
      step="01"
      colour="yellow"
      title="Submit your expression of interest and join our online community"
    >
      Please submit an expression of interest to get invited to events,
      workshops and meetups for prospective students.
      <br />
      <br />
      <_ExternalLink href={EXPRESSION_OF_INTEREST_FORM}>
        Submit expression of Interest
      </_ExternalLink>
      <br />
      <br />
      Introduce yourself in our{" "}
      <_ExternalLink href="https://gitter.im/codingforeveryone/london">
        Gitter room
      </_ExternalLink>{" "}
      where you can find the most up-to-date information on our programme,
      meetups, and ask us any questions you may have.
    </Step>
    <Step
      step="02"
      colour="blue"
      title="Start work on our course prerequisites"
    >
      Before we can consider your application, you will need to complete our
      course prerequisites. We encourage applicants to take as much time as they
      need to work through the material and to support each other during the
      preparation process, both online and through our meetups.
      <br />
      <br />
      Please read our course prerequisites (see section below) carefully before
      planning when to apply.
      <div className="pb4 pb0-l" />
    </Step>
    <Step step="03" colour="red" title="Submit an application">
      <p>
        Plan to spend about an hour completing the application form.
        <br />
        <br />
        If you submit your application before the deadline, keep working on the
        prerequisites and tidying up your website. We will evaluate your
        progress as of the date the window closes.
      </p>
    </Step>
    <Step
      step="04"
      colour="green"
      title="The conversational interview"
      last={true}
    >
      We invite a minimum of 24 people to interview (in person or remotely), and{" "}
      offer places to sixteen people per cohort. You’ll be interviewed by a
      panel of Founders and Coders staff and alumni.
    </Step>
  </Fragment>
)

export default ApplicationSteps
