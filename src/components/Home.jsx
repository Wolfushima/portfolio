import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as EmailIcon } from '../assets/contact/email-icon.svg';
import { ReactComponent as LinkedInLogo } from '../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogo } from '../assets/skills/github-logo.svg';
import scrollToId from '../utils/scrollToId';

const homeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => (
  <section id="home" className="home">
    <div className="home__wrapper">
      <div className="home__container">
        <motion.div
          className="home__center"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <div className="home__headers">
            <motion.p variants={homeVariants}>Hi,</motion.p>
            <motion.h1 variants={homeVariants}>
              I&apos;m Adolfo Herrera
            </motion.h1>
            <motion.h2 variants={homeVariants}>Frontend Developer</motion.h2>
          </div>
          <div className="home__contact">
            <motion.a
              variants={homeVariants}
              href="https://www.linkedin.com/in/adolfoherreradev/"
              className="home__contact-logo"
            >
              <LinkedInLogo />
            </motion.a>
            <motion.a
              variants={homeVariants}
              href="https://github.com/Wolfushima"
              className="home__contact-logo"
            >
              <GitHubLogo />
            </motion.a>
            <motion.button
              variants={homeVariants}
              type="button"
              className="home__contact-logo"
              onClick={() => scrollToId('contact')}
            >
              <EmailIcon />
            </motion.button>
          </div>
        </motion.div>
        <div className="home__shape-divider-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
