import React from 'react'
import Contact from './Contact'
import contactImg from '../assets/contactImg.png'

function ContactUs() {
  return (
    <div>
      <section className="main-container"   style={{ backgroundImage: `url(${contactImg})` }}>
      <div className="overlay">
      <Contact alt={true}/>
      </div>
      </section>
    </div>
  )
}

export default ContactUs
