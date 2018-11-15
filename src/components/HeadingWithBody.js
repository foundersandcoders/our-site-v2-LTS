import React from "react"
import { SmallUnderline } from "./Text"

const HeadingWithBody = ({ title, className = "", bgColour, children }) => (
  <div className={`mh2 mh7-m mh0-l ${className}`}>
    <SmallUnderline bgColour={bgColour} className="mb2 mb0-ns ml6-l">
      {title}
    </SmallUnderline>
    <div className="w-100 flex justify-end-l justify-start">
      <div className="font-2d5-ns font-4 fw3 w-75-l w-100 overflow-x-hidden">
        {children}
      </div>
    </div>
  </div>
)

export default HeadingWithBody
