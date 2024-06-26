import React from 'react'
import Serviceimg from "../assets/night.jpg"

import "./About.css"
import Footer from './Footer'
import Destination from './Destination'

const Service = () => {
  return (
    <>
    <div className='service'>
    <img className="service-img"src={Serviceimg}/>

    <div className='service-text'>
      <h1>Service</h1>
    </div>
    <Destination/>
  </div>
  <Footer/>
  </>
  )
}

export default Service
