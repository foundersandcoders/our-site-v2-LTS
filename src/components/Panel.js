import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import stripey_small from "../assets/ui/stripey_small.svg"
import double_line_yellow_horizontal from "../assets/icons/double_line_yellow_horizontal.svg"
import facebook_logo_white from "../assets/logos/facebook_logo_white.svg"
import github_logo_white from "../assets/logos/github_logo_white.svg"
import linkedin_logo_white from "../assets/logos/linkedin_logo_white.svg"
import twitter_logo_white from "../assets/logos/twitter_logo_white.svg"

import { OffsetUnderlineText } from "./Text"
import { mouseOnNext, mouseOff } from "./Cursor"
import InnerGridContainer from "./InnerGridContainer"

const _BigText = styled.h1.attrs({
  className: ({ colour = "black" }) => `headline fw5 w-70 ${colour}`,
})``

const _Footer = styled.div.attrs({
  className:
    "bg-black white font-5 fw3 flex flex-column items-center justify-center pb2",
})``

const _Icon = styled.img`
  height: 24px;
  width: 24px;
`

const Icon = ({ to, img }) => (
  <a href={to}>
    <_Icon src={img} />
  </a>
)
const DoubleLine = styled.img.attrs({ className: "center db mv3" })``

const Footer = () => (
  <_Footer className="bt bw1 b--gray">
    <DoubleLine src={double_line_yellow_horizontal} />
    <div className="center mb2">
      <a
        className="link underline white"
        href="mailto:hello@foundersandcoders.com"
      >
        hello@foundersandcoders.com
      </a>{" "}
      | Space4, 1st floor 149 Fonthill Road, Finsbury Park, London N43HF
    </div>
    <div className="flex w-20 justify-between mb7">
      <Icon to="/" img={github_logo_white} />
      <Icon to="/" img={facebook_logo_white} />
      <Icon to="/" img={twitter_logo_white} />
      <Icon to="/" img={linkedin_logo_white} />
    </div>
    <div className="font-6 w-100 ph2 fw3 flex justify-between">
      <div>© 2018 Founders and Coders. All rights reserved</div>
      <div>
        Made with lots of 💖 by{" "}
        <a className="link underline white">InFact Digital Co-op</a>
      </div>
    </div>
  </_Footer>
)
const Panel = styled.section.attrs({
  className: ({ justify = "between", cursor = "" }) =>
    `flex justify-${justify} ${cursor}`,
})`
  height: ${({ height }) => height};
  width: ${({ width = "inherit" }) => width};
`
const PanelTopBorder = styled.div.attrs({
  className: "h4 w-100",
})`
  background: url(${stripey_small}) repeat;
  clip-path: polygon(
    0 100%,
    0 45%,
    3% 70%,
    10% 0,
    17% 70%,
    24% 0,
    31% 70%,
    38% 0,
    45% 70%,
    52% 0,
    59% 70%,
    66% 0,
    73% 70%,
    80% 0,
    87% 70%,
    94% 0,
    100% 70%,
    100% 100%
  );
  background-attachment: fixed;
`
const NextPanel = ({ component, to, children, topBorder }) => (
  <div>
    {topBorder && <PanelTopBorder />}
    <div
      className="bg-black"
      onMouseEnter={() => mouseOnNext(component)}
      onMouseLeave={() => mouseOff(component)}
    >
      <Link
        className="bg-black flex items-center justify-center pv5 pointer link min-828"
        to={to}
      >
        <InnerGridContainer>
          <Panel justify="start" className="center">
            <div className="w-25">
              <OffsetUnderlineText
                className="ml7"
                underlineColour="blue"
                colour="white"
                underlineWidth="4px"
                fontSize="font-5"
                fontWeight="fw3"
                title="Next"
              >
                Next
              </OffsetUnderlineText>
            </div>
            <_BigText colour="white">{children}</_BigText>
          </Panel>
        </InnerGridContainer>
      </Link>
      <Footer />
    </div>
  </div>
)

const ExtendedPanel = styled.section.attrs({
  className: ({ className }) => `${className} bg-light-gray`,
})`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    box-shadow: 9999px 0 0 var(--light-gray);
  }
`

export { Panel, NextPanel, ExtendedPanel }
