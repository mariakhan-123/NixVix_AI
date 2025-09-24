import React from 'react'
import './Possibilities.css'
import Button from '../../ReusableComponents/ReusableButton'
function Possibilities() {
  return (
    <div className='possibilities'>
      <h3 className="subtitle">Services</h3>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <h2 className="heading2">Redefine what's possible with AI</h2>
      <Button label="Start a Project →"/>
      </div>
      <div className="grid-container">
        <div className="item1">
          <div className="icon-circle"></div>
          <div className="content">
            <h3>Generative AI</h3>
            <p>Generative AI creates new content from data.</p>
          </div>
        </div>
        <div className="item2">
          <div className="icon-circle"></div>
          <div className="content">
            <h3>Computer Vision</h3>
            <p>Computer Vision enables machines to understand and interpret visual data.</p>
          </div>
        </div>
        <div className="item3">
          <div className="icon-circle"></div>
          <div className="content">
            <h3>LLMs & Agentic AI</h3>
            <p>LLMs & Agentic AI power intelligent reasoning and autonomous decision-making.</p>
          </div>
        </div>
        <div className="item4">
          <div className="icon-circle"></div>
          <div className="content">
            <h3>Machine Learning & Predictive Analytics</h3>
            <p>Machine Learning & Predictive Analytics predict future trends.</p>
          </div>
        </div>
        <div className="item5">
          <div className="icon-circle"></div>
          <div className="content">
            <h3>MLOps, Serverless & Scalable</h3>
            <p>MLOps, Serverless & Scalable ensure efficient, flexible AI deployment.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Possibilities
