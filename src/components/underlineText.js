import React from 'react'
import styled from 'styled-components'

const OffsetUnderline = styled.p.attrs({
  className: ({ fontSize, fontWeight, colour }) =>
    `relative ${fontSize} ${fontWeight} ${colour} z-1`,
})`
  height: fit-content;

  &:after {
    position: absolute;
    content: '';
    height: 4px;
    z-index: -1;
    bottom: ${({ underlineWidth }) => `${underlineWidth}`};
    left: 0;
    width: 100%;
    background: ${({ underlineColour }) => `${underlineColour}`};
  }
`

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

export default OffsetUnderlineText
