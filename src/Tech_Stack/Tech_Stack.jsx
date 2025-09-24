import React from 'react'
import TechCards from './TechCard'
import techImg from "../assets/techImg.png"
import './Tech_Stack.css'
import Contact from '../Contact/Contact'
import Testimonial from '../Common/Testimonial/Testimonial'
import Expertise from './Expertise'
function Tech_Stack() {
  return (
    <div>
      <section
        className="main-container"
        style={{ backgroundImage: `url(${techImg})`  }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className='heading1'>
            Tech Stack
          </h1>
          <p className="services-subtitle">
            Engine Behind Our AI
           </p>
        </div>
      </section>
      <TechCards />
      <Expertise/>
      <Testimonial />
      <Contact />
    </div>
  )
}

export default Tech_Stack
