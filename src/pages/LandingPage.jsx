import React from 'react'
import Categories from './Categories'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const LandingPage = () => {
  return (
    <div>
       {/* <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <Hero />
        </main>
      </div> */}
      <Categories/>
      <Footer/>
    </div>
  )
}

export default LandingPage