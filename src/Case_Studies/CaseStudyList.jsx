import React from "react";
import './CaseStudyList.css'


function CaseStudyList({ caseData, activeCase, setActiveCase, showHeader }) {
  return (
    <>
      {showHeader && (
        <div className="title">
          <h3 className="subtitle">Portfolio</h3>
          <div className="heading-row">
            <h2 className="heading2">Case Studies</h2>
            <div className="nav-buttons">
              <button>←</button>
              <button>→</button>
            </div>
          </div>
        </div>
      )}


      <div className="case-studies">
        {caseData.map((item, i) => (
          <div
            key={i}

            className={`case-card ${activeCase?.title === item.title ? "active" : ""}`}
            onClick={() => setActiveCase?.(item)}

          >
            <img src={item.img} alt={item.title} className="case-img" />
            <div className="case-tags">
              {item.tags.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
            <h3 className="case-title">{item.title}</h3>
            <p className="case-desc">{item.outcome || item.desc}</p>
          </div>
        ))}
      </div>

    </>
  );
}

export default CaseStudyList;
