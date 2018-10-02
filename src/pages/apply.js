import React, { Component } from "react"

import Layout from "../components/layout"
import { Panel, NextPanel } from "../components/Panel"
import Table from "../components/Table"
import Cursor from "../components/Cursor"
import HeadingWithBody from "../components/headingWithBody"
import { BigUnderline } from "../components/underlineText"
import { BlueLine } from "../components/DoubleLine"

class ApplyPage extends Component {
  state = {
    next: false,
  }

  handleMouseNextElement = () => {
    this.setState({
      next: !this.state.next,
    })
  }

  render() {
    const { next } = this.state
    return (
      <Layout>
        <Cursor next={next} colour="green" />
        <main>
          <Panel justify="end" className="mt7 mb6">
            <div className="w-75">
              <BigUnderline>Apply to our course</BigUnderline>
            </div>
          </Panel>
          <HeadingWithBody title="Overview">
            Our programme is designed for people who are serious about a career
            in web development, are comfortable with uncertainty, can take
            initiative, and believe strongly in the value of community and
            helping others.
          </HeadingWithBody>
          <BlueLine />
          <HeadingWithBody title="What you need to know">
            <Table />
          </HeadingWithBody>
        </main>
      </Layout>
    )
  }
}

export default ApplyPage
