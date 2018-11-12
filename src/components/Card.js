import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import dan from "../assets/portraits/dan.png"
import ines from "../assets/portraits/ines.png"
import bez from "../assets/portraits/bez.png"

const _Photo = styled.img.attrs({
  className: "db absolute-ns top-0 ba bw3 b--yellow",
})`
  ${breakpoint.ns`
    height: ${({ imgHeight = "88%" }) => imgHeight};
    padding-top: 3rem;
    left: 20%;
  `}
`

const Container = styled.div.attrs({
  className: "relative flex items-center justify-center flex-column flex-row-ns",
})`
  ${({ cardHeight: { ns: cardHeight_ns }, cardWidth: { ns: cardWidth_ns } }) =>
    (cardHeight_ns || cardWidth_ns) &&
    breakpoint.ns`
  height: ${cardHeight_ns};
  width: ${cardWidth_ns};
  `};

  ${({ cardHeight: { m: cardHeight_m }, cardWidth: { m: cardWidth_m } }) =>
    (cardHeight_m || cardWidth_m) &&
    breakpoint.m`
  height: ${cardHeight_m};
  width: ${cardWidth_m};
  `};

  ${({ cardHeight: { l: cardHeight_l }, cardWidth: { l: cardWidth_l } }) =>
    (cardHeight_l || cardWidth_l) &&
    breakpoint.l`
  height: ${cardHeight_l};
  width: ${cardWidth_l};
  `};
  width: 85%;
  margin: auto;
  // height: ${({ cardHeight: { s: cardHeight } }) => cardHeight};
  // width: ${({ cardWidth: { s: cardWidth } }) => cardWidth};
`

const Title = ({ firstName, secondName, thirdName, title }) => (
  <TextContainer>
    <Text font="ttu fw5 font-1-l font-2-m font-3">{firstName}</Text>
    <Text font="ttu fw5 font-1-ns font-2-m font-3">{secondName}</Text>
    {thirdName && <Text font="ttu fw5 font-1-ns font-2-m font-3">{thirdName}</Text>}
    <Text font="font-5 gray">{title}</Text>
  </TextContainer>
)

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-white tr ph1-ns ph0`,
})`
  width: fit-content;
`

const TextContainer = styled.div.attrs({
  className:
    "absolute flex items-end flex-column bottom-2-ns z-2",
})`
  left: calc(-15% / 2);
  top: 450px;
  ${breakpoint.ns`
    top: 2rem;
    left: 1rem;
    min-width: 50%;
    transform: translateX(-48%);
  `}
`

const Quote = styled.div.attrs({
  className: "block absolute-ns right-0-ns top-2-ns i font-4-ns font-5 pa2 pa3-ns mt5 mb4 bg-white w-100 w-50-ns",
})`
  ${breakpoint.ns`
    letter-spacing: 0;
    transform: translateX(38%);
  `}
  ${breakpoint.m`
    transform: translateX(5%);
    padding: 16px;
  `}
`

const Card = ({
  firstName,
  secondName,
  thirdName,
  title,
  img,
  imgHeight,
  cardWidth,
  cardHeight,
  quote,
}) => (
  <Container cardWidth={cardWidth} cardHeight={cardHeight}>
    <_Photo src={img} imgHeight={imgHeight} />
    <Title
      imgHeight={imgHeight}
      firstName={firstName}
      secondName={secondName}
      thirdName={thirdName}
      title={title}
    />
    {quote ? <Quote>{quote}</Quote> : <div />}
  </Container>
)

const Dan = () => (
  <Card
    firstName="Dan"
    secondName="Sofer"
    title="Executive Director"
    cardWidth={{ ns: "33%", s: "66%" }}
    cardHeight={{ ns: "50%", s: "17%" }}
    imgHeight="75%"
    img={dan}
  />
)
const Ines = () => (
  <Card
    firstName="Ines"
    secondName="Teles"
    title="Director"
    cardWidth={{ ns: "33%", s: "66%" }}
    cardHeight={{ ns: "50%", s: "17%" }}
    imgHeight="75%"
    img={ines}
  />
)

const Bez = () => (
  <Card
    firstName="Besart"
    secondName="Hoxhaj"
    title="FAC cohort #2"
    img={bez}
    cardWidth={{ l: "50vw", m: "70vw", s: "90vw" }}
    cardHeight={{ l: "80vh", m: "50vh", s: "30vh" }}
    quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”"
  />
)

const Amelie = () => (
  <Card
    firstName="Amelie"
    secondName="Chan"
    title="FAC cohort #11"
    img={bez}
    cardWidth={{ l: "50vw", m: "70vw", s: "90vw" }}
    cardHeight={{ l: "80vh", m: "50vh", s: "30vh" }}
    quote="“Because Founders and Coders is founded on the idea of peer-led learning, it stimulates an environment of support and mutual growth, which results in what feels like a very special community: a safe, creative space, where no question is too silly to ask and no idea is too bold to suggest.”"
  />
)
const Helen = () => (
  <Card
    firstName="Helen"
    secondName="Zhou"
    title="FAC cohort #13"
    img={bez}
    cardWidth={{ l: "50vw", m: "70vw", s: "90vw" }}
    cardHeight={{ l: "80vh", m: "50vh", s: "30vh" }}
    quote="“Founders and Coders gave me the confidence to, given time and perseverance, grasp complex concepts which initially seemed daunting. I learned how to walk through code thoroughly and truly understand it in order to solve bugs and errors. And I discovered the joys of paired programming - that learning or tackling a problem together can be one of the most rewarding experiences. ”"
  />
)
const Owen = () => (
  <Card
    firstName="Owen"
    secondName="Turner-"
    thirdName="Major"
    title="FAC cohort #7"
    img={bez}
    cardWidth={{ l: "50vw", m: "70vw", s: "90vw" }}
    cardHeight={{ l: "80vh", m: "50vh", s: "30vh" }}
    quote="“The constant focus on pairing and working together means that you're never stuck banging your head against a wall by yourself. You always have someone else to work through the problem with you. After leaving Founders and Coders, I had a lot of faith in my own ability to learn new technologies, which was crucial when I founded my startup, Fat Llama. ”"
  />
)
const Ruth = () => (
  <Card
    firstName="Ruth"
    secondName="Uwedenimo"
    title="FAC cohort #6"
    img={bez}
    cardWidth={{ l: "50vw", m: "70vw", s: "90vw" }}
    cardHeight={{ l: "80vh", m: "50vh", s: "30vh" }}
    quote="“The best part of my experience with Founders and Coders are the people. It is a great community, with members of past cohorts teaching the current cohort. Everyone supports each other in their learning and wants to give back. ”"
  />
)
const Fatimat = () => (
  <Card
    firstName="Fatimat"
    secondName="Gbajabiamila"
    title="FAC cohort #12"
    img={bez}
    cardWidth={{ l: "50vw", m: "70vw", s: "90vw" }}
    cardHeight={{ l: "80vh", m: "50vh", s: "30vh" }}
    quote="“Joe, our commercial manager, was supportive during and after Founders and Coders. Everybody's situation is different, which Joe recognizes and takes it into account when advising us. He listened to my concerns about working in the industry and paid attention to the kind of environment I wanted to work in, which helped him place me with my current employer, 27Partners.”"
  />
)
export { Card, Dan, Ines, Bez, Amelie, Helen, Owen, Ruth, Fatimat }
