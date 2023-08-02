import React from 'react';
import { motion } from 'framer-motion';

const skillBoxVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillBox = ({ skillBoxTitle, children }) => (
  <motion.div className="skills__box" variants={skillBoxVariants}>
    <p className="skills__box-title">{skillBoxTitle}</p>
    <div className="skills__box-items">{children}</div>
  </motion.div>
);

export default SkillBox;
