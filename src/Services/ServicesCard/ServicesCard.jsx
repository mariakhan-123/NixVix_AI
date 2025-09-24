import React from 'react'
import "./ServicesCard.css"

function ServicesCard() {
  return (
    <div style={{textAlign:"center"}}>
      <h2 className='heading2'>Services Include</h2>
      <div className='cards-container'>
      <div className="card">Text-to-Image (Stable Diffusion, DALLE, DreamBooth)</div>
      <div className="card">Text-to-Speech (TTS) & Speech-to-Text (STT)</div>
      <div className="card">Image & Video Enhancement</div>
      <div className="card">Voice Conversion & Cloning</div>
      <div className="card">Talking Avatars, Lip Sync, DeepFakes</div>
      <div className="card">Super-resolution, Face Editing, Background Removal</div>
    </div>
    </div>
  )
}

export default ServicesCard
