import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import { ReactComponent as ArrowLeftIcon } from '../../assets/projects/arrow-left-icon.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/projects/arrow-right-icon.svg';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProjectSlider = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [hoverVariants, setHoverVariants] = useState();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  const imageIndex = wrap(0, images.src.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isMobile) {
      setHoverVariants({ boxShadow: 0 });
    } else setHoverVariants();
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setIsMobile(e.matches));

    return () =>
      window.removeEventListener('change', (e) => setIsMobile(e.matches));
  }, [isMobile]);

  return (
    <motion.div
      className="projects__slider"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      whileHover={hoverVariants}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="projects__slider-image"
          key={page}
          src={images.src[imageIndex]}
          srcSet={images.srcSet[imageIndex]}
          alt={images.alt}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="projects__image-placeholder">
        <img src={images.src[0]} alt={images.alt} />
        <button
          type="button"
          className="next"
          onClick={() => paginate(1)}
          aria-label="Next Image"
        >
          <ArrowRightIcon />
        </button>
        <button
          type="button"
          className="prev"
          onClick={() => paginate(-1)}
          aria-label="Previous Image"
        >
          <ArrowLeftIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectSlider;
