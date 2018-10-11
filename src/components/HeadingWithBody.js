import React from "react"
import { SmallUnderline } from "./Text"

const HeadingWithBody = ({ title, className = "", bgColour, children }) => (
  <div className={className}>
    <SmallUnderline bgColour={bgColour}>{title}</SmallUnderline>
    <div className="w-100 flex justify-end">
      <div className="font-2d5 fw3 w-75">{children}</div>
    </div>
  </div>
)

export default HeadingWithBody
