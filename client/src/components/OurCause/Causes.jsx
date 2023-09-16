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

        <div>
        <div style={{marginTop:"8rem", fontSize:"2rem", marginLeft:"2rem", fontFamily: 'Lato', fontWeight : '600'}}>
        For Every 3 Participants, We Plant a Seed, and Every Stride Fuels Change.
        </div>
        <div style={{padding : '20px 35px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        </div>
    
        </div>
      </div>
    </div>
  );
};

export default Causes;

