import React from 'react'
import OffsetUnderlineText from './underline-text'

const HeadingWithBody = ({ title, children }) => (
  <div className="flex justify-between">
    <OffsetUnderlineText
      underlineColour="yellow"
      underlineWidth="4px"
      fontSize="font-5"
      fontWeight="fw3"
      title={title}
    />
    <div className="font-2d5 fw3 w-70">{children}</div>
  </div>
)

export default HeadingWithBody
