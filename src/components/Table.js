import React from "react"
import styled from "styled-components"
import { COHORT_DATES } from "../maintenance"

const _Table = styled.table.attrs({
  className: "fw3 font-4 mb6 dn db-l",
})``

const _HeaderCell = styled.th`
  width: 20%;
`

const TopBorder = styled.div.attrs({
  className: ({ colour }) => `bt bw3 tl b--${colour} pt1 w-80 b`,
})``

const _Cell = styled.td.attrs({
  className: "pv5 mh2",
})`
  width: 20%;
`

const Cell = ({ children, underline }) => (
  <_Cell>
    <p className={`"w-80" ${underline && "underline"}`}>{children}</p>
  </_Cell>
)

const _Row = styled.tr.attrs({
  className: "bb b--black-20 bw1",
})``

const Row = ({ obj }) => {
  return (
    <_Row>
      <Cell underline>{obj.cohort}</Cell>
      <Cell>{obj.expression_of_interest}</Cell>
      <Cell>{obj.application_window}</Cell>
      <Cell>{obj.interview_dates}</Cell>
      <Cell>{obj.course_dates}</Cell>
    </_Row>
  )
}

const Table = () => (
  <_Table>
    <thead>
      <tr>
        <_HeaderCell>
          <TopBorder colour="gray">Cohort</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="yellow">Expression of interest</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="red">Application window</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="green">Interview dates</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="blue">Course dates</TopBorder>
        </_HeaderCell>
      </tr>
    </thead>
    <tbody>
      {COHORT_DATES.map((obj, index) => {
        return <Row obj={obj} key={index} />
      })}
    </tbody>
  </_Table>
)

export default Table
