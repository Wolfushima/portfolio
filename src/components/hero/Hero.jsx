import React from 'react';
import { ReactComponent as LayeredWavesSVG } from '../../assets/hero/layered-waves-haikei.svg';
import HeroHeaders from './HeroHeaders';
import HeroContact from './HeroContact';
import HeroProfilePic from './HeroProfilePic';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__wrapper">
      <div className="hero__container">
        <LayeredWavesSVG className="hero__layered-waves" />
        <div className="hero__center">
          <HeroProfilePic />
          <HeroHeaders />
          <HeroContact />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
