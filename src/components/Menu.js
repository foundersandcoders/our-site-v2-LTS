import React, { Component } from "react"
import styled from "styled-components"
import openMenu from "../assets/icons/open_menu_icon.svg"
import closeMenu from "../assets/icons/close_menu_icon.svg"
import { Link } from "gatsby"
import logo from "../assets/logos/fac_logo_black.svg"
import iconLogo from "../assets/logos/fac_round_logo.png"
import { breakpoint } from "../styles/utils"

const StickyMenuTriangle = styled.div.attrs({
  className: "fixed pointer ph2 pr2-s flex items-center justify-between",
})`
  z-index: 12;
  left: 0;
  top: 0;
  width: 100vw;
  height: 60px;
  transition: 0.5s;
  background: ${({ active }) => active ? `transparent` : `black`};
  ${breakpoint.ns`
    justify-content: center;
    padding-right: 32px;
    height: 5rem;
    width: 5rem;
    top: calc((100vh - 5rem) * 0.5);
    clip-path: polygon(100% 50%, 0 0, 0 100%);
    background: ${({ active }) => active ? `white` : `black`};
  `};
`

const RoundLogoMobile = styled.div.attrs({
  className: "dn-ns db",
})`
  transition: 0.5s;
  background: ${({ active }) => active ? "none" : `url(${iconLogo}) no-repeat` };
  height: 46px;
  width: 46px;
`

const MenuLines = styled.div.attrs({
  className: "",
})`
  transition: 0.5s;
  transform: rotate(90deg) translateX(5px);
  height: 40px;
  width: 40px;
  background: ${({ active }) => active ? `url(${closeMenu})` : `url(${openMenu})`};
  background-repeat: no-repeat;
  ${breakpoint.ns`
    transform: rotate(0) translateX(0);
  `} 
`

const MenuContainer = styled.div.attrs({
  className: " bg-white flex",
})`
  position: fixed;
  max-width: 1440px;
  height: 100vh;
  width: ${props => (props.active ? "100vw" : "0")};
  transition: 0.5s;
  top: 0;
  left: 0;
  z-index: 11;
`

const MenuSidebar = styled.div.attrs({
  className: "bg-yellow",
})`
  height: 100vh;
  transition: 0.5s;
  width: ${props => (props.active ? "30vw" : "0")};
  ${breakpoint.s`
    height: 149px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => (props.active ? "100vw" : "0")};
  `};
`
const MenuMain = styled.div.attrs({
  className: "pv6 mv5",
})`
  height: calc(100vh - 149px);
  transition: 0.5s;
  width: ${props => (props.active ? "70vw" : "0")};
  ${breakpoint.s`
    position: fixed;
    z-index: 15;
    top: 149px;
    left: 0;
    width: 100vw;
    padding-top: 0;
    margin-top: 45px;
  `};
`

const MenuNumber = styled.div.attrs({})`
  padding-top: 3px;
  font-size: ${({ active }) => (active ? "16px" : "0px")};
  transition: 0.5s;
  ${breakpoint.s`
    font-size: ${({ active }) => (active ? "12px" : "0px")};
  `}
`

const Logo = styled.img.attrs({
  className: "border-box pa5-ns",
})`
  width: ${({ active }) => (active ? "100%" : "0")};
  transition: 0.5s;
  ${breakpoint.s`
    height: 80px;
  `}
`

const MenuImage = styled.div.attrs({
  className: "pl3 ttu",
})`
  transition: 0.5s;
  ${breakpoint.ns`
    font-size: ${({ active }) => (active ? "48px" : "0px")};
    color: white;
    -webkit-text-stroke: 1px black;
    &:hover {
      color: black;
    }
  `}
  ${breakpoint.s`
    font-size: ${({ active }) => (active ? "38px" : "0px")};
    color: black;
    padding-left: 3px;
  `}
`

const MenuItemContainer = styled.div.attrs({
  className: "border-box pl2 pv3 flex justify-start items-top",
})`
  width: ${({ active }) => (active ? "100%" : "0")};
  transition: 0.3s;
  ${breakpoint.ns`
    padding-left: 64px;
  `}
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
    this.state = { menuActive: false }
  }

  toggleMenu = () => {
    this.setState(prevProps => ({
      menuActive: !prevProps.menuActive,
    }))
  }

  render() {
    const { menuActive } = this.state

    // commented out dn on line below to work on mobile menu
    return (
      <div className="df db-ns">
        <MenuContainer active={menuActive}>
          <MenuSidebar active={menuActive}>
            <Link to="/">
              <Logo
                active={menuActive}
                src={logo}
                alt="Founders and Coders Logo"
              />
            </Link>
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
        </MenuContainer>
        <StickyMenuTriangle active={menuActive} onClick={this.toggleMenu}>
          <RoundLogoMobile active={menuActive} />
          <MenuLines active={menuActive} />
        </StickyMenuTriangle>
      </div>
    )
  }
}

export default Menu
