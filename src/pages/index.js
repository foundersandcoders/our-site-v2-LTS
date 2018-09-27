import React, { Component } from 'react'
import styled from 'styled-components'
import bez from '../assets/portraits/bez.png'
import Layout from '../components/layout'
import TestimonialCard from '../components/TestimonialCard'
import HeadingBody from '../components/headingWithBody'

const _Carousel = styled.section.attrs({
  className: 'flex relative items-center justify-around',
})`
  width: 300vw;
  transform: ${({ scrollY }) => `translateX(${-0.08 * scrollY}vw)`};
`

const _Container = styled.div.attrs({
  className: 'relative db w-100 flex',
})`
  height: 200vw;
`

const _StaffCard = () => (
  <TestimonialCard
    firstName="Besart"
    secondName="Hoxhaj"
    title="FAC cohort #2"
    img={bez}
    width="50vw"
    height="80vh"
    quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”"
  />
)

const _CarouselContainer = styled.div.attrs({
  className: 'sticky w-100 overflow-hidden top-0',
})`
  height: 100vh;
`

class IndexPage extends Component {
  state = {
    scrollY: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    var doc = document.documentElement
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    this.setState({
      scrollY: top,
    })
  }

  render() {
    return (
      <Layout>
        <main>
          <HeadingBody title="Overview">
            Founders and Coders CIC is a UK-based nonprofit that develops and
            runs tuition-free, peer-led training programmes in web development,
            guided by our core values of cooperation, inclusion and social
            impact.
          </HeadingBody>
          <_Container>
            <_CarouselContainer>
              <_Carousel scrollY={this.state.scrollY}>
                <_StaffCard />
                <_StaffCard />
                <_StaffCard />
                <_StaffCard />
              </_Carousel>
            </_CarouselContainer>
          </_Container>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
