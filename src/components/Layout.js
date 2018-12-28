import React, { Component } from "react"
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
  z-index: 3000004;
  background-color: var(--white);
`

class LayoutWithState extends Component {
  state = {
    menuActive: false,
    color: "yellow",
    colorIndex: 0,
  }

  toggleMenu = () => {
    if (!this.state.menuActive) {
      this.setNewMenuColor()
    }
    this.setState(prevProps => ({
      menuActive: !prevProps.menuActive,
    }))
  }

  setNewMenuColor() {
    const colors = ["yellow", "blue", "green", "red"]
    this.setState(prevState => ({
      color: colors[prevState.colorIndex % 4],
      colorIndex: prevState.colorIndex + 1,
    }))
  }

  render() {
    const { data, children, location } = this.props

    const childrenWithProps = React.Children.map(children, child =>
      child.type.displayName === "Cursor"
        ? React.cloneElement(child, { menuActive: this.state.menuActive })
        : child
    )

    return (
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-35597887-2"
          />
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-35597887-2');
            `}</script>
        </Helmet>
        <AppWrapper>
          <HideMenu />
          <div className="relative">
            <Menu
              location={location}
              menuActive={this.state.menuActive}
              toggleMenu={this.toggleMenu}
              color={this.state.color}
            />
          </div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>{childrenWithProps}</div>
        </AppWrapper>
      </>
    )
  }
}

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
      <LayoutWithState children={children} location={location} data={data} /> // eslint-disable-line
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
