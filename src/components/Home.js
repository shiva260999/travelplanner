import React from 'react';
import "./Home.css";
import Destination from './Destination';
import Trip from './Trip';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className='home'>
      <img alt="homeimg" src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1631&auto=
      format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <div className='home-text'>
        <h1>Your Journey Your Story</h1>
        <p>Chose Your Favorite Destination</p>
        <a href='/'>
          Run Away
        </a>
        
      </div>
    </div>

    <Destination/>
    <Trip/>
    <Footer/>
    </>
    
  )
}

export default Home;
