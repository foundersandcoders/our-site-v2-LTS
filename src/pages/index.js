import React from 'react'
import Layout from '../components/layout'
import HeadingBody from '../components/headingWithBody'
import StaffCard from '../components/staffCard'

import profile from '../assets/photos/profile-placeholder.png'

const IndexPage = () => (
  <Layout>
    <main>
      <HeadingBody title="Overview">
        Founders and Coders is not your ordinary coding bootcamp. We’re on a
        mission to prove that for many people peer-led learning is the most
        effective and least expensive route into the tech industry. Curious to
        learn more about our cooperative learning community? Read on for all
        your questions answered.
      </HeadingBody>

      <div className="flex justify-center">
        <StaffCard
          firstName="Besart"
          secondName="Hoxhaj"
          title="FAC cohort #2"
          img={profile}
          width="33%"
          height="100%"
          quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”
          "
        />
      </div>
    </main>
  </Layout>
)

export default IndexPage
