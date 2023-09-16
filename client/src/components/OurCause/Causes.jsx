import React from "react";
import "./Causes.css";
import {default as plant} from './plant.jpg'

const Causes = () => {
  return (
    <div id="ourcause" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Our Cause</span>
          <span className="primaryText">Run for Green: Planting Hope with Every Step</span>
        </div>

        <div style={{display:"flex", justifyContent:"space-around"}}>
        <div>
          <img src={plant} style={{height:"400px", width:"400px", borderRadius:"200px"}} />
        </div>

        <div style={{marginTop:"8rem", fontSize:"2.5rem", marginLeft:"2rem"}}>
        For Every 3 Participants, We Plant a Seed, and Every Stride Fuels Change.
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Causes;

