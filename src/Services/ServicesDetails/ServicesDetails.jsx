import React from 'react'
import './ServicesDetails.css'
import item1 from '../../assets/item1.png'
function ServicesDetails() {
  return (
   
      <div className="feature-card"style={{border:"1px solid #348E77"}}>
  <h2 className="feature-title">Generative AI</h2>
  <p className="feature-subtitle">
    Innovate with intelligence that creates.
  </p>

  <div className="feature-image">
    <img src={item1} alt="Generative AI" />
  </div>

  <div className="feature-info">
    <strong>Best For:</strong> MediaTech, eLearning, Avatars, AI Art
    <p>
      Our Generative AI solutions help you create smarter, faster, and more
      creative digital experiences. From turning text into stunning images and
      lifelike voices to enhancing photos, videos, and even creating talking
      avatars, we make advanced AI simple and impactful. Whether it’s voice
      cloning, background removal, or super-resolution editing, we deliver
      tools that bring your ideas to life with intelligence that truly creates.
    </p>
  </div>
</div>
  )
}

export default ServicesDetails
