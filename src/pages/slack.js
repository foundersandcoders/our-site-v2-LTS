import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import "../styles/index.css"

const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  line-height: 1.5;
  font-size: 1.25rem;

  h1 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 900;
  }

  h1,
  h2,
  h3 {
    line-height: 1.1;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .coc {
    margin: 2rem 0;
    padding: calc(1rem + 4vw);
    background-color: #f6f7f8;
    font-size: 1rem;
  }

  .coc > * + * {
    margin-top: 1em;
  }

  form {
  }
`

const Button = styled.button`
  margin: 1.5rem auto 0;
  display: flex;
  align-items: center;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  font-size: inherit;
  font-family: inherit;
  border: 0;
  padding: 0.75rem 1.5rem;
  background-color: #2e3138;
  color: #e3e5e8;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px #8ca6d9;
  }

  & > svg {
    margin-left: 0.5rem;
  }
`

const Checkbox = styled.input`
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked ~ label::before {
    background-color: #2e3138;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(220, 10%, 90%)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>');
  }

  &:focus ~ label::before {
    box-shadow: 0 0 0 3px #8ca6d9;
  }
`

const Label = styled.label`
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.75rem;
    border: 1px solid #2e3138;
    border-radius: 2px;
    background-position: center center;
    background-repeat: no-repeat;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:invalid > button[type="submit"] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const SlackPage = () => (
  <>
    <Helmet>
      <meta name="description" content="Join our Slack community" />
      <title>Slack Community - Founders and Coders</title>
    </Helmet>
    <Main>
      <h1>Founders and Coders Slack community</h1>
      <p>
        Please read and agree to our Code of Conduct before joining the
        community.
      </p>
      <section className="coc">
        <h2>Code of Conduct</h2>

        <p>
          All members are required to agree with the following code of conduct.{" "}
          <strong>
            All members of the community are expected to enforce this code
          </strong>{" "}
          at every community event, class, gathering or exchange (such as{" "}
          <a href="http://www.foundersandcoders.com">
            Founders and Coders classes
          </a>{" "}
          or our evening meetups, workshops and short courses), on our online
          forums (Slack and GitHub), and everywhere we interact under the{" "}
          <a href="http://www.github.com/foundersandcoders">
            Founders and Coders
          </a>{" "}
          banner.
        </p>

        <p>
          We expect cooperation from all participants in the community to{" "}
          <em>help ensure a safe environment for everybody</em>.
        </p>

        <h2 id="needhelp">Need Help?</h2>

        <p>
          Please reach out to us! Our contact details are on{" "}
          <a href="http://www.foundersandcoders.com">our website</a> or you can
          find your Course Facilitator (if you're a student of ours) or our
          admins on Slack. Don't stay silent!
        </p>

        <p>
          If you wish to make a complaint in London, please first review the{" "}
          <a href="https://github.com/foundersandcoders/london-membership/blob/master/complaints-policy.md">
            complaints policy
          </a>{" "}
          and submit a complaint with the{" "}
          <a href="https://github.com/foundersandcoders/london-membership/blob/master/complaints-policy.md">
            complaints form
          </a>
          .
        </p>

        <p>
          <small>
            Adapted from{" "}
            <a href="https://communitycodeofconduct.com/">
              Community Code of Conduct
            </a>
            , based on the{" "}
            <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
              Ada Initiative anti-harassment conference policy
            </a>
            .
          </small>
        </p>

        <h2 id="thequickversion">The Quick Version</h2>

        <p>
          Our community is dedicated to providing a harassment-free experience
          for everyone, regardless of gender, gender identity and expression,
          age, sexual orientation, disability, physical appearance, body size,
          race, ethnicity, religion (or lack thereof), or technology choices. We
          do not tolerate harassment of community members in any form. Sexual
          language, imagery or innuendo is not appropriate for any community
          event, including talks, workshops, parties, Gitter, Twitter and other
          online media or channels. Participants violating these rules may be
          sanctioned or expelled from the event and any future events, as well
          as the from the community itself, at the discretion of{" "}
          <a href="http://www.foundersandcoders.com">
            the organisers, Founders and Coders
          </a>
          .
        </p>

        <h2 id="thelongversion">The Long Version</h2>

        <p>
          Harassment includes offensive verbal or written comments related to
          gender, gender identity and expression, age, sexual orientation,
          disability, physical appearance, body size, race, ethnicity, religion,
          technology choices, sexual images in public spaces, deliberate
          intimidation, stalking, following, harassing photography or recording,
          sustained disruption of talks or other events, inappropriate physical
          contact, and unwelcome sexual attention.
        </p>

        <p>
          Participants asked to stop any harassing behaviour are expected to
          comply immediately.
        </p>

        <p>
          All those who interact with the community are also subject to the
          anti-harassment policy. It is the responsibility of <em>all</em> to
          ensure that a sexualised environment is not created.
        </p>

        <p>
          If a participant engages in harassing behaviour, the organisers may
          take any action they deem appropriate, including warning the offender
          or expulsion from the event or community without further warning.
        </p>

        <p>
          <strong>
            If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please{" "}
            <a href="#need-help">contact an organiser immediately</a>.
          </strong>
        </p>

        <p>
          Particularly in the case of physical events, organisers will be happy
          to help participants contact venue security or local law enforcement,
          provide escorts, or otherwise assist those experiencing harassment to
          feel safe for the duration of the event. We value your attendance and
          contributions to the community.
        </p>

        <p>
          We expect participants to follow these rules in all community
          interactions, whether professional, social or a mix of both.
        </p>

        <p>
          If someone has violated these rules, please review the{" "}
          <a href="https://github.com/foundersandcoders/london-membership/blob/master/complaints-policy.md">
            Complaints Policy
          </a>{" "}
          and make a complaint using our{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScbvvYpXwUp6lwFoityTUHYfrXgC3r8WH72LowXp5wFS9IxVA/viewform">
            complaints form
          </a>
          .
        </p>
      </section>
      <Form
        action="https://join.slack.com/t/founders-coders-apply/shared_invite/enQtODY1MzIyNTAyMDk5LTc4NzUxY2VjMzcwMjFlYzE4ZGI3NWE5Y2M5MDg1OGJiMDE5NTk3MTRhZjYyY2RhNzE1OGY2M2ZlYmQwMzBmZTM"
        method="GET"
      >
        <div>
          <Checkbox type="checkbox" id="accept" required />
          <Label htmlFor="accept">I agree to the Code of Conduct</Label>
        </div>
        <Button type="submit">
          Join Slack
          <svg
            width="20"
            height="20"
            fill="currentcolor"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
          </svg>
        </Button>
      </Form>
    </Main>
  </>
)

export default SlackPage
