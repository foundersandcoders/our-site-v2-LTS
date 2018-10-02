import React from "react"
import styled from "styled-components"
import * as r from "ramda"

const OffsetUnderline = styled.p.attrs({
  className: ({ fontSize, fontWeight, colour }) =>
    `relative ${fontSize} ${fontWeight} ${colour} z-1`,
})`
  height: fit-content;
  width: fit-content;

  &:after {
    position: absolute;
    content: "";
    height: ${({ underlineWidth }) => underlineWidth};
    z-index: -1;
    bottom: ${({ underlineWidth }) => underlineWidth};
    left: 0;
    width: 100%;
    background: ${({ underlineColour }) => `var(--${underlineColour})`};
  }
`

const SmallUnderline = ({ children }) => (
  <div>
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
        fontSize="subheadline"
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
            fontSize="subheadline"
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

export { OffsetUnderlineText, SmallUnderline, BigUnderline }
