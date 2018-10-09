import React from "react"
import { SmallUnderline } from "./underlineText"

const HeadingWithBody = ({ title, className = "", bgColour, children }) => (
  <div className={`flex justify-between ${className}`}>
    <SmallUnderline bgColour={bgColour}>{title}</SmallUnderline>
    <div className="font-2d5 fw3 w-75">{children}</div>
  </div>
)

export default HeadingWithBody
