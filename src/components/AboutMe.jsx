import React from 'react';
import { motion } from 'framer-motion';
import Deer from '../assets/aboutme/deer.jpg';
import Polar from '../assets/aboutme/polar.jpg';
import Bird from '../assets/aboutme/bird.jpg';
import Dolphin from '../assets/aboutme/dolphin.jpg';

const imageVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const imgsContainerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.3,
    },
  },
};

const AboutMeImage = ({ imageSrc, imageAlt }) => (
  <motion.div className="aboutme__image" variants={imageVariants}>
    <motion.img
      src={imageSrc}
      alt={imageAlt}
      whileHover={{ scale: 1.3 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    />
  </motion.div>
);

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
          <motion.div
            className="aboutme__images"
            initial="hidden"
            whileInView="visible"
            variants={imgsContainerVariants}
            viewport={{ once: true }}
          >
            <AboutMeImage
              imageSrc={Deer}
              imageAlt="Deer - Wolfushima Original Artwork"
            />
            <AboutMeImage
              imageSrc={Polar}
              imageAlt="Polar - Wolfushima Original Artwork"
            />
            <AboutMeImage
              imageSrc={Bird}
              imageAlt="Bird - Wolfushima Original Artwork"
            />
            <AboutMeImage
              imageSrc={Dolphin}
              imageAlt="Dolphin - Wolfushima Original Artwork"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
