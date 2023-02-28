import React from 'react'
import Contact from '../parts/contact/contact'
import Footer from '../parts/footer/Footer'
import Gallery from '../parts/gallery/Gallery'
import KeyFeatures from '../parts/keyFeatures/KeyFeatures'
import Navbar from '../parts/navbar/Navbar'
import NetworkUseCases from '../parts/networkUseCases/NetworkUseCases'
import PlumlaNGN from '../parts/plumlaNGN/PlumlaNGN'

import './app.sass'

export default function App() {
  return (
    <div id="main-page">
      <Navbar />
      <div id="main-content">
        <div className="background-images main-part" data-image-id={1}></div>
        {/* <img src="image1.jpg" alt="" /> */}
        <PlumlaNGN />
        <KeyFeatures />
        <div className="background-images main-part" data-image-id={2}></div>
        <NetworkUseCases />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
