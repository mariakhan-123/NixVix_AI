import React from "react";
import "./TechCard.css";

// import icons
import python_icon from "../assets/python.png";
import tensorRT from "../assets/tensorRT.png";
import detectron from "../assets/detectron.png";
import TTS from "../assets/TTS.png";
import LLM from "../assets/LLM_tools.png";
import data_labelling from "../assets/data_labeling.png";
import database from "../assets/databases.png";

// tech stack data array
const techData = [
  {
    icon: python_icon,
    title: "Languages",
    description: "Python, C/C++, Bash, R",
  },
  {
    icon: tensorRT,
    title: "Framework",
    description: "PyTorch, TensorFlow, CUDA, Transformers, Diffusers, Keras",
  },
  {
    icon: detectron,
    title: "Vision Tool",
    description: "OpenCV, OpenVino, MMDetection, Dectron2, Supervision",
  },
  {
    icon: TTS,
    title: "Voice & Audio AI",
    description: "Whisper, Tortoise TTS, OpenVoice, ElevenLabs",
  },
  {
    icon: data_labelling,
    title: "Data Labelling",
    description: "Label Studio, Roboflow, MakeSense, LabelBox",
  },
  {
    icon: LLM,
    title: "LLM Tools",
    description:
      "LangChain, LangGraph, LangSmith, CrewAI, LIamaIndex, AutoGen",
  },
  {
    icon: database,
    title: "Database",
    description:
      "Pinecone, Weaviate, Chroma, Qdrant, PgVector, Milvus, Redis, Vespa",
  },
];

function TechCards() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingBottom: "100px",
      }}
    >
      <h3 className="subtitle">Tech Stack</h3>
      <h2 className="heading2" style={{ marginBottom: "100px" }}>
        Engine Behind Our AI
      </h2>

      <div className="cards">
        {techData.map((item, index) => (
          <div className="tech-card" key={index}>
            <div className="icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className="title">{item.title}</h3>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechCards;
