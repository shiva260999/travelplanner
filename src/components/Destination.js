import React from 'react'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"

import "./Destination.css"
import DestionationData from './DestionationData'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Applications are on the way, Good luck!</p>

     <DestionationData
     heading="Mount Everest Manaali"
     className="first-des"
     text="The state should never be updated explicitly.
      React uses an observable object 
      as the state that observes what
       changes are made to the state a
       nd helps the component behave a
       ccordingly.
     React provides its own method se
     tState().
      setState() method takes a single
       parameter and expects an objec
       t which should contain the set o
       f values to be updated. Once th
       e update is done the method impl
       icitly calls the render() metho
       d to repaint the page. Hence, th
       e correct method of updating th
       e value of a state will be simil
       ar to the code below."
       
       img1={Mountain1}
       img2={Mountain2}/>

       <DestionationData
       heading="Mount Everest Manaali"
       className="first-des-reverse"
       text="The state should never be updated explicitly.
        React uses an observable object 
        as the state that observes what
         changes are made to the state a
         nd helps the component behave a
         ccordingly.
       React provides its own method se
       tState().
        setState() method takes a single
         parameter and expects an objec
         t which should contain the set o
         f values to be updated. Once th
         e update is done the method impl
         icitly calls the render() metho
         d to repaint the page. Hence, th
         e correct method of updating th
         e value of a state will be simil
         ar to the code below."
         
         img1={Mountain3}
         img2={Mountain4}/>
    </div>
  )
}

export default Destination;
