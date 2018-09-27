import React from 'react'
import styled from 'styled-components'

const _Photo = styled.div.attrs({
  className: 'ba bw3 b--yellow',
})`
  width: 60%;
  height: 90%;
  background: ${({ src }) => `url('${src}') center bottom no-repeat`};
  background-size: contain;
`

const TestimonialContainer = styled.div.attrs({
  className: 'relative flex items-center justify-center',
})`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

const TestimonialTitle = ({ firstName, secondName, title }) => (
  <TestimonialTextContainer>
    <TestimonialText font="ttu fw5 f-subheadline lh-1">
      {firstName}
    </TestimonialText>
    <TestimonialText font="ttu fw5 f-subheadline lh-1">
      {secondName}
    </TestimonialText>
    <TestimonialText font="font-5">{title}</TestimonialText>
  </TestimonialTextContainer>
)

const TestimonialText = styled.p.attrs({
  className: ({ font }) => `${font} bg-white tr ph1`,
})``

const TestimonialTextContainer = styled.div.attrs({
  className: 'absolute left-0 top-2',
})`
  width: fit-content;
`

const Quote = styled.div.attrs({
  className: 'absolute right-0 top-3 i font-3 ph3 pt3 pb2 bg-white',
})`
  width: 50%;
  letter-spacing: 0;
`

const TestimonialCard = ({
  firstName,
  secondName,
  title,
  img,
  width,
  height,
  quote,
}) => (
  <TestimonialContainer width={width} height={height}>
    <TestimonialTitle
      firstName={firstName}
      secondName={secondName}
      title={title}
    />
    <_Photo src={img} />
    {quote ? <Quote>{quote}</Quote> : <div />}
  </TestimonialContainer>
)

export default TestimonialCard
