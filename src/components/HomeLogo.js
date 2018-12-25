import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import logoBlack from "../assets/logos/fac_logo.svg"
import logoWhite from "../assets/logos/fac_logo_white.png"
import { breakpoint } from "../styles/utils"

const Container = styled.div`
  width: ${({ styled: { menu } }) => (menu ? "30vw" : "20%")};
  max-width: 432px;
  min-width: 180px;
`

const LogoStyled = styled.img.attrs({
  className: "db aspect-ratio mt6",
  src: ({ color }) => (color && color !== "yellow" ? logoWhite : logoBlack),
})`
  padding-bottom: 43.684210526%;

  ${breakpoint.ns`
    height: calc(100vw * 0.079);
  `};

  ${breakpoint.m`
    height: 78px;
  `};

  height: 107px;
  max-height: 107px;
`

const Link = styled.div.attrs({
  className: "mt6 pointer",
})`
  position: absolute;
  width: 100%;
  background-color: transparent;
  top: 0;

  ${breakpoint.ns`
    height: calc(100vw * 0.079);
  `};

  ${breakpoint.m`
    height: 78px;
  `};

  height: 107px;
  max-height: 107px;
`

const HomeLogo = ({ className, color, menu }) => (
  <Container className="aspect-ratio--object" styled={{ menu: menu }}>
    <LogoStyled className={className} color={color} />
    <Link onClick={() => navigate("/")} />
  </Container>
)

export default HomeLogo
