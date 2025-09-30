import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clientImg from "../../assets/clientImg.jpg";
import clientImg2 from "../../assets/clientImg2.jpg";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    text: "Ahmer and the Team NixensEV exceeded all expectations, completing this project. The team is extremely knowledgeable about Machine Learning, Servers, Google Cloud, Python, and went above and beyond to make this project successful. They helped set up the required environment and implemented a solution that is easy to understand and very flexible. Throughout the project, the communication was excellent; whenever needed, Ahmer would offer a meeting to explain things in more detail.",
    name: "DENNIS WANGERIN",
    image: clientImg,
  },
  {
    id: 2,
    text:  "Nixense Vision was incredible to work with. They were our go-to team for  everything AI and Machine Learning. From bespoke solutions to production-ready  systems, their work was consistently top-notch. Truly an A+ partner.",
    name: "JUSTIN MCAULEY",
    image: clientImg2,
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { text, name, image } = testimonials[current];

  return (
    <div>
      <section className="testimonial-section">
        <h3 className="subtitle">Clients</h3>
        <h2 className="heading2" style={{ marginBottom: "30px" }}>
          Testimonials
        </h2>

        <div className="testimonial-card">
          <div className="testimonial-content">
           <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" /> 
            <p className="testimonial-text">“{text}”</p>
          </div>

          <div className="client-info">
            <img src={image} alt={name} className="client-img" />
            <p className="client-name">— {name}</p>
          </div>

          <div className="testimonial-arrows">
  <button className="arrow arrow-left" onClick={handlePrev}>
    <FontAwesomeIcon icon={faArrowLeft} size={24}/>
  </button>
  <button className="arrow arrow-right" onClick={handleNext}>
    <FontAwesomeIcon icon={faArrowRight} size={24}/>
  </button>
</div>

        </div>
      </section>
    </div>
  );
}

export default Testimonial;
