import React from "react"
import styled, { css } from "styled-components"

import quotemarks from "../assets/icons/quotemarks.svg"

const QuoteCarouselContainer = styled.div.attrs({
  className: "bg-light-gray w-100 h-70 flex justify-center",
})``

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-yellow tr ph1`,
})`
  width: fit-content;
`

const NameAndCompany = ({ firstName, secondName, company, className }) => (
  <div className={className}>
    <Text font="ttu fw5 font-1">{firstName}</Text>
    <Text font="ttu fw5 font-1">{secondName}</Text>
    <Text font="font-5">{company}</Text>
  </div>
)

const _NameAndCompany = styled(NameAndCompany).attrs({
  className: "absolute flex items-end flex-column",
})`
  bottom: -72px;
  right: -166px;
`

const QuoteSlideContainer = styled.div.attrs({
  className: "bg-white mt6 ph3 pv2 tc font-3 i",
})`
  margin-bottom: 152px;
`

const QuoteImage = styled.div.attrs({
  className: "absolute h2",
})`
  width: 39px;
  top: -16px;
  left: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ src }) =>
    css`
      background-image: url(${src});
    `};
`

const QuoteSlide = ({ quote, firstName, secondName, company }) => (
  <div className="w-33 relative center bg-white">
    <QuoteImage src={quotemarks} />
    <QuoteSlideContainer>{quote}</QuoteSlideContainer>
    <_NameAndCompany
      firstName={firstName}
      secondName={secondName}
      company={company}
    />
  </div>
)

class QuoteCarousel extends React.Component {
  render() {
    return (
      <QuoteCarouselContainer>
        <div>
          <QuoteSlide
            quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
            firstName="Vinny"
            secondName="Marino"
            company="Unruly"
          />
        </div>
      </QuoteCarouselContainer>
    )
  }
}

export default QuoteCarousel
