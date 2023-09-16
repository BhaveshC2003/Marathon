import React from 'react'
import "../index.css";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Causes from "../components/OurCause/Causes";
import Value from "../components/Value/Value";


const HomePage = () => {
  return (
    <div className='App'>
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Causes />
        <Value />
        <Contact />
      </div>
  );
}

export default HomePage