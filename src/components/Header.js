import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoPNG from "../assets/logos/fac_logo.png"

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
`

const _TopNav = styled.nav.attrs({
  className: "flex w-75 justify-between",
})``

const TopNav = () => (
  <_TopNav>
    <TopLink to="/about" text="What is Founders & Coders?" number="01" />
    <TopLink to="/apply" text="Apply" number="02" />
    <TopLink to="/hire" text="Hire" number="03" />
    <TopLink to="/techforbetter" text="Tech for better" number="04" />
    <TopLink to="/stories" text="Stories" number="05" />
  </_TopNav>
)

const _TopLink = styled(Link).attrs({
  className:
    "flex flex-column justify-between b--gray bw1 bt link black fw3 font-6 w4 h3 pt1",
})`
  &:hover {
    border-color: var(--blue);
    transition: 0.5s;
  }
  &:active,
  &:focus {
    outline: 0;
  }
`
const TopLink = ({ to, text, number }) => (
  <_TopLink to={to} activeClassName="b--blue">
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
