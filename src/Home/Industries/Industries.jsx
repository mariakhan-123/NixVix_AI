import React, { useState } from "react";
import "./Industries.css";
import HealthCareImg from "../../assets/Industry(HealthCare).png";
import FinanceImg from '../../assets/item4.png'

const industriesData = [
  {
    image: HealthCareImg,
    title: "Healthcare",
    description:
      "Automated Echocardiograms De-Identification and Interpretation for Clinical Purposes",
    meta: "PhysioW – A Physiotherapist Assistant",
  },
  {
    image: FinanceImg,
    title: "Finance",
    description:
      "AI-driven fraud detection, risk analysis, and real-time customer insights for better decision-making.",
    meta: "SmartBank – Financial Intelligence Platform",
  },
  {
    image: HealthCareImg,
    title: "Retail",
    description:
      "Personalized shopping experiences, demand forecasting, and computer vision-powered store analytics.",
    meta: "ShopVision – AI-Powered Retail Assistant",
  },
];

function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + industriesData.length) % industriesData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % industriesData.length
    );
  };

  const currentIndustry = industriesData[currentIndex];

  return (
    <div className="industries-section">
      <h4 className="subtitle">Industries</h4>
      <h2 className="heading2" style={{ lineHeight: "95px", fontSize: "50px" }}>
        Where Our Solutions Make An Impact
      </h2>

      <div className="industry-card">
        <button className="nav-btn left" onClick={handlePrev}>
          ←
        </button>
        <div className="industry-image">
          <img src={currentIndustry.image} alt={currentIndustry.title} />
          <div className="industry-info">
            <h3>{currentIndustry.title}</h3>
            <p>{currentIndustry.description}</p>
            <span className="industry-meta">{currentIndustry.meta}</span>
          </div>
        </div>
        <button className="nav-btn right" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
}

export default Industries;
