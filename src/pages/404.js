import React from "react"
import Layout from "../components/Layout"
import InnerGridContainer from "../components/InnerGridContainer"
import { PageHeadingPanel } from "../components/Panel"
import HeadingWithBody from "../components/HeadingWithBody"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <InnerGridContainer>
      <PageHeadingPanel title="Not found" textSize="XL" />
        <HeadingWithBody>
          Oops, we&#39;re sorry. This page doesn&#39;t exist! 
        </HeadingWithBody>
    </InnerGridContainer>
  </Layout>
)

export default NotFoundPage
