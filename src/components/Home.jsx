import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as EmailIcon } from '../assets/contact/email-icon.svg';
import { ReactComponent as LinkedInLogo } from '../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogo } from '../assets/skills/github-logo.svg';
import { ReactComponent as LayeredWavesSVG } from '../assets/home/layered-waves-haikei.svg';
import scrollToId from '../utils/scrollToId';

const homeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeHeaders = () => (
  <motion.div
    className="home__headers"
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
  >
    <motion.p variants={homeVariants}>Hi, I&apos;m</motion.p>
    <motion.h1 variants={homeVariants}>Adolfo Herrera</motion.h1>
    <motion.h2 variants={homeVariants}>Frontend Developer</motion.h2>
  </motion.div>
);

const HomeContact = () => (
  <motion.div
    className="home__contact"
    initial="hidden"
    animate="visible"
    exit={{ opacity: 0, transition: { duration: 1 } }}
    variants={{
      visible: {
        transition: {
          delayChildren: 1,
          staggerChildren: 0.3,
        },
      },
    }}
  >
    <motion.a
      variants={homeVariants}
      href="https://www.linkedin.com/in/adolfoherreradev/"
      className="home__contact-logo"
      aria-label="LinkedIn"
    >
      <LinkedInLogo />
    </motion.a>
    <motion.a
      variants={homeVariants}
      href="https://github.com/Wolfushima"
      className="home__contact-logo"
      aria-label="GitHub"
    >
      <GitHubLogo />
    </motion.a>
    <motion.button
      variants={homeVariants}
      type="button"
      className="home__contact-logo"
      onClick={() => scrollToId('contact')}
      aria-label="Email"
    >
      <EmailIcon />
    </motion.button>
  </motion.div>
);

const Home = () => (
  <section id="home" className="home">
    <div className="home__wrapper">
      <div className="home__container">
        <LayeredWavesSVG className="home__layered-waves" />
        <div className="home__center">
          <HomeHeaders />
        </div>
        <HomeContact />
      </div>
    </div>
  </section>
);

export default Home;
