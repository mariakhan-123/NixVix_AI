import React from "react";
import "./Workflow.css";
import reqIcon from "../../assets/reqIcon.png";
import feasibilityIcon from "../../assets/feasibilityIcon.png";
import protoIcon from "../../assets/protoIcon.png";
import devIcon from "../../assets/devIcon.png";
import deployIcon from "../../assets/deployIcon.png";
import improveIcon from "../../assets/improveIcon.png";

function Workflow() {
  const steps = [
    { icon: reqIcon, title: "Requirements" },
    { icon: feasibilityIcon, title: "Feasibility Study" },
    { icon: protoIcon, title: "Prototyping\nand Validation" },
    { icon: devIcon, title: "Product Development" },
    { icon: deployIcon, title: "Deployment" },
    { icon: improveIcon, title: "Continuous Improvements" },
  ];

  return (
    <div className="outer-container">
    <section className="workflow-section">
      <div className="workflow-header">
        <p className="subtitle">Process</p>
        <h2 className="heading2" style={{marginBottom:"100px"}}>The NixVix Workflow</h2>
      </div>

      <div className="workflow-steps">
        {steps.map((step, idx) => (
          <div className="workflow-item" key={idx}>
            <div className="circle">
              <img src={step.icon} alt={step.title} />
            </div>
            <p className="workflow-text">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Workflow;
