import React from 'react'
import servicesImg from '../assets/servicesImg.png'
import Contact from '../Contact/Contact'
import Button from '../ReusableComponents/ReusableButton'
import './Services.css'
import Testimonial from '../Common/Testimonial/Testimonial'
import ServicesCard from './ServicesCard/ServicesCard'
import Partners from '../Common/Partners/Partners'
import ServicesDetails from './ServicesDetails/ServicesDetails'
function Services() {
  return (
    <div>
       <section className="main-container"   style={{ backgroundImage: `url(${servicesImg})` }}>
      <div className="overlay">
        <h2 className="heading1" style={{marginTop:"100px"}}>Services</h2>
        <p className="services-subtitle">
          Redefine what's possible with AI
        </p>
        <div className="services-buttons">
           <Button label="Generative AI" shadow ={true}/>
           <Button label="LLM & Agentic AI" shadow ={true}/>
           <Button label="Computer Vision" shadow ={true}/>
           <Button label="Machine Learning & Predictive Analytics" shadow ={true}/>
            <Button label=" MLOps, Serverless & Scalable" shadow ={true}/>
        </div>
      </div>
    </section>
    <ServicesDetails/>
    <ServicesCard/>
     <Partners/>
    <Testimonial/>
     <Contact/>

    </div>
  )
}

export default Services
