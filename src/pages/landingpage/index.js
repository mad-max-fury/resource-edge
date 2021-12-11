import React from 'react'
import Hero from '../../components/hero'
import AdminLogisticContainer from '../../containers/adminLogisticsSection'
import HumanRS from '../../containers/HumanResourcesSection'
import Footer from '../../containers/landingpagefooter'
import Navbar from '../../containers/navbarlandingpage'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HumanRS />
      <AdminLogisticContainer />
      <Footer />
    </div>
  )
}

export default Landing
