import React from "react"
import styled from "styled-components"

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
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

const Title = ({ firstName, secondName, title }) => (
  <TextContainer>
    <Text font="ttu fw5 f-subheadline lh-1">{firstName}</Text>
    <Text font="ttu fw5 f-subheadline lh-1">{secondName}</Text>
    <Text font="font-5 gray">{title}</Text>
  </TextContainer>
)

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-white tr ph1`,
})`
  width: fit-content;
`

const TextContainer = styled.div.attrs({
  className: "absolute flex items-end flex-column left-0 top-2 z-2",
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
  width,
  height,
  quote,
}) => (
  <Container width={width} height={height}>
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
    width="33%"
    height="50%"
    imgHeight="75%"
    img={dan}
  />
)
const Ines = () => (
  <Card
    firstName="Ines"
    secondName="Teles"
    title="Director"
    width="33%"
    height="50%"
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
    width="50vw"
    height="80vh"
    quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”"
  />
)

const Amelie = () => (
  <Card
    firstName="Amelie"
    secondName="Chan"
    title="FAC cohort #11"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“Because Founders and Coders is founded on the idea of peer-led learning, it stimulates an environment of support and mutual growth, which results in what feels like a very special community: a safe, creative space, where no question is too silly to ask and no idea is too bold to suggest.”"
  />
)
const Helen = () => (
  <Card
    firstName="Helen"
    secondName="Zhou"
    title="FAC cohort #13"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“Founders and Coders gave me the confidence to, given time and perseverance, grasp complex concepts which initially seemed daunting. I learned how to walk through code thoroughly and truly understand it in order to solve bugs and errors. And I discovered the joys of paired programming - that learning or tackling a problem together can be one of the most rewarding experiences. ”"
  />
)
const Owen = () => (
  <Card
    firstName="Owen"
    secondName="Turner-Major"
    title="FAC cohort #7"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“The constant focus on pairing and working together means that you're never stuck banging your head against a wall by yourself. You always have someone else to work through the problem with you. After leaving Founders and Coders, I had a lot of faith in my own ability to learn new technologies, which was crucial when I founded my startup, Fat Llama. ”"
  />
)
const Ruth = () => (
  <Card
    firstName="Ruth"
    secondName="Uwedenimo"
    title="FAC cohort #6"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“The best part of my experience with Founders and Coders are the people. It is a great community, with members of past cohorts teaching the current cohort. Everyone supports each other in their learning and wants to give back. ”"
  />
)
const Fatimat = () => (
  <Card
    firstName="Fatimat"
    secondName="Gbajabiamila"
    title="FAC cohort #12"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“Joe, our commercial manager, was supportive during and after Founders and Coders. Everybody's situation is different, which Joe recognizes and takes it into account when advising us. He listened to my concerns about working in the industry and paid attention to the kind of environment I wanted to work in, which helped him place me with my current employer, 27Partners.”"
  />
)
export { Card, Dan, Ines, Bez, Amelie, Helen, Owen, Ruth, Fatimat }
