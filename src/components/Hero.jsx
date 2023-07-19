import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as EmailIcon } from '../assets/contact/email-icon.svg';
import { ReactComponent as LinkedInLogo } from '../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogo } from '../assets/skills/github-logo.svg';
import { ReactComponent as LayeredWavesSVG } from '../assets/hero/layered-waves-haikei.svg';
import scrollToId from '../utils/scrollToId';

const heroVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HeroHeaders = () => (
  <motion.div
    className="hero__headers"
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  >
    <motion.p variants={heroVariants}>Hi, I&apos;m</motion.p>
    <motion.h1 variants={heroVariants}>
      ADOLFO
      <br />
      HERRERA
    </motion.h1>
    <motion.h2 variants={heroVariants}>Frontend Developer</motion.h2>
  </motion.div>
);

const HeroContact = () => (
  <div className="hero__contact">
    <a
      href="https://www.linkedin.com/in/adolfoherreradev/"
      className="hero__contact-logo"
      aria-label="LinkedIn"
    >
      <LinkedInLogo />
    </a>
    <a
      href="https://github.com/Wolfushima"
      className="hero__contact-logo"
      aria-label="GitHub"
    >
      <GitHubLogo />
    </a>
    <button
      type="button"
      className="hero__contact-logo"
      onClick={() => scrollToId('contact')}
      aria-label="Email"
    >
      <EmailIcon />
    </button>
  </div>
);

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__wrapper">
      <div className="hero__container">
        <LayeredWavesSVG className="hero__layered-waves" />
        <div className="hero__center">
          <HeroHeaders />
          <HeroContact />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
