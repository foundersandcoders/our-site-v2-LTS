import React, { Fragment } from "react"
import styled from "styled-components"
const _ApplicationsStatus = styled.section.attrs({
  className: ({ areOpen }) =>
    `pv3 left-0-ns bottom-0-ns absolute-ns w-100 tc font-3 bg-${
      areOpen ? "blue white" : "yellow black"
    }`,
})``

const ApplicationsStatus = ({ areOpen }) => (
  <_ApplicationsStatus areOpen={areOpen}>
    {areOpen ? (
      <Fragment>
        Applications are now open!{" "}
        <a className="underline pointer">APPLY HERE</a>
      </Fragment>
    ) : (
      <Fragment>
        Applications are currently closed. Please express interest{" "}
        <a className="underline pointer">HERE</a>.
      </Fragment>
    )}
  </_ApplicationsStatus>
)

export default ApplicationsStatus
