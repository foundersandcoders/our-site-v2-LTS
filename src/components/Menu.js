import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import HomeLogo from "./HomeLogo"

import iconLogo from "../assets/logos/fac_round_logo.png"
import { breakpoint } from "../styles/utils"

const universalTransition = "transition: 1s ease-in-out"

const StickyMenuTriangle = styled.div.attrs({
  className: "fixed pointer ph2 flex items-center justify-between menu-tri",
})`
  ${universalTransition};
  z-index: 12;
  right: 0;
  top: 0;
  width: 70px;
  height: 60px;
  transition: 0.5s;
  background: transparent;
  ${breakpoint.ns`
    justify-content: center;
    padding-right: 32px;
    height: 5rem;
    width: 5rem;
    left: calc((100vw - 1440px) * 0.5);
    top: calc((100vh - 5rem) * 0.5);
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background: ${({ active, color }) =>
      active || color === "white" ? `var(--white)` : `var(--black)`};
  `};
  ${breakpoint.m`
    left: 0;
  `};
`

const MobileNavBar = styled.div.attrs({
  className: "dn-ns db pa1 w-100 bg-black fixed top-0 left-0 z-5",
})`
  height: 60px;
`
const RoundLogoMobile = styled.div`
  background: url(${iconLogo}) no-repeat;
  height: 46px;
  width: 46px;
`

const StyledSVG = styled.svg`
  .menu-line {
    z-index: 24;
    transform: rotate(180deg) translateY(10px);
    ${universalTransition};
    transform-origin: center;
  }
  .arrow-formation:nth-of-type(1) {
    transform: rotate(405deg);
  }
  .arrow-formation:nth-of-type(2) {
    transform: rotate(405deg) translate(0px, 8px);
  }
  .arrow-formation:nth-of-type(3) {
    transform: rotate(315deg) translate(2px, 19px);
  }
  ${breakpoint.ns`
    .menu-line {
      transform: rotate(90deg) translateY(10px);
    }
  `};
`

const MenuAnimatedSVG = ({ active, color }) => {
  return (
    <StyledSVG
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={`menu-line ${active ? "arrow-formation" : ""}`}
        y="16"
        width="40"
        height="2"
        fill={active || color === "black" ? "black" : "white"}
      />
      <rect
        className={`menu-line ${active ? "arrow-formation" : ""}`}
        y="8"
        width="40"
        height="2"
        fill={active || color === "black" ? "black" : "white"}
      />
      <rect
        className={`menu-line ${active ? "arrow-formation" : ""}`}
        width="40"
        height="2"
        fill={active || color === "black" ? "black" : "white"}
      />
    </StyledSVG>
  )
}

const MenuContainer = styled.div.attrs({})`
  position: fixed;
  z-index: 11;
`

const MenuInnerContainer = styled.div.attrs({
  className: "bg-white flex flex-column flex-row-ns",
})`
  ${universalTransition};
  position: absolute;
  height: 100vh;
  width: 100vw;
  right: ${({ active }) => (active ? "-1440px" : "0")};
  top: 0;
  max-width: 1440px;
  ${breakpoint.m`
    position: fixed;
    left: ${({ active }) => (active ? "0" : "-100%")};
    right: auto;
`};
  ${breakpoint.s`
    position: fixed;
    top: ${({ active }) => (active ? "0" : "-100%")};
    right: auto;
    left: 0;
`};
`

const MenuSidebar = styled.div.attrs({
  className: "bg-yellow",
})`
  height: 100vh;
  width: 30vw;
  ${breakpoint.s`
    height: 149px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  `};
`
const MenuMain = styled.div.attrs({
  className: "pv0 pv6-ns mv0 mv5-ns flex flex-column justify-center",
})`
  height: calc(100vh - 149px);
  width: 100vw;
  padding-top: 0;
  ${breakpoint.ns`
    height: 100vh;
    width: 70vw;
  `};
`

const MenuNumber = styled.div.attrs({})`
  padding-top: 3px;
  font-size: 16px;
  ${breakpoint.s`
    font-sixe: 12px;
  `};
`

const MenuImage = styled.div.attrs({
  className: "pl3 ttu",
})`
  ${breakpoint.ns`
    font-size: 48px;
    color: white;
    -webkit-text-stroke: 1px black;
    &:hover {
      color: var(--black);
    }
  `} ${breakpoint.s`
    font-size: 38px;
    color: black;
    padding-left: 3px;
  `};
`

const MenuItemContainer = styled.div.attrs({
  className: "border-box pl2 pv3 flex justify-start items-top",
})`
  width: 100%;
  ${breakpoint.ns`
    padding-left: 64px;
  `};
`

const MenuItem = ({ number, item, active, link }) => (
  <Link to={`/${link}`} className="link black">
    <MenuItemContainer active={active}>
      <MenuNumber active={active}>{number}</MenuNumber>
      <MenuImage active={active}>{item}</MenuImage>
    </MenuItemContainer>
  </Link>
)

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { menuActive: false, panelTop: 0, menuTop: 0 }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  toggleMenu = () => {
    this.setState(prevProps => ({
      menuActive: !prevProps.menuActive,
    }))
  }

  handleScroll = () => {
    const panel = document
      .querySelector(".panel-container")
      .getBoundingClientRect()
    const menuTri = document.querySelector(".menu-tri").getBoundingClientRect()
    this.setState({
      panelTop: panel.top,
      menuTop: menuTri.top,
    })
  }

  render() {
    const { menuActive, panelTop, menuTop } = this.state
    return (
      <div className="flex db-ns absolute left-0">
        <MenuContainer>
          <MenuInnerContainer active={menuActive}>
            <MenuSidebar active={menuActive}>
              <HomeLogo className="ml2 ml7-m pl6-l mh0-l" />
            </MenuSidebar>
            <MenuMain active={menuActive}>
              <MenuItem
                active={menuActive}
                number="01"
                item="what and who"
                link={"about"}
              />
              <MenuItem
                active={menuActive}
                number="02"
                item="apply"
                link={"apply"}
              />
              <MenuItem
                active={menuActive}
                number="03"
                item="hire"
                link={"hire"}
              />
              <MenuItem
                active={menuActive}
                number="04"
                item="tech for better"
                link={"techforbetter"}
              />
              <MenuItem
                active={menuActive}
                number="05"
                item="stories"
                link={"stories"}
              />
            </MenuMain>
          </MenuInnerContainer>
        </MenuContainer>
        <StickyMenuTriangle
          active={menuActive}
          onClick={this.toggleMenu}
          color={panelTop < menuTop ? "white" : "black"}
        >
          <MenuAnimatedSVG
            active={menuActive}
            color={panelTop < menuTop ? "black" : "white"}
          />
        </StickyMenuTriangle>
        <MobileNavBar>
          <a href="/">
            <RoundLogoMobile />
          </a>
        </MobileNavBar>
      </div>
    )
  }
}

export default Menu
