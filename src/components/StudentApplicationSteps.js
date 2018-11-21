import Step from "../components/Step"
import styled from "styled-components"
import { _SubHeading, _ExternalLink } from "./Text"
import React, { Fragment } from "react"

import { EXPRESSION_OF_INTEREST_FORM } from "../maintenance"

const _ListItem = styled.li`
  list-style-type: circle;
  list-style-position: inside;
`

const ApplicationSteps = () => (
  <Fragment>
    <Step step="01" colour="yellow" title="Submit your expression of interest">
      Please submit an expression of interest to get invited to events,
      workshops and meetups for prospective students. We open expressions of
      interest six months before a cohort begins.
      <br/><br/>
      <_ExternalLink href={EXPRESSION_OF_INTEREST_FORM}>Submit expression of Interest</_ExternalLink>
    </Step>
    <Step
      step="02"
      colour="blue"
      title="Start work on our course prerequisites"
    >
      <span className="b">Before we can consider your application</span>, 
      you will need to complete our course prerequisites. We encourage
      applicants to take as much time as they need to work through the material
      and to support each other during the preparation process, both online and
      through our meetups.
    </Step>
    <Step>
      <div className="pb3 pb0-l">
        <_SubHeading className="mb1">Create a Github account</_SubHeading>
        You will use your <_ExternalLink href="https://github.com/">GitHub</_ExternalLink> account to join <_ExternalLink href="https://gitter.im/codingforeveryone/london">Gitter</_ExternalLink> and to create your one-page
        site on GitHub Pages.
      </div>
      <br />
      <div>
        <_SubHeading className="mb1">FreeCodeCamp</_SubHeading>
        Earn a minimum of 200 points on <_ExternalLink href="https://www.freecodecamp.org/">freeCodeCamp</_ExternalLink>. We recommend beginning
        with the following sections:
        <h3 className="underline mt1">Responsive Web Design Certification</h3>
        <ul>
          <_ListItem>Basic HTML and HTML5</_ListItem>
          <_ListItem>Basic CSS</_ListItem>
          <_ListItem>Responsive Web Design Principles</_ListItem>
          <_ListItem>CSS Flexbox</_ListItem>
        </ul>
        <h3 className="underline mt1">
          Javascript Algorithms and Data Structures Certification
        </h3>
        <ul>
          <_ListItem>Basic JavaScript</_ListItem>
          <_ListItem>ES6</_ListItem>
          <_ListItem>Basic Data Structures</_ListItem>
          <_ListItem>Basic Algorithm Scripting</_ListItem>
        </ul>
      </div>
    </Step>
    <Step>
      <div className="pb3 pb0-l">
        <_SubHeading className="mb1">Create a one-page website</_SubHeading>
          Create a one-page website in HTML and CSS (using some vanilla JavaScript if you’d like) and host it on GitHub Pages. <_ExternalLink href="https://www.mokacoding.com/blog/your-git-log-should-tell-a-story/">Your commit history should tell a story</_ExternalLink>, and your website must:
          <ul>
          <_ListItem>Tell us about who you are and why you are applying for the programme</_ListItem>
          <_ListItem>Contain a link back to the GitHub repo that contains the code for your site</_ListItem>
          <_ListItem>Contain links to your freeCodeCamp (please make sure that your profile is public) and Codewars pages </_ListItem>
          <_ListItem>Not use a GitHub theme</_ListItem>
          <_ListItem>Not use a framework like Bootstrap or libraries like jQuery</_ListItem>
        </ul>
      </div>
      <br />
      <div>
      <_SubHeading className="mb1">Codewars</_SubHeading>
        Reach 5 kyu and 300 honor points in JavaScript on <_ExternalLink href="https://www.codewars.com">Codewars</_ExternalLink>.
      </div>
    </Step>
    <Step step="03" colour="red" title="Submit an application">
      <p>
        Use <_ExternalLink href="https://prereq-check.herokuapp.com/">prereq-check</_ExternalLink> to ensure you are prepared to submit your
        application. Plan to spend about an hour completing the application
        form. If you submit your application before the deadline, we encourage you to
        keep learning and tidying up your website. We will evaluate your
        progress as of the date the window closes.
      </p>
    </Step>
    <Step step="04" colour="green" title="The conversational interview" last={true}>
      We invite a minimum of 24 people to interview (in person or remotely), and{" "}
      <span className="b">offer places to sixteen people per cohort</span>.
      You’ll be interviewed by a panel of Founders and Coders staff and alumni.
    </Step>
  </Fragment>
)

export default ApplicationSteps