import React from "react";
import "./CaseStudyDetail.css";

function CaseStudyDetail({ activeCase }) {
  if (!activeCase) return null; // safe check

  return (
    <div className="case-detail">
      <h2>{activeCase.title}</h2>
      <div className="tags">
        {activeCase.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>

      <img src={activeCase.img} alt={activeCase.title} className="detail-img" />

      <div className="detail-text">
        <h4>Challenge:</h4>
        <p>{activeCase.challenge}</p>

        <h4>Our Solution:</h4>
        <p>{activeCase.solution}</p>

        <h4>Tech Stack:</h4>
        <p>{activeCase.tech.join(", ")}</p>

        <h4>Outcome:</h4>
        <p>{activeCase.outcome}</p>
      </div>
    </div>
  );
}

export default CaseStudyDetail;
