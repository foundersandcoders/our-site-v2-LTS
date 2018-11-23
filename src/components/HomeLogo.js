import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoPNG from "../assets/logos/fac_logo.png"
import { breakpoint } from "../styles/utils"

const LogoStyled = styled(Link).attrs({
  className: "db",
})`
  background: url(${logoPNG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 245px;
  height: 107px;
  ${breakpoint.m`
    width: 180px;
    height: 78px;
  `};
  @media screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 217px;
    height: 94.5px;
  }
`

const HomeLogo = ({ className }) => <LogoStyled className={className} to="/" />

export default HomeLogo
