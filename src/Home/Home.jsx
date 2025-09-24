import React from 'react'
import Hero from './Hero/Hero'
import Contact from '../Contact/Contact'
import AboutUs from '../About_Us/About_Us'
import TechCards from '../Tech_Stack/TechCard'
import Solution from "../Solutions/Solution"
import Testimonial from '../Common/Testimonial/Testimonial'
import Possibilities from './Possibilities/Possibilities'
import VoiceTech from './VoiceTech/VoiceTech'
import Workflow from './Workflow/Workflow'
import Partners from '../Common/Partners/Partners'
import Impact from './Impact/Impact'
import  { useRef } from "react";
import CaseStudy from './CaseStudy/CaseStudy'
import Industries from './Industries/Industries'
function Home() {
  const aboutRef = useRef(null);
  return (
    <div>
       <Hero scrollTarget={aboutRef} />
      <section ref={aboutRef}>
        <AboutUs />
      </section>
      <Impact/>
      <Possibilities/>
      <TechCards/>
      <Solution/>
      <VoiceTech/>
      <CaseStudy/>
      <Industries/>
      <Partners/>
      <Testimonial/>
      <Workflow/>
      <Contact/>
    </div>
  )
}

export default Home
