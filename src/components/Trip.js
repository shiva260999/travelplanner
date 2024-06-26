import React from 'react'
import TripData from './TripData'
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"

import Trip3 from "../assets/6.jpg"


import "./Trip.css"

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover ne
            w destinations using 
            google Maps</p>
            <div className='tripcard'>
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence, the correct method of updating the value of a state will be similar to the code below. 
                State updates should be independent. The state object of"/>
                 <TripData
                image={Trip2}
                heading="Trip in Indonesia"
                text="React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence, the correct method of updating the value of a state will be similar to the code below. 
                State updates should be independent. The state object of"/>
                 <TripData
                image={Trip3}
                heading="Trip in Indonesia"
                text="React provides its own method setState(). setState() method takes a single parameter and expects an object which should contain the set of values to be updated. Once the update is done the method implicitly calls the render() method to repaint the page. Hence, the correct method of updating the value of a state will be similar to the code below. 
                State updates should be independent. The state object of"/>
            </div>
    </div>
  )
}

export default Trip
