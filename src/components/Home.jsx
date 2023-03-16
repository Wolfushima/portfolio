import React from 'react';
import { motion } from 'framer-motion';
import scrollToId from '../utils/scrollToId';

const homeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => (
  <section id="home" className="home">
    <div className="home__wrapper">
      <div className="home__container">
        <div />
        <motion.div
          className="home__header"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.h1 variants={homeVariants}>Adolfo Herrera</motion.h1>
          <motion.h2 variants={homeVariants}>Frontend Developer</motion.h2>
        </motion.div>
        <div className="home__bottom">
          <div className="home__description">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
            >
              I bring designs to life by creating responsive, user-friendly
              websites
            </motion.p>
          </div>
          <div className="home__button">
            <button type="button" onClick={() => scrollToId('aboutme')}>
              Find out More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
