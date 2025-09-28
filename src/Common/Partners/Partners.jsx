import React from "react";
import "./Partners.css";
import fluffy from "../../assets/fluffy-technologies_logo.png";
import biscuit_ai from "../../assets/Biscuit_ai_logo_converted.png";
import shelfr from "../../assets/Shelfr logo.png";
import synthesys from "../../assets/Sythesys logo.png";
import shotdeck from "../../assets/Shotdeck.png";

function Partners() {
  return (
    <div className="partners-section">
      <div className="partners-container">
        <img src={fluffy} alt="Fluffy Partner" className="partner-logo" />
        <img src={biscuit_ai} alt="Biscuit AI Partner" className="partner-logo biscuit" />
        <img src={shelfr} alt="Shelfr Partner" className="partner-logo shelfr" />
        <img src={synthesys} alt="Synthesys Partner" className="partner-logo large" />
        <img src={shotdeck} alt="Shotdeck Partner" className="partner-logo" />
      </div>
    </div>
  );
}

export default Partners;
