import React from 'react'
import './TechCard.css'
import python_icon from '../assets/python.png'
import tensorRT from '../assets/tensorRT.png'
import detectron from '../assets/detectron.png'
import TTS from "../assets/TTS.png"
import LLM from "../assets/LLM_tools.png"
import data_labelling from "../assets/data_labeling.png"
import database from "../assets/databases.png"

function TechCards() {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center",flexDirection: "column", paddingBottom:"100px"}}>
      <h3 className='subtitle'>Tech Stack</h3>
      <h2 className='heading2' style={{marginBottom:"100px"}}>Engine Behind Our AI</h2>
    <div className='cards' >
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
    </div>
  )
}

function Card1() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={python_icon} alt="Python" />
      </div>
      <h3 className="title">Languages</h3>
      <p className="description">Python, C/C++, Bash, R</p>
    </div>
  )
}
function Card2() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={tensorRT} alt="Python" />
      </div>
      <h3 className="title">Framework</h3>
      <p className="description">PyTorch, TensorFlow, CUDA, Transformers, Diffusers, Keras</p>
    </div>
  )
}
function Card3() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={detectron} alt="Python" />
      </div>
      <h3 className="title">Vision Tool</h3>
      <p className="description">OpenCV, OpenVino, MMDetection, Dectron2, Supervision</p>
    </div>
  )
}
function Card4() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={TTS} alt="Python" />
      </div>
      <h3 className="title">Voice & Audio AI</h3>
      <p className="description">Whisper Tortoise TTS, OpenVoice, ElevenLabs </p>
    </div>
  )
}
function Card5() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={data_labelling} alt="Python" />
      </div>
      <h3 className="title">Data Labelling</h3>
      <p className="description">Label Studio, Roboflow, MakeSense,LabelBox  </p>
    </div>
  )
}
function Card6() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={LLM} alt="Python" />
      </div>
      <h3 className="title">LLM Tools</h3>
      <p className="description">LangChain, LangGraph, LangSmith, CrewAI, LIamaIndex, AutoGen</p>
    </div>
  )
}
function Card7() {
  return (
    <div className="tech-card">
      <div className="icon">
        <img src={database} alt="Python" />
      </div>
      <h3 className="title">Database</h3>
      <p className="description">Pinecone, Weaviate, Chroma, Qdrant, PgVector, Milvus, Redis, Vespa</p>
    </div>
  )
}
export default TechCards
