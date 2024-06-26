import React from 'react';
import Aboutimg from "../assets/night.jpg";

import "./About.css";
import Footer from './Footer';
import AboutUs from './AboutUs';


const About = () => {
  return (
    <>
    <div className='about'>
      <img className="about-img"src={Aboutimg}/>

      <div className='about-text'>
        <h1>About</h1>
      </div>
    </div>
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default About;
