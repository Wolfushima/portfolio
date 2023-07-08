import React from 'react';
import { motion } from 'framer-motion';
import ABOUTME_IMAGES from '../data/aboutme/aboutme-images';

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

const AboutMe = () => (
  <section id="aboutme" className="aboutme">
    <div className="aboutme__wrapper">
      <div className="aboutme__container">
        <div className="aboutme__left">
          <div className="aboutme__header">
            <h3>ABOUT ME</h3>
          </div>
          <div className="aboutme__description">
            <p>Hello! I&apos;m Adolfo,</p>
            <p>
              a web developer with a degree in electronic engineering and a love
              for design. I strive to create engaging user experiences through
              efficient and quality code.
            </p>
          </div>
        </div>
        <div className="aboutme__extra">
          <div className="aboutme__extra-description placeholder">
            <p>
              In addition to web development, I have a strong creative side that
              I express through playing the guitar and drawing.
            </p>
          </div>
          <motion.div
            className="aboutme__image-container"
            initial="hidden"
            whileInView="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            viewport={{ once: true }}
          >
            <AboutMeImage image={ABOUTME_IMAGES.POLAR} />
            <AboutMeImage image={ABOUTME_IMAGES.DEER} />
            <AboutMeImage image={ABOUTME_IMAGES.BIRD} />
            <AboutMeImage image={ABOUTME_IMAGES.DOLPHIN} />
          </motion.div>
          <div className="aboutme__extra-description">
            <p>
              In addition to web development, I have a strong creative side that
              I express through playing the guitar and drawing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
