import React from 'react';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutMeImage = ({ image }) => (
  <motion.div className="aboutme__image" variants={imageVariants}>
    <motion.img
      src={image.src}
      srcSet={image.srcSet}
      alt={image.alt}
      whileHover={{ scale: 1.3 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    />
  </motion.div>
);

export default AboutMeImage;
