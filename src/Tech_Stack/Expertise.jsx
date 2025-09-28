import React from "react";
import "./Expertise.css";
import cloudIcon from "../assets/cloudIcon.png";
import deployIcon from "../assets/deployIcon.png";
import edgeIcon from "../assets/edgeIcon.png";
import langIcon from "../assets/langIcon.png";
import frameworkIcon from "../assets/frameworkIcon.png";
import visionIcon from "../assets/visionIcon.png";
import voiceIcon from "../assets/voiceIcon.png";
import datalabellingIcon from "../assets/datalabelingIcon.png";
import llmIcon from '../assets/llmIcon.png'
import databaseIcon from '../assets/databaseIcon.png'
import AI_Interface from '../assets/InterfaceIcon.png'


const techData = [
  {
    icon: langIcon ,
    title: "Languages",
    description: "Python, C/C++, Bash, R",
  },
  {
    icon: frameworkIcon,
    title: "Framework",
    description: "PyTorch, TensorFlow, CUDA, Transformers, Diffusers, Keras",
  },
  {
    icon: visionIcon,
    title: "Vision Tools",
    description: "OpenCV, OpenVino, MMDetection, Detectron2, Supervision",
  },
  {
    icon: voiceIcon,
    title: "Voice & Audio AI",
    description: "Whisper, Tortoise TTS, OpenVoice, ElevenLabs",
  },
  {
    icon: datalabellingIcon,
    title: "Data Labeling",
    description: "Label Studio, Roboflow, MakeSense, LabelBox",
  },
  {
    icon: llmIcon,
    title: "LLM Tools",
    description:
      "LangChain, LangGraph, LangSmith, CrewAI, LlamaIndex, AutoGen",
  },
  {
    icon: databaseIcon,
    title: "Databases",
    description:
      "Pinecone, Weaviate, Chroma, Qdrant, PgVector, Milvus, Redis, Vespa",
  },
   
   {
    icon: deployIcon,
    title: "Deployement",
    description:
      "FastAPI, Flask, Nginx, Docker, Kubernetes",
  },
   {
    icon: cloudIcon,
    title: "Cloud",
    description:
      "GCP, AWS, Azure, Replicate, Modal, Salad, Paperspace",
  },
   {
    icon: AI_Interface,
    title: "AI Interfaces & Frontend",
    description:
      "Streamlit, Chainlit, Gradio, Voicify, Next.js (for AI web  apps)",
  },
  {
    icon: edgeIcon,
    title: "Edge Devices",
    description:
      "Jetson TX2, Coral Dev Board, NCS2,  Raspberry Pi, OAK-D",
  },
];

function Expertise() {
  return (
    <div className="cards-container">
      {techData.map((item, index) => (
        <div className="horizontal-card" key={index}>
          <div className="card-icon">
            <img src={item.icon} alt={item.title} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Expertise;
