import React from 'react'
import './Hero.css'
import hero_img from '../../assets/hero_img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Button from '../../ReusableComponents/ReusableButton'
import { Link } from "react-router-dom";


function Hero({ scrollTarget }) {
  const scrollToAbout = () => {
    scrollTarget.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero_img})` }}
      >

        <div className="overlay"></div>

        <div className="hero-content">
          <div className="badge">
            <span style={{ fontStyle: "normal" }}>★</span>  Enterprise-Grade AI THAT <em>Thinks, Sees, Hears, Speaks & Adapts</em>
          </div>

          <h1 className='heading1'>
            Turning Complexity Into <br /> Clarity Through AI
          </h1>

          <p>
            Nixense Vixion delivers Intelligent, Scalable AI Solutions – from Generative  AI to Computer Vision — engineered for speed, adaptability, and  measurable business value.
          </p>

          <div className="buttons">

            <Link to="/case-studies">
              <Button label="Explore Our Work →" />
            </Link>

            <Link to="/contact-us">
              <button className="btn btn-filled">Let's Talk AI</button>
            </Link>
          </div>
        </div>


      </section>
      {/* Scroll Down Icon */}
      <div className="scroll-down" onClick={scrollToAbout}>
        <FontAwesomeIcon icon={faArrowDown} size="lg" />
      </div>
    </div>
  )
}

export default Hero
