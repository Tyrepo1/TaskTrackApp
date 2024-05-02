import React from 'react'
import Footer from '../../../components/Footer'
import TopNav from '../../../components/TopNav'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import SuccessStories from '../components/SuccessStories'

function Home() {

  return (

    <div>
      <TopNav/>
      <Hero />
      <SuccessStories/>
      <HowItWorks />
      <br></br>
      <br></br>

      <Footer />
    </div>
  )
}

export default Home