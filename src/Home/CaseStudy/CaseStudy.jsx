import React from 'react'
import './CaseStudy.css'
import CaseStudy1 from '../../assets/CaseStudy1.png'
import CaseStudy2 from '../../assets/CaseStudy2.png'
import CaseStudy3 from '../../assets/CaseStudy3.png'

function CaseStudy() {
  return (
    <div>
      <h3 className='subtitle'>Portfolio</h3>
        <h2 className='heading2'>Case Studies</h2>
      <div className="case-studies">

  <div className="case-card">
    <img src={CaseStudy1} alt="Drone" className="case-img" />
    <div className="case-tags">
      <span>SportsTech</span>
      <span>Computer Vision</span>
      <span>Deep Learning</span>
    </div>
    <h3 className="case-title">Drofree – Monitor <br/> Soccer Through Drone</h3>
    <p className="case-desc">
      Outcome: Reduced manual annotation time by 90% and provided clubs with accurate player heatmaps.
    </p>
  </div>

  <div className="case-card">
    <img src={CaseStudy2} alt="Swimmer" className="case-img" />
    <div className="case-tags">
      <span>HealthTech</span>
      <span>Video Intelligence</span>
      <span>Real-Time AI</span>
    </div>
    <h3 className="case-title">Swimmer Stroke & Lap<br/> Analytics</h3>
    <p className="case-desc">
      Outcome: Enabled real-time stroke and lap detection with over 94% accuracy, improving coaching efficiency.
    </p>
  </div>

  <div className="case-card">
    <img src={CaseStudy3} alt="Retail Shelf" className="case-img" />
    <div className="case-tags">
      <span>Retail AI</span>
      <span>Object Detection</span>
      <span>Edge Vision</span>
    </div>
    <h3 className="case-title">Smart Shelf Detection <br/>for Retail Stores</h3>
    <p className="case-desc">
      Outcome: Increased shelf availability visibility by 80%, reducing restock delays.
    </p>
  </div>
</div>

    </div>
  )
}

export default CaseStudy
