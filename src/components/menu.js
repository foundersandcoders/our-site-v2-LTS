import React, { Component } from "react"
import styled from "styled-components"
import openMenu from "../assets/icons/open-menu-icon.svg"
import closeMenu from "../assets/icons/close-menu-icon.svg"

const StickyMenuTriangle = styled.div.attrs({
  className: "fixed",
})`
  top: calc((100vh - 5rem) * 0.5);
  height: 5rem;
  width: 5rem;
  background: ${({ active }) =>
    active
      ? `white url(${closeMenu}) no-repeat 8%`
      : `black url(${openMenu}) no-repeat 8%`};
  clip-path: polygon(100% 50%, 0 0, 0 100%);
`

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

    return <StickyMenuTriangle active={menuActive} onClick={this.toggleMenu} />
  }
}

export default Menu
