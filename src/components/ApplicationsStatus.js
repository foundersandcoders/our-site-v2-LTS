import React, { Fragment } from "react"
import styled from "styled-components"
import { APPLICATION_FORM, EXPRESSION_OF_INTEREST_FORM } from "../maintenance"
import { breakpoint } from "../styles/utils"

const _ApplicationsStatus = styled.section.attrs({
  className: ({ areOpen }) =>
    `pv3 pv4-m left-0-l bottom-0-l w-100 tc font-3 fw5 bg-${
      areOpen ? "blue white" : "yellow black"
    }`,
})`
  ${breakpoint.ql`
    padding-top: var(--spacing-extra-small);
    padding-bottom: var(--spacing-extra-small);
  `};

  @media screen and (min-height: 700px) and (min-width: 65em) {
    position: absolute;
  }
`

const _Button = styled.button.attrs({
  className: ({ areOpen }) =>
    `pointer bg-white fw5 pv1 ph4 mv1-m mt3 mt0-l font-3 eesti bn ${
      areOpen ? "blue" : "black"
    }`,
})``

const ApplicationsStatus = ({ areOpen }) => (
  <_ApplicationsStatus areOpen={areOpen}>
    {areOpen ? (
      <Fragment>
        Applications are now open!{" "}
        <a href={APPLICATION_FORM} target="_blank" rel="noopener noreferrer">
          <_Button areOpen={areOpen}>Apply now</_Button>
        </a>
      </Fragment>
    ) : (
      <Fragment>
        Applications are currently closed.{" "}
        <a
          href={EXPRESSION_OF_INTEREST_FORM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <_Button areOpen={areOpen}>Express Interest</_Button>
        </a>
      </Fragment>
    )}
  </_ApplicationsStatus>
)

export default ApplicationsStatus
