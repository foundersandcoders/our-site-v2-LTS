import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import HomeLogo from "./HomeLogo"
import { breakpoint } from "../styles/utils"

const _Header = styled.header.attrs({
  className: "dn flex-ns center pt6 justify-between",
})`
  max-width: 1280px;
  ${breakpoint.ql`
    width: 88%;
  `};
`

const _TopNav = styled.nav.attrs({
  className: "flex w-100 w-50-m w-75-l justify-between mr4",
})`
  ${breakpoint.ql`
    width: 74.1%;
  `};
`

const TopNav = () => (
  <_TopNav>
    <TopLink to="/about" text="What is Founders and Coders?" number="01" />
    <TopLink to="/apply" text="Apply" number="02" />
    <TopLink to="/hire" text="Hire" number="03" />
    <TopLink to="/techforbetter" text="Tech for Better" number="04" />
    <TopLink to="/stories" text="Stories" number="05" />
  </_TopNav>
)

const _TopLink = styled(Link).attrs({
  className:
    "flex flex-column justify-between b--gray bw1 bt link black fw3 font-6 w4 h3 pt1 relative",
})`
  &.active {
    border-color: var(--blue);
  }
  ${breakpoint.m`
    display: none;
    &.active {
      width: 100%;
      display: flex;
      margin-right: 48px;
      border-color: var(--blue);
    }
  `} &:after {
    content: "";
    display: block;
    border-top: 2px solid var(--blue);
    width: 0;
    position: absolute;
    top: -2px;
    left: 0;
    transition: 0.4s ease-in-out;
  }
  &:hover:after {
    width: 100%;
  }
  &:active,
  &:focus {
    outline: 0;
  }
  &:active,
  &:focus:after {
    width: 100%;
  }
`
const TopLink = ({ to, text, number }) => (
  <_TopLink to={to} activeClassName="active">
    <div>{text}</div>
    <div>{number}</div>
  </_TopLink>
)

const Header = () => (
  <_Header>
    <HomeLogo className="ml7-m" />
    <TopNav />
  </_Header>
)

export default Header
