import React from "react";
import "./Footer.css";
import {default as logo} from './RC_Juhu_logo.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={logo} alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Head office</span>
          <span className="secondaryText">New Marine Lines, Churchgate, Mumbai - 400020</span>
          <div className="flexCenter f-menu">
          <div style={{display : 'flex' , justifyContent : 'space-evenly'}}>
            <InstagramIcon style={{marginRight : '15px'}}/>
            <TwitterIcon style={{marginRight : '15px'}}/>
            <EmailIcon style={{marginRight : '15px'}}/>
            <InfoIcon />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
