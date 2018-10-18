import React from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import dan from "../assets/portraits/dan.png"
import ines from "../assets/portraits/ines.png"
import bez from "../assets/portraits/bez.png"

const _Photo = styled.img.attrs({
  className: "absolute top-0 ba bw3 b--yellow",
})`
  height: ${({ imgHeight = "80%" }) => imgHeight};
  padding-top: 3rem;
  left: 20%;
`

const Container = styled.div.attrs({
  className: "relative flex items-center justify-center",
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

  height: ${({ cardHeight: { s: cardHeight } }) => cardHeight};
  width: ${({ cardWidth: { s: cardWidth } }) => cardWidth};
`

const Title = ({ firstName, secondName, title }) => (
  <TextContainer>
    <Text font="ttu fw5 subheadline-ns font-3">{firstName}</Text>
    <Text font="ttu fw5 subheadline-ns font-3">{secondName}</Text>
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
    "absolute flex items-end flex-column left-0-ns left-1 top-2-ns bottom-2 z-2",
})``

const Quote = styled.div.attrs({
  className: "absolute right-0 top-2 i font-3 ph3 pt3 pb2 bg-white",
})`
  width: 50%;
  letter-spacing: 0;
`

const Card = ({
  firstName,
  secondName,
  title,
  img,
  imgHeight,
  cardWidth,
  cardHeight,
  quote,
}) => (
  <Container cardWidth={cardWidth} cardHeight={cardHeight}>
    <Title firstName={firstName} secondName={secondName} title={title} />
    <_Photo src={img} imgHeight={imgHeight} />
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
    cardWidth="50vw"
    cardHeight="80vh"
    quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”"
  />
)

export { Card, Dan, Ines, Bez }
