import React from 'react'
import Contactimg from "../assets/2.jpg";

import "./About.css";
import Footer from './Footer';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
    <div className='contact'>
    <img className="contact-img"src={Contactimg}/>

    <div className='contact-text'>
      <h1>Contact</h1>
    </div>
  </div>
  <ContactForm/>
  <Footer/>
  </>
  )
}

export default Contact
