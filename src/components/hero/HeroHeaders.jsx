import React from 'react';
import { motion } from 'framer-motion';

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

export default HeroHeaders;
