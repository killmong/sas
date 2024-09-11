import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <video
        autoPlay
        loop
        muted
        src="https://www.indianconstitution.in/assets/constitution_video.mp4"
        className="background-video"
      ></video>
      <div className="hero-text">
        <h1>WE THE PEOPLE OF INDIA</h1>
        <h2>WELCOME TO THE INDIAN CONSTITUTION!</h2>
        <p className='text-white'>
          The Constitution of India is the supreme law of the land, outlining
          the framework for the governance of our great nation. A tribute to
          democracy, justice, liberty, equality, and fraternity for all citizens.
        </p>
        <div id="arrow">
          <i className="ri-arrow-down-line"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
