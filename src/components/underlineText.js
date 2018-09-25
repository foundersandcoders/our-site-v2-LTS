import React from 'react'
import styled from 'styled-components'

const OffsetUnderline = styled.p.attrs({
  className: ({ fontSize, fontWeight }) =>
    `relative ${fontSize} ${fontWeight} `,
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
  underlineWidth,
}) => (
  <OffsetUnderline
    fontSize={fontSize}
    underlineColour={underlineColour}
    underlineWidth={underlineWidth}
    fontWeight={fontWeight}
  >
    {title}
  </OffsetUnderline>
)

export default OffsetUnderlineText
