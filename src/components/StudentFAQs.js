import React from "react"
import { Question } from "./Question"
import { _ExternalLink, _InternalLink } from "./Text"
import { EXPRESSION_OF_INTEREST_FORM } from "../maintenance"

const Where = ({ color }) => (
  <Question question="Where and when are your courses?" colour={color}>
    <p>
      Each course runs for eighteen weeks on-site in London at Space4 in
      Finsbury Park,
      <span className="fw5"> five days a week from 10:00 to 18:00. </span>
      We do not offer part-time or remote courses.
    </p>
  </Question>
)

const WhoElse = ({ color }) => (
  <Question question="Who else will be doing the course?" colour={color}>
    <p>
      In the last two years, 57% of our London intake were women. In our
      experience, cohorts thrive when teams represent a diversity of experiences
      and perspectives, providing many opportunities for people to learn new
      ways of thinking from each other.
    </p>
  </Question>
)

const Expectations = ({ color }) => (
  <Question question="What will be expected of me?" colour={color}>
    <p>
      As a student, you will spend 1-2 evenings/month mentoring prospective
      applicants. When you graduate, you will spend at least one full week
      volunteering as a mentor during the first eight weeks of the following
      cohort.
    </p>
  </Question>
)

const Learnings = ({ color }) => (
  <Question question="What will I learn on the course?" colour={color}>
    <p>
      During the first half of the course, you’ll spend eight weeks learning
      HTML, CSS, JavaScript, Node.JS and other basic building blocks of web
      development, as well as user-centred design and entrepreneurship, via
      workshops and team projects.
      <br />
      <br />
      During the second half of the course, you’ll tackle two extended team
      projects, one based on ideas pitched within the cohort and a final project
      for an external client that you will select as part of the{" "}
      <_InternalLink to="/techforbetter">Tech for Better</_InternalLink>{" "}
      programme.
    </p>
  </Question>
)

const PeerLed = ({ color }) => (
  <Question question="What do you mean by 'peer-led' programme?" colour={color}>
    <p>
      We have no paid teaching staff. While we do employ a part-time facilitator
      who coordinates course logistics, the course is primarily “peer-led.” You
      will learn to code by pair programming with a partner, working on team
      projects, and from “near-peer” mentorship by recent graduates.
    </p>
  </Question>
)

const Fees = ({ color }) => (
  <Question
    question="How do you run a programme without charging fees?"
    colour={color}
  >
    <p>
      Founders and Coders is a community founded on the principle of
      reciprocity. We expect all graduates to contribute back to the viability
      and development of the programme, starting by mentoring for at least one
      full week after they graduate.
      <br />
      <br />
      We support ourselves financially by acting as an employment agency. You
      can help us keep this programme free for future students by working with
      us to find employment, both after you graduate and throughout your career.
    </p>
  </Question>
)

const Suitability = ({ color }) => (
  <Question question="Who is this programme suitable for?" colour={color}>
    <p>
      There are no academic requirements, but not everyone will be suited to the
      style of learning our courses require. You need to be self-motivated,
      prepared to work long hours, and committed to collaborative working.
      Coding also requires a deep curiosity about how things work and a certain
      stubbornness in the face of repeated failure.
    </p>
  </Question>
)

const Opportunities = ({ color }) => (
  <Question
    question="What are the opportunities after I graduate?"
    colour={color}
  >
    <p>
      The majority of our graduates find employment through our employment
      agency within a few weeks of graduating. We also provide bursaries through
      the Founders programme to graduates who want to further develop their
      skills within the Founders and Coders community through working on social
      impact projects.
    </p>
  </Question>
)

const Founders = ({ color }) => (
  <Question
    question="I'd like to start my own business. Should I attend Founders and Coders?"
    colour={color}
  >
    <p>
      We’re called Founders and Coders for a reason! Several of our alumni have
      gone on to start successful companies, for example:{" "}
      <_ExternalLink href="https://www.amaliah.com/">Amaliah</_ExternalLink>,{" "}
      <_ExternalLink href="https://www.personably.co/">
        Personably
      </_ExternalLink>
      , <_ExternalLink href="https://fatllama.com/">Fat Lama</_ExternalLink>,{" "}
      <_ExternalLink href="https://scrimba.com/">Scrimba</_ExternalLink>, and{" "}
      <_ExternalLink href="http://www.workerbird.co.uk/">
        Workerbird
      </_ExternalLink>
      .
    </p>
  </Question>
)

const Citizen = ({ color }) => (
  <Question
    question="I'm not a UK citizen. Can I attend Founders and Coders?"
    colour={color}
  >
    <p>
      At this time, we are only accepting people who have the right to work in
      the UK and who intend to seek employment in London after the end of the
      programme. We do not offer support for visa applications.
    </p>
  </Question>
)

