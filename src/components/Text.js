import React from "react"
import styled from "styled-components"
import * as r from "ramda"

const OffsetUnderline = styled.span.attrs({
  className: ({ fontSize, fontWeight, colour }) =>
    `relative ${fontSize} ${fontWeight} ${colour} z-3`,
})`
  background-image: ${({ underlineColour }) =>
    `linear-gradient(to right, var(--${underlineColour}) 0%, var(--${underlineColour}) 100%)`};
  background-repeat: repeat-x;
  background-position: 0 90%;
  background-size: ${({ underlineWidth }) => `100% ${underlineWidth}`};
`

const SmallUnderline = ({ children, bgColour, className }) => (
  <div className={`bg-${bgColour} ${className}`}>
    {r.is(String, children) ? (
      <OffsetUnderline
        underlineColour="yellow"
        underlineWidth="4px"
        fontSize="font-5"
        fontWeight="fw3"
      >
        {children}
      </OffsetUnderline>
    ) : (
      r.map(text => {
        return (
          <OffsetUnderline
            key={text}
            underlineColour="yellow"
            underlineWidth="4px"
            fontSize="font-5"
            fontWeight="fw3"
          >
            {text}
          </OffsetUnderline>
        )
      }, children)
    )}
  </div>
)

const BigUnderline = ({ children }) => (
  <div>
    {r.is(String, children) ? (
      <OffsetUnderline
        underlineColour="yellow"
        underlineWidth="8px"
        fontSize="subheadline-ns font-2"
        fontWeight="fw5"
      >
        {children}
      </OffsetUnderline>
    ) : (
      r.map(text => {
        return (
          <OffsetUnderline
            key={text}
            underlineColour="yellow"
            underlineWidth="8px"
            fontSize="subheadline-ns font-2"
            fontWeight="fw5"
          >
            {text}
          </OffsetUnderline>
        )
      }, children)
    )}
  </div>
)
const MassiveUnderline = ({ children, colour = "yellow" }) => (
  <div>
    {r.is(String, children) ? (
      <OffsetUnderline
        underlineColour={colour}
        underlineWidth="60px"
        bottom="0"
        fontSize="headline"
        fontWeight="fw5"
      >
        {children}
      </OffsetUnderline>
    ) : (
      r.map(text => {
        return (
          <OffsetUnderline
            key={text}
            underlineColour={colour}
            underlineWidth="60px"
            bottom="0"
            fontSize="headline"
            fontWeight="fw5"
          >
            {text}
          </OffsetUnderline>
        )
      }, children)
    )}
  </div>
)
const OffsetUnderlineText = ({
  fontSize,
  fontWeight,
  title,
  underlineColour,
  colour,
  className,
  underlineWidth,
}) => (
  <OffsetUnderline
    fontSize={fontSize}
    className={className}
    underlineColour={underlineColour}
    underlineWidth={underlineWidth}
    fontWeight={fontWeight}
    colour={colour}
  >
    {title}
  </OffsetUnderline>
)

const _Heading = styled.h2.attrs({
  className: "fw5 b font-3",
})``

const _SubHeading = styled.h3.attrs({
  className: "fw5 b font-4",
})``

const _BigText = styled.h1.attrs({
  className: ({ colour = "black" }) =>
    `subheadline headline-ns fw5 w-70 ${colour}`,
})``

const _LinkText = styled.a.attrs({
  className: "blue di",
  target: "_blank"
})``

export {
  OffsetUnderlineText,
  SmallUnderline,
  BigUnderline,
  MassiveUnderline,
  _Heading,
  _SubHeading,
  _BigText,
  _LinkText
}
