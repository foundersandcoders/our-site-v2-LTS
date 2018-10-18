import React from "react"
import styled from "styled-components"

const _Table = styled.table.attrs({
  className: "fw3 font-4 mb6 dn db-ns",
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

const Cell = ({ children }) => (
  
  <_Cell>
    <p className="w-80">{children}</p>
  </_Cell>
)

const _Row = styled.tr.attrs({
  className: "bb b--black-20 bw1",
})``

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
      <_Row>
        <Cell>Spring 2019</Cell>
        <Cell>Until 30th November</Cell>
        <Cell>1st December - 31st December</Cell>
        <Cell>7th January - 12th January</Cell>
        <Cell>4th March, 2019 - June 21st, 2019</Cell>
      </_Row>
      <_Row>
        <Cell>Summer 2019</Cell>
        <Cell>January - March</Cell>
        <Cell>1st April - 30th April</Cell>
        <Cell>7th May - 11th May</Cell>
        <Cell>1st July 2019 - 18th October, 2019</Cell>
      </_Row>
      <_Row>
        <Cell>Winter 2019</Cell>
        <Cell>May - July</Cell>
        <Cell>1st August - 31st August</Cell>
        <Cell>2nd September - 7th September</Cell>
        <Cell>28th October 2019 - 21st February 2020</Cell>
      </_Row>
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="5" className="pt4">
          * Applications close at midnight GMT on the final day of the window.
        </td>
      </tr>
    </tfoot>
  </_Table>
)

export default Table
