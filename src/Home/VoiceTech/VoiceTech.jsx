import React from 'react'

function VoiceTech() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",   // stack items vertically
        justifyContent: "center",  // center vertically (if parent has height)
        alignItems: "center",      // center horizontally
        textAlign: "center",
        margin:"60px"
      }}
    >
      <h3 className="subtitle" style={{marginBottom:"30px"}}>Detection, Segmentation, Tracking</h3>
      <div
        style={{
          backgroundImage: `url(${require("../../assets/voiceTech.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          maxWidth: "1150px",
          width: "100%",   // ensures responsiveness
          height: "650px",
          margin: "20px", // spacing from heading
          border:"1px solid #1F805399",
          borderRadius:"60px"
        }}
      ></div>
    </div>
  )
}

export default VoiceTech
