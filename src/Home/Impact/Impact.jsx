import React from 'react'
import './Impact.css'
import bg_element1 from "../../assets/3D_element1.png"

function Impact({ showImpact = false }) {
  return (
    <section className="impact-section">
      <h2 className="heading2" style={{marginBottom:"50px", paddingTop:"50px"}}>The Nixvix Impact</h2>
      <div className="impact-stats">
        <div className="stat">
          <h3>80+</h3>
          <p>AI Projects<br />Delivered</p>
        </div>
        <div className="stat">
          <h3>70+</h3>
          <p>Global Clients<br />Served</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Years Driving<br />AI Innovation</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Client<br />Satisfaction</p>
        </div>
      </div>
      <img src={bg_element1} alt="Impact Decoration" className="impact-image" />
      {!showImpact && <Vision_Mission />}
    </section>

  )
}


function Vision_Mission() {
  return (
    <div>
      <section className="mission-vision-section">
      <div className="mv-container">
        {/* Mission */}
        <div className="mv-box">
          <h2 className="mv-title">Our Mission</h2>
          <p className="mv-text">
            To redefine what's possible with AI by listening deeply, building fearlessly, and scaling responsibly making intelligence accessible, ethical, and impactful.
          </p>
        </div>

        {/* Vision */}
        <div className="mv-box">
          <h2 className="mv-title">Our Vision</h2>
          <p className="mv-text">
            To be the global catalyst for human-centered AI innovation shaping a smarter, more connected future, one algorithm at a time.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Impact

