import React from 'react';
import Deer from '../assets/aboutme/deer.png';
import Polar from '../assets/aboutme/polar.jpg';
import Bird from '../assets/aboutme/bird.png';
import Dolphin from '../assets/aboutme/dolphin.png';

const AboutMe = () => (
  <section id="aboutme" className="aboutme">
    <div className="aboutme__wrapper">
      <div className="aboutme__container">
        <div className="aboutme__header">
          <h3>ABOUT ME</h3>
        </div>
        <div className="aboutme__description">
          <p>
            I am a web developer with a passion for creating engaging and
            dynamic user experiences. I am proficient in React, JavaScript,
            HTML, and CSS. Through my journey of self-discovery and learning, I
            have honed my skills and developed a keen eye for detail. I am
            always striving to improve and expand my knowledge, and I am excited
            to take on new challenges in the world of web development.
          </p>
        </div>
        <div className="aboutme__extra">
          <div className="aboutme__extra-description">
            <p>
              In addition to web development, I have a strong creative side that
              I express through playing the guitar and drawing.
            </p>
          </div>
          <div className="aboutme__images">
            <div className="aboutme__image">
              <img src={Deer} alt="Deer - Wolfushima Original Artwork" />
            </div>
            <div className="aboutme__image">
              <img src={Polar} alt="Polar - Wolfushima Original Artwork" />
            </div>
            <div className="aboutme__image">
              <img src={Bird} alt="Bird - Wolfushima Original Artwork" />
            </div>
            <div className="aboutme__image">
              <img src={Dolphin} alt="Dolphin - Wolfushima Original Artwork" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