const Age = ({ color }) => (
  <Question
    question="Is there a minimum age for attending Founders and Coders?"
    colour={color}
  >
    <p>Yes, for insurance reasons you need to be 18.</p>
  </Question>
)

const Codewars = ({ color }) => (
  <Question
    question="Why do you require applicants to use freeCodeCamp and Codewars?"
    colour={color}
  >
    <p>
      We think freeCodeCamp and Codewars are two of the better free online
      resources available for programmers. Regardless of whether you join the
      course, using them will help you grow as a developer.
    </p>
  </Question>
)

const Prereqs = ({ color }) => (
  <Question
    question="How long will it take me to complete the prerequisites?"
    colour={color}
  >
    <p>
      How quickly you complete the prerequisites will depend on a variety of
      factors, such as technical background and time available. Our courses
      start three times a year so the next intake is never more than four months
      away.
    </p>
  </Question>
)

const Interviews = ({ color }) => (
  <Question question="What happens in your interviews?" colour={color}>
    <p>
      The conversational interview is an opportunity for us to learn more about
      your interests as a developer, understand why you want to join our
      community, and determine whether you’re likely to be a good fit for our
      learning environment. Interviews typically last for 20 minutes and include
      a short coding challenge.
    </p>
  </Question>
)

const Feedback = ({ color }) => (
  <Question
    question="Can you tell me why I wasn't admitted or give me feedback on my application?"
    colour={color}
  >
    <p>
      Unfortunately we don’t provide individualised admissions feedback. We do
      our best to admit a diverse cohort of individuals who will thrive in our
      cooperative community. Joining Founders and Coders is just one of many
      pathways to becoming a developer.
    </p>
  </Question>
)

const Visiting = ({ color }) => (
  <Question question="Can I visit Founders and Coders?" colour={color}>
    <p>
      We can’t accommodate drop-ins during the course from potential applicants,
      so please don’t stop by during course hours unannounced. If you’d like to
      see the space and meet current course participants please complete an{" "}
      <_ExternalLink href={EXPRESSION_OF_INTEREST_FORM}>
        expression of interest
      </_ExternalLink>{" "}
      to receive invitations to events, workshops, and meetups for prospective
      students.
      <br />
      <br />
      If you’re interested in a partnership, please{" "}
      <_InternalLink to="/about#footer">contact us</_InternalLink> or visit our{" "}
      <_InternalLink to="/hire">Hire</_InternalLink> page.
    </p>
  </Question>
)

const TimeOff = ({ color }) => (
  <Question question="Can I take time off during the course?" colour={color}>
    <p>
      It’s okay to miss one or two days of your cohort because of prior
      engagements, however, it’s not okay to miss more than that (e.g., a full
      week). If you would need to miss more than a couple of days of a cohort,
      you should apply for another cohort. Note that we generally don’t take
      bank holidays off.
    </p>
  </Question>
)

const Birth = ({ color }) => (
  <Question question="How did Founders and Coders get started?" colour={color}>
    <p>
      In 2013,{" "}
      <_ExternalLink href="https://www.linkedin.com/in/dsofer">
        Dan
      </_ExternalLink>{" "}
      started regular{" "}
      <_ExternalLink href="http://selforganising.org/">
        "self-organising"
      </_ExternalLink>{" "}
      meetups at the British Library with other people interested in improving
      their programming skills. In January 2014, he ran a{" "}
      <_ExternalLink href="https://vimeo.com/88149344">
        6-week pilot
      </_ExternalLink>{" "}
      at{" "}
      <_ExternalLink href="https://camdencollective.co.uk/">
        Camden Collective
      </_ExternalLink>
      . In the final days of{" "}
      <_ExternalLink href="https://vimeo.com/115169756">FAC3</_ExternalLink> in
      Camden, we learned that our classroom would no longer be available and the
      students spent the last week of their course organising{" "}
      <_ExternalLink href="https://www.indiegogo.com/projects/founders-coders-a-free-coding-academy-in-london#/">
        a successful crowdfunding campaign
      </_ExternalLink>
      . In January 2015, Founders and Coders incorporated as a C.I.C., with{" "}
      <_ExternalLink href="https://www.linkedin.com/in/iteles/">
        Ines
      </_ExternalLink>{" "}
      and{" "}
      <_ExternalLink href="https://www.linkedin.com/in/nelsonic/">
        Nelson
      </_ExternalLink>{" "}
      joining the team as a director and lead technical mentor.
    </p>
  </Question>
)

export default [
  Where,
  WhoElse,
  Expectations,
  TimeOff,
  Learnings,
  PeerLed,
  Fees,
  Suitability,
  Opportunities,
  Founders,
  Citizen,
  Age,
  Codewars,
  Prereqs,
  Interviews,
  Feedback,
  Visiting,
  Birth,
]
