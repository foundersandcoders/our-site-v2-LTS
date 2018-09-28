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

export default StickyMenuTriangle
