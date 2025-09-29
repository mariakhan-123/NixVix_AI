import React from "react";
import Button from "../ReusableComponents/ReusableButton";

function Solution() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "1rem 0rem",
      }}
    >
      
      <style>
        {`
          .button-row {
            display: flex;
            flex-wrap: nowrap;  
            gap: 2rem;
            justify-content: center;
            width: 100%;
            overflow-x: hidden; 
          }

          .button-row button {
            min-width: 150px;
            padding: 0.75rem 1rem;
            font-size: 14px;
            flex-shrink: 0;
          }

          /* For tablets & mobiles */
          @media (max-width: 1024px) {
            .button-row {
              flex-wrap: wrap; 
            }
            .button-row button {
              flex: 1 1 calc(50% - 1rem); /* 2 per row */
              max-width: 250px;
            }
          }

          /* For small mobiles */
          @media (max-width: 600px) {
            .button-row button {
              flex: 1 1 100%; /* full width */
              max-width: 100%;
            }
          }
        `}
      </style>

      <div className="button-row">
        <Button label="Computer Vision" />
        <Button label="Pose Estimation" />
        <Button label="Voice Tech" />
        <Button label="AI Video Gen" />
        <Button label="Conversational AI" />
        <Button label="UI Understanding" />
        <Button label="Agent Workflows" />
      </div>
    </div>
  );
}

export default Solution;
