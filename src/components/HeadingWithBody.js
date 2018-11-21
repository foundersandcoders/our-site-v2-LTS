import React from "react"
import { SmallUnderline } from "./Text"

const HeadingWithBody = ({ title, className = "", bgColour, children }) => (
  <div className={`mh2 mh7-m mh0-l ${className}`}>
    <SmallUnderline bgColour={bgColour} className="mb2 mb0-l ml6-l ph2-m w-50">
      {title}
    </SmallUnderline>
    <div className="w-100 flex justify-end-l justify-start">
      <div className="font-2d5-l font-3-m font-4 fw3 w-75-l w-100 overflow-x-hidden pr6-l ph2-m">
        {children}
      </div>
    </div>
  </div>
)

export default HeadingWithBody
