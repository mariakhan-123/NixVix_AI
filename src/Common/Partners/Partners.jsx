import React from "react";
import fluffy from "../../assets/fluffy.png";
import biscuit_ai from "../../assets/biscuit_ai.png";
import shelfr from "../../assets/shelfr.png";
import synthesys from "../../assets/synthesys.png";
// import shotdeck from "../../assets/shotdeck.png"; // Uncomment if available

function Partners() {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap", 
      }}
    >
      <img src={fluffy} alt="Fluffy Partner" width="150" />
      <img src={biscuit_ai} alt="Biscuit AI Partner" width="150" />
      <img src={shelfr} alt="Shelfr Partner" width="150" />
      <img src={synthesys} alt="Synthesys Partner" width="150" />
      {/* <img src={shotdeck} alt="Shotdeck Partner" width="150" /> */}
    </div>
  );
}

export default Partners;
