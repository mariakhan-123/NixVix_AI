import React from 'react'
import './SolutionCard.css'

function SolutionCard() {
  return (
   <div className="solution-card">
  {/* Top Image */}
  <div className="solution-image">
    <img src="computer-vision.jpg" alt="Computer Vision" />
  </div>

  {/* Title */}
  <h3 className="solution-title">Computer Vision</h3>

  {/* Tags */}
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
