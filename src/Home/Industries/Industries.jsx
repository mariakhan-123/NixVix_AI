import React from 'react'
import './Industries.css'
import HealthCareImg from "../../assets/Industry(HealthCare).png"

function Industries() {
  return (
    <div>
      <div className="industries-section">
  <h4 className="subtitle">Industries</h4>
  <h2 className="heading2" style={{ lineHeight: "95px", fontSize:"50px" }}>Where Our Solutions Make An Impact</h2>

  <div className="industry-card">
    <button className="nav-btn left">←</button>
    <div className="industry-image">
      <img src={HealthCareImg} alt="Healthcare" />
      <div className="industry-info">
        <h3>Healthcare</h3>
        <p>
          Automated Echocardiograms De-Identification and Interpretation for
          Clinical Purposes
        </p>
        <span className="industry-meta">PhysioW – A Physiotherapist Assistant</span>
      </div>
    </div>
    <button className="nav-btn right">→</button>
  </div>
</div>

    </div>
  )
}

export default Industries
