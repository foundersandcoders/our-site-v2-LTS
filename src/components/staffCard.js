import React from 'react'
import styled from 'styled-components'
import profile from '../assets/photos/profile-placeholder.png'

const StaffContainer = styled.div.attrs({
  className: 'b--yellow ba bw3 absolute',
})`
  background: linear-gradient(rgba(8, 57, 231, 0.7), rgba(8, 57, 231, 0.7)),
    url(${profile}) center bottom no-repeat;
  background-size: contain;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  &:hover {
    background: url(${profile}) center bottom no-repeat;
    background-size: contain;
  }
`

const StaffTitle = ({ firstName, secondName, title }) => (
  <StaffTextContainer>
    <StaffText font="ttu fw5 f-subheadline lh-1">{firstName}</StaffText>
    <StaffText font="ttu fw5 f-subheadline lh-1">{secondName}</StaffText>
    <StaffText font="font-5">{title}</StaffText>
  </StaffTextContainer>
)

const StaffText = styled.p.attrs({
  className: ({ font }) => `${font} bg-white tr ph1`,
})``

const StaffTextContainer = styled.div.attrs({
  className: 'relative top-2',
})`
  width: fit-content;
  left: -30%;
`

const Quote = styled.div.attrs({
  className: 'relative fw3 font-3 ph2 pt2 pb1 bg-white',
})`
  width: 110%;
  left: 90%;
  top: -5%;
  letter-spacing: 0;
`

const StaffCard = ({
  firstName,
  secondName,
  title,
  img,
  width,
  height,
  quote,
}) => (
  <StaffContainer img={img} width={width} height={height}>
    <StaffTitle firstName={firstName} secondName={secondName} title={title} />
    {quote ? <Quote>{quote}</Quote> : <div />}
  </StaffContainer>
)

export default StaffCard
