import React from 'react'
import './SolutionCard.css'
import computerVision from "../../assets/computerVision.png"

function SolutionCard() {
  return (
   <div className="solution-card">

  <div className="solution-image">
    <img src= {computerVision} alt="Computer Vision" />
  </div>

  <h3 className="solution-title">Computer Vision</h3>

  <div className="solution-tags">
    <span className="tag">Detection</span>
    <span className="tag">Segmentation</span>
    <span className="tag">Tracking</span>
  </div>

  {/* Description */}
  <div className="solution-description">
    <strong>Solution Description</strong>
    <p>
      We can examine and interpret your visual content (social media images,
      headshots & CCTV streams etc.) through intelligent machines powered by
      cutting-edge deep learning architectures. We can assist you in the
      domains like:
    </p>
  </div>
</div>

  )
}

export default SolutionCard
