import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import clientImg from '../../assets/clientImg.jpg'
import "./Testimonial.css";

function Testimonial() {
  return (
    <div>
      <section className="testimonial-section">
        <h3 className="subtitle">Clients</h3>
        <h2 className="heading2" style={{marginBottom:"30px"}}>Testimonials</h2>

        <div className="testimonial-card">
          {/* content wrapper for icon + text */}
          <div className="testimonial-content">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">
              “Ahmer and the Team NixensEV exceeded all expectations, completing
              this project. The team is extremely knowledgeable about Machine
              Learning, Servers, Google Cloud, Python, and went above and beyond to
              make this project successful. They helped set up the required
              environment and implemented a solution that is easy to understand and
              very flexible. Throughout the project, the communication was
              excellent; whenever needed, Ahmer would offer a meeting to explain
              things in more detail.”
            </p>
          </div>

          <div className="client-info">
            <img
              src={clientImg}
              alt="client"
              className="client-img"
            />
            <p className="client-name">— DENNIS WANGERIN</p>
          </div>

          <button className="arrow arrow-left">
            <FiArrowLeft size={24} />
          </button>
          <button className="arrow arrow-right">
            <FiArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Testimonial
