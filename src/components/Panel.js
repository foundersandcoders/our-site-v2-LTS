import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import stripey_small from "../assets/ui/stripey_small.svg"
import double_line_yellow_horizontal from "../assets/icons/double_line_yellow_horizontal.svg"
import facebook_logo_white from "../assets/logos/facebook_logo_white.svg"
import github_logo_white from "../assets/logos/github_logo_white.svg"
import linkedin_logo_white from "../assets/logos/linkedin_logo_white.svg"
import twitter_logo_white from "../assets/logos/twitter_logo_white.svg"
import heart from "../assets/icons/heart.svg"

import { OffsetUnderlineText, _BigText, BigUnderline } from "./Text"
import { mouseOnNext, mouseOff } from "./Cursor"
import InnerGridContainer from "./InnerGridContainer"
import { breakpoint } from "../styles/utils"

const _heart = styled.img.attrs({
  className: "di",
})``

const _Footer = styled.div.attrs({
  className:
    "bg-black white-80 font-5 fw3 flex flex-column items-center-ns justify-center-ns pb2 mh2 ph0-ns",
})``

const StyledLink = styled(Link)`
  ${breakpoint.m`
    padding-top: 120px;
  `};
  ${breakpoint.l`
    padding-top: 260px;
  `};
`

const _Icon = styled.img`
  height: 24px;
  width: 24px;
`

const Icon = ({ to, img }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    <_Icon src={img} />
  </a>
)
const DoubleLine = styled.img.attrs({
  className: "center-ns db mt3 mb2 mb3-ns",
})`
  height: 12px;
  width: 168px;
`

const Footer = () => (
  <_Footer id="footer" className="bt bw1 b--gray">
    <DoubleLine src={double_line_yellow_horizontal} />
    <div className="center mb2">
      <span className="underline white">hello@foundersandcoders.com</span>
      <span className="dn di-ns"> | </span>
      <span className="fw3 db di-ns">
        Space4, 1st floor 149 Fonthill Road, Finsbury Park, London N4 3HF
      </span>
    </div>
    <div className="flex w-20-ns w-50 justify-between mb7-ns mb6">
      <Icon
        to="https://github.com/foundersandcoders/"
        img={github_logo_white}
      />
      <Icon
        to="https://www.facebook.com/founderscoders/"
        img={facebook_logo_white}
      />
      <Icon to="https://twitter.com/founderscoders" img={twitter_logo_white} />
      <Icon
        to="https://www.linkedin.com/school/founders-and-coders/"
        img={linkedin_logo_white}
      />
    </div>
    <div className="font-6 w-100 ph2-ns pb1 ph0 fw3 flex justify-between flex-row-ns flex-column">
      <div>
        <span className="db di-ns">© 2018 Founders and Coders.</span>
        <span className="db di-ns"> All rights reserved.</span>
      </div>
      <div className="db ma0-ns mt2">
        Made with lots of <_heart src={heart} /> by{" "}
        <a className="link underline white" href="https://www.infactcoop.com/">
          InFact Digital Co-op
        </a>
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
  ${({ nextpanel }) => (nextpanel ? "" : "margin-top: 100px")};
  ${breakpoint.ns`
    ${({ nextpanel }) => (nextpanel ? "" : "margin-top: 192px")};
  `};
`

const PageHeadingPanel = ({ textSize, title }) => {
  return (
    <Panel
      justify="center justify-end-ns"
      className={
        textSize === "XL"
          ? "mh7-m mh0-l mh2"
          : "mt7 mb6-ns mb5 pt0-ns pt3 mh2 mh0-ns"
      }
    >
      <div className={textSize == "XL" ? "w-100 w-75-l" : "mh7-m w-100 w-75-l"}>
        {textSize == "XL" ? (
          <_BigText>{title}</_BigText>
        ) : (
          <BigUnderline>{title}</BigUnderline>
        )}
      </div>
    </Panel>
  )
}

const PanelTopBorder = styled.div.attrs({
  className: "h4 w-100",
})`
  background: url(${stripey_small}) repeat;

  clip-path: polygon(0 100%, 0 75%, 25% 0, 50% 75%, 75% 0, 100% 75%, 100% 100%);
  ${breakpoint.ns`
    clip-path: polygon(0 100%, 0 3.25rem, 3% 6.5rem, 10% 0, 17% 6.5rem, 24% 0, 31% 6.5rem, 38% 0, 45% 6.5rem, 52% 0, 59% 6.5rem, 66% 0, 73% 6.5rem, 80% 0, 87% 6.5rem, 94% 0, 100% 6.5rem, 100% 100%);
  `} background-attachment: fixed;
`

const NextPanel = ({ component, to, children, topBorder }) => (
  <div className="panel-container">
    {topBorder && <PanelTopBorder />}
    <div
      className="bg-black"
      onMouseEnter={() => mouseOnNext(component)}
      onMouseLeave={() => mouseOff(component)}
    >
      <StyledLink
        className="bg-black flex items-start justify-center pointer link min-828-l pv5 pv0-ns"
        to={to}
      >
        <InnerGridContainer className="w-100">
          <Panel
            justify="start"
            width="92%"
            className="flex-column flex-row-l center mh2 mh0-l pb6-m pb0-l"
            nextpanel
          >
            <div className="w-25 mb5 mb0-ns">
              <OffsetUnderlineText
                className="ml7-l ml5-m"
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
            <_BigText colour="white" className="ml5-m mv3-m">
              {children}
            </_BigText>
          </Panel>
        </InnerGridContainer>
      </StyledLink>
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

  @media screen and (max-height: 699px), screen and (max-width: 1039px) {
    display: none;
  }

  @media screen and (min-height: 700px) and (min-width: 1040px) {
    display: block;
  }
`

export { PageHeadingPanel, Panel, NextPanel, ExtendedPanel }
