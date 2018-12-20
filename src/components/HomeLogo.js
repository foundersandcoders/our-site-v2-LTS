import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoBlack from "../assets/logos/fac_logo.png"
import logoWhite from "../assets/logos/fac_logo_white.png"
import { breakpoint } from "../styles/utils"

const LogoStyled = styled(Link).attrs({
  className: "db",
})`
  background: ${({ color }) =>
    color && color !== "yellow" ? `url(${logoWhite})` : `url(${logoBlack})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 245px;
  height: 107px;

  ${breakpoint.m`
    width: 180px;
    height: 78px;
  `};

  ${breakpoint.ql`
    width: 217px;
    height: 94.5px;
  `};
`

const HomeLogo = ({ className, color }) => (
  <LogoStyled className={className} color={color} to="/" />
)

export default HomeLogo
