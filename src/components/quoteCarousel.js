import React from "react"
import styled from "styled-components"
var Flickity = require("react-flickity")

import quotemarks from "../assets/icons/quotemarks.svg"

const flickityOptions = {
  initialIndex: 0,
  cellSelector: ".sliderBoxes",
  accessibility: true,
  pageDots: true,
  wrapAround: true,
  autoPlay: 3000, // default false
}

const QuoteCarouselContainer = styled.div.attrs({
  className: "bg-light-gray w-100 h-70 flex justify-center",
})``

const Text = styled.p.attrs({
  className: ({ font }) => `${font} bg-yellow tr ph1`,
})`
  width: fit-content;
`

const TextContainer = styled.div.attrs({
  className: "flex items-end flex-column",
})``

const NameAndCompany = ({ firstName, secondName, company }) => (
  <TextContainer>
    <Text font="ttu fw5 f-subheadline lh-1">{firstName}</Text>
    <Text font="ttu fw5 f-subheadline lh-1">{secondName}</Text>
    <Text font="font-5">{company}</Text>
  </TextContainer>
)

const QuoteSlideContainer = styled.div.attrs({
  className: "bg-white mv6 ph3 pv2",
})``

const QuoteImage = styled.img.attrs({
  className: "ml1",
})``

const QuoteSlide = ({ quote, firstName, secondName, company }) => (
  <div className="sliderBoxes">
    <QuoteImage src={quotemarks} />
    <QuoteSlideContainer quote={quote}>
      <NameAndCompany
        firstName={firstName}
        secondName={secondName}
        company={company}
      />
      {quote}
    </QuoteSlideContainer>
  </div>
)

// class QuoteCarousel extends React.Component {
//   render() {
//     return (
//       <QuoteCarouselContainer>
//         <QuoteSlide
//           quote="This is my quote"
//           firstName="Lucy"
//           secondName="King"
//           company="InFact"
//         />
//       </QuoteCarouselContainer>
//     )
//   }
// }

class QuoteCarousel extends React.Component {
  render() {
    return (
      <QuoteCarouselContainer>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
        >
          <QuoteSlide
            quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
            firstName="Vinny"
            secondName="Marino"
            company="Unruly"
          />
          <QuoteSlide
            quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
            firstName="Vinny"
            secondName="Marino"
            company="Unruly"
          />
          <QuoteSlide
            quote="You understand our business and which developers will work best in our environment. I love that you offer diverse developers from all backgrounds and cultures. The developers we’ve hired have seamlessly slotted into our team here at Unruly."
            firstName="Vinny"
            secondName="Marino"
            company="Unruly"
          />
        </Flickity>
      </QuoteCarouselContainer>
    )
  }
}

export default QuoteCarousel
