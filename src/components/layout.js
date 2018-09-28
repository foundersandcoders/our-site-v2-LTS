import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "../styles/index.css"

import Header from "./header"
import StickyMenuTriangle from "./menu"

const AppWrapper = styled.div.attrs({
  className: "center",
})`
  max-width: 1280px;
`

const Layout = ({ children }) => (
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
        </Helmet>
        <AppWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <StickyMenuTriangle active={true} />
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
