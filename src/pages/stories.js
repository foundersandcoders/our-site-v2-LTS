import React, { Component } from "react"

import Layout from "../components/Layout"
import { DOWN_CURSOR } from "../constants"
import DoubleLine from "../components/DoubleLine"

import HeadingWithBody from "../components/HeadingWithBody"
import { Cursor } from "../components/Cursor"
import { BigUnderline } from "../components/Text"
import { NextPanel, Panel } from "../components/Panel"

class StoriesPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="green" />
        <main>
          <Panel justify="end" className="mt7 mb6">
            <div className="w-75">
              <BigUnderline>Stories by and about us</BigUnderline>
            </div>
          </Panel>
          <HeadingWithBody title="Overview">
            Curious to learn more about us? Here you’ll find stories by and
            about our diverse community of founders and coders making a social
            impact with technology all over the world.
          </HeadingWithBody>
          <DoubleLine colour="red" />
          <HeadingWithBody title="Stories by us" />
          <NextPanel component={this} to="/" topBorder>
            Back to homepage
          </NextPanel>
        </main>
      </Layout>
    )
  }
}
export default StoriesPage
