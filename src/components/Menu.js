import React, { Component } from "react"
import styled from "styled-components"
import openMenu from "../assets/icons/open_menu_icon.svg"
import closeMenu from "../assets/icons/close_menu_icon.svg"
import { Link } from "gatsby"
import logo from "../assets/logos/fac_logo_black.svg"

const StickyMenuTriangle = styled.div.attrs({
  className: "fixed pointer",
})`
  top: calc((100vh - 5rem) * 0.5);
  height: 5rem;
  width: 5rem;
  z-index: 12;
  left: 0;

  background: ${({ active }) =>
    active
      ? `white url(${closeMenu}) no-repeat 8%`
      : `black url(${openMenu}) no-repeat 8%`};
  clip-path: polygon(100% 50%, 0 0, 0 100%);
`

const MenuContainer = styled.div.attrs({
  className: " bg-white flex",
})`
  position: fixed;
  max-width: 1440px;
  height: 100vh;
  width: ${props => (props.active ? "100vw" : "0")};
  transition: 0.5s;
  // transition-delay: 0.2s;
  top: 0;
  left: 0;
  z-index: 11;
`

const MenuSidebar = styled.div.attrs({
  className: "bg-yellow",
})`
  height: 100vh;
  width: ${props => (props.active ? "30vw" : "0")};
  transition: 0.5s;
  // transition-delay: 0.1s;
`
const MenuMain = styled.div.attrs({
  className: "pv6 mv5",
})`
  height: 100vh;
  width: ${props => (props.active ? "70vw" : "0")};
  transition: 0.5s;
  // transition-delay: 0.1s;
`

const MenuNumber = styled.div.attrs({})`
  padding-top: 3px;
  font-size: ${({ active }) => (active ? "16px" : "0px")};
  transition: 0.5s;
  // transition-delay: 0.1s;
`

const Logo = styled.img.attrs({
  className: "border-box pa5-ns",
})`
  width: ${({ active }) => (active ? "100%" : "0")};
  transition: 0.5s;
  // transition-delay: 0.1s;
`

const MenuImage = styled.div.attrs({
  className: "pl3 ttu",
})`
  font-size: ${({ active }) => (active ? "48px" : "0px")};
  transition: 0.5s;
  // transition-delay: 0.1s;

  -webkit-text-stroke: 1px black;
  color: white;

  &:hover {
    color: black;
  }
`

const MenuItemContainer = styled.div.attrs({
  className: "border-box pl5 pv3 flex justify-start items-top",
})`
  width: ${({ active }) => (active ? "100%" : "0")};
  transition: 0.3s;
  // transition-delay: 0.2s;
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

    return (
      <div className="dn db-ns">
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
        <StickyMenuTriangle active={menuActive} onClick={this.toggleMenu} />
      </div>
    )
  }
}

export default Menu
