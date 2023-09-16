import "./Hero.css";
import {default as marathon} from './marathon.png'
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Join The<br />
              Race, Feel The 
              <br />Pace
            </motion.h1>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={600} end={900} duration={3} /> <span>+</span>
              </span>
              <span className="secondaryText">Past Participants</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={400} duration={3} /> <span>+</span>
              </span>
              <span className="secondaryText">Our Members</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={15} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src={marathon} style={{width:"40rem"}} alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
