import React from "react"
import styled from "styled-components"

import dan from "../assets/portraits/dan.png"
import ines from "../assets/portraits/ines.png"

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

export { Card, Dan, Ines }
