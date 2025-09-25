import React, { useState } from "react";
import "./CaseStudy.css";
import CaseStudy1 from "../../assets/CaseStudy1.png";
import CaseStudy2 from "../../assets/CaseStudy2.png";
import CaseStudy3 from "../../assets/CaseStudy3.png";

function CaseStudy() {
  const caseData = [
    {
      img: CaseStudy1,
      tags: ["SportsTech", "Computer Vision", "Deep Learning"],
      title: "Drofree – Monitor Soccer Through Drone",
      desc: "Outcome: Reduced manual annotation time by 90% and provided clubs with accurate player heatmaps.",
    },
    {
      img: CaseStudy2,
      tags: ["HealthTech", "Video Intelligence", "Real-Time AI"],
      title: "Swimmer Stroke & Lap Analytics",
      desc: "Outcome: Enabled real-time stroke and lap detection with over 94% accuracy, improving coaching efficiency.",
    },
    {
      img: CaseStudy3,
      tags: ["Retail AI", "Object Detection", "Edge Vision"],
      title: "Smart Shelf Detection for Retail Stores",
      desc: "Outcome: Increased shelf availability visibility by 80%, reducing restock delays.",
    },
     {
      img: CaseStudy3,
      tags: ["Retail AI", "Object Detection", "Edge Vision"],
      title: "Smart Shelf Detection for Retail Stores",
      desc: "Outcome: Increased shelf availability visibility by 80%, reducing restock delays.",
    },
   
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const handleNext = () => {
    if (startIndex < caseData.length - cardsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleCards = caseData.slice(startIndex, startIndex + cardsToShow);

  return (
    <div>
     <div className="title">
  <h3 className="subtitle">Portfolio</h3>

  <div className="heading-row">
    <h2 className="heading2">Case Studies</h2>
    <div className="nav-buttons">
      <button onClick={handlePrev}>←</button>
      <button onClick={handleNext}>→</button>
    </div>
  </div>
</div>


      <div className="case-studies">
        {visibleCards.map((item, index) => (
          <div className="case-card" key={index}>
            <img src={item.img} alt={item.title} className="case-img" />
            <div className="case-tags">
              {item.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <h3 className="case-title">{item.title}</h3>
            <p className="case-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudy;
