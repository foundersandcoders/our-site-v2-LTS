import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoBlack from "../assets/logos/fac_logo.svg"
import logoWhite from "../assets/logos/fac_logo_white.png"
import { breakpoint } from "../styles/utils"

const Container = styled.div`
  width: 20%;
`

const LogoStyled = styled.img.attrs({
  className: "db aspect-ratio mt6",
  src: logoBlack,
})`
  padding-bottom: 43.48%;
  height: 107px;
  ${breakpoint.m`
    height: 78px;
  `};
`

const HomeLogo = ({ className, color }) => (
  <Container className="aspect-ratio--object">
    <LogoStyled className={className} color={color} to="/" />
  </Container>
)

export default HomeLogo
