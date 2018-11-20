import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoPNG from "../assets/logos/fac_logo.png"
import { breakpoint } from "../styles/utils"

const _Header = styled.header.attrs({
  className: "dn flex-ns pt6 justify-between center",
})`
  max-width: 1280px;
`

const LogoStyled = styled.img.attrs({
  className: "border-box pl2 pr2",
  src: logoPNG,
  alt: "Founders and Coders Logo"
})`
  max-width: 260px;
  max-height: 110px;
  ${breakpoint.m`
    margin-left: 80px;
    width: 30vw;
  `}
`

const _TopNav = styled.nav.attrs({
  className: "flex w-75 w-50-m justify-between",
})``

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
    "flex flex-column justify-between b--gray bw1 bt link black fw3 font-6 w4 h3 pt1",
})`
  &.active {
    border-color: var(--blue);
  }
  ${breakpoint.m`
    display: none;
    &.active {
      width: 100%;
      display: flex;
      margin-right: 16px;
      border-color: var(--blue);
    }
  `
  }
  &:after {
    content: '';
    display: block;
    border-top: 2px solid var(--blue);
    width: 0;
    position: absolute;
    top: 0;
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
`
const TopLink = ({ to, text, number }) => (
  <_TopLink to={to} activeClassName="active">
    <div>{text}</div>
    <div>{number}</div>
  </_TopLink>
)

const Header = () => (
  <_Header>
    <Link to="/">
      <LogoStyled/>
    </Link>

    <TopNav />
  </_Header>
)

export default Header
