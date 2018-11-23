import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "../styles/index.css"

import Header from "./Header"
import Menu from "./Menu"
import favicon from "../assets/icons/favicon.ico"

const AppWrapper = styled.div.attrs({
  className: "center",
})`
  max-width: 1440px;
`

const HideMenu = styled.div`
  position: fixed;
  height: 100vh;
  width: calc((100vw - 1440px) * 0.5);
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: var(--white);
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        >
          <html lang="en" />
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>
        <AppWrapper>
          <HideMenu />
          <div className="relative">
            <Menu location={location} />
          </div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>{children}</div>
        </AppWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
