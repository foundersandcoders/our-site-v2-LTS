import React from "react"
import { SmallUnderline } from "./Text"

const HeadingWithBody = ({ title, className = "", bgColour, children }) => (
  <div className={className}>
    <SmallUnderline bgColour={bgColour} className="mb2 mb0-ns">
      {title}
    </SmallUnderline>
    <div className="w-100 flex justify-end-ns justify-start">
      <div className="font-2d5-ns font-4 fw3 w-75-ns w-100 overflow-x-hidden">
        {children}
      </div>
    </div>
  </div>
)

export default HeadingWithBody
