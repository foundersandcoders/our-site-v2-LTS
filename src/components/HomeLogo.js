import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoPNG from "../assets/logos/fac_logo.png"
import { breakpoint } from "../styles/utils"

const LogoStyled = styled(Link).attrs({
  className: "db ml7-m",
})`
  background: url(${logoPNG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 245px;
  height: 107px;
  ${breakpoint.m`
    width: 220px;
    height: 96px;
  `};
`

const HomeLogo = ({ className }) => <LogoStyled className={className} to="/" />

export default HomeLogo
