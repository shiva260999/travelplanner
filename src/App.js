import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import SignUpform from "./components/SignUpform";

import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  return(
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/signup" element={<SignUpform/>}/>

        </Routes>

        <Navbar/>
    </div>
  )
}

export default App;
