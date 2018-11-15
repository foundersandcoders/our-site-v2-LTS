import React, { Fragment } from "react"
import styled from "styled-components"
import { APPLICATION_FORM, EXPRESSION_OF_INTEREST_FORM} from "../maintenance"

const _ApplicationsStatus = styled.section.attrs({
  className: ({ areOpen }) =>
    `pv3 left-0-l bottom-0-l absolute-l w-100 tc font-3 fw5 bg-${
      areOpen ? "blue white" : "yellow black"
    }`,
})``

const _Button = styled.button.attrs({
  className: ({ areOpen }) =>
   `pointer bg-white fw5 pv1 ph4 font-3 eesti bn ${areOpen ? "blue" : "black"}`
})``

const ApplicationsStatus = ({ areOpen }) => (
  <_ApplicationsStatus areOpen={areOpen}>
    {areOpen ? (
      <Fragment>
        Applications are now open!{" "}
        <a href={APPLICATION_FORM} target="_blank">
          <_Button areOpen={areOpen}>
            Apply now
          </_Button>
        </a>
      </Fragment>
    ) : (
      <Fragment>
        Applications are currently closed.{" "}
        <a href={EXPRESSION_OF_INTEREST_FORM} target="_blank">
          <_Button areOpen={areOpen}>
            Express Interest
          </_Button>
        </a>
      </Fragment>
    )}
  </_ApplicationsStatus>
)

export default ApplicationsStatus
