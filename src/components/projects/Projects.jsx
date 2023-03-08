import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import projectsImages from './projectsImages';

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

const ProjectSlider = ({ images, imagePlaceholder, projectTitle }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="projects__slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="projects__slider-image"
          key={page}
          src={images[imageIndex]}
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
        <img src={imagePlaceholder} alt={projectTitle} />
        <button type="button" className="next" onClick={() => paginate(1)}>
          ⇾
        </button>
        <button type="button" className="prev" onClick={() => paginate(-1)}>
          ⇽
        </button>
      </div>
    </div>
  );
};

const ProjectButtons = ({ liveLink, codeLink }) => (
  <div className="projects__buttons">
    <div className="projects__button">
      <a href={liveLink}>Live</a>
    </div>
    <div className="projects__button">
      <a href={codeLink}>Code</a>
    </div>
  </div>
);

const Project = ({
  isFeatured,
  isRow,
  projectTitle,
  projectImages,
  projectDescription,
  imagePlaceholder,
  liveLink,
  codeLink,
}) => {
  if (!isRow)
    return (
      <div
        className={
          isFeatured ? 'projects__wrapper' : 'projects__wrapper greybg'
        }
      >
        <div className="projects__container">
          {isFeatured && (
            <div className="projects__header">
              <h3>PROJECTS</h3>
            </div>
          )}
          <div className="projects__featured">
            <h4>{projectTitle}</h4>
            <ProjectSlider
              images={projectImages}
              imagePlaceholder={imagePlaceholder}
              projectTitle={projectTitle}
            />
            <div className="projects__description">
              <p>{projectDescription}</p>
            </div>
            <ProjectButtons liveLink={liveLink} codeLink={codeLink} />
          </div>
        </div>
      </div>
    );
  return (
    <div className="projects__wrapper greybg">
      <div className="projects__container">
        <div className="projects__project">
          <div className="projects__left">
            <ProjectSlider
              images={projectImages}
              imagePlaceholder={imagePlaceholder}
              projectTitle={projectTitle}
            />
          </div>
          <div className="projects__right">
            <h4>{projectTitle}</h4>
            <div className="projects__description">
              <p>{projectDescription}</p>
            </div>
            <ProjectButtons liveLink={liveLink} codeLink={codeLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, [matches]);

  return (
    <section id="projects" className="projects">
      <Project
        isFeatured
        projectTitle="Studio Ghibli Shopping Cart"
        projectDescription="Studio Ghibli Shopping Cart is an e-commerce web application built using React and designed to allow users to browse, search and purchase films from the world of Studio Ghibli. I used React
      Router to handle client-side routing and React Context API to
      handle the users cart."
        projectImages={projectsImages.studioGhibliShoppingCart}
        imagePlaceholder={projectsImages.studioGhibliShoppingCart[0]}
        liveLink="https://wolfushima.github.io/react-shopping-cart/"
        codeLink="https://github.com/Wolfushima/react-shopping-cart/"
      />
      <Project
        isRow={!!matches}
        projectTitle="Rick and Morty Memory Card"
        projectDescription="A react-based game built with functional components, where players must click through every character once to win. With each click, the state updates and the cards are shuffled accordingly."
        projectImages={projectsImages.rickAndMortyMemoryCard}
        imagePlaceholder={projectsImages.rickAndMortyMemoryCard[0]}
        liveLink="https://wolfushima.github.io/react-memory-card/"
        codeLink="https://github.com/Wolfushima/react-memory-card/"
      />
      <Project
        isRow={!!matches}
        projectTitle="Weather App"
        projectDescription="Weather forecast site that uses the API OpenWeatherMap. Display current and the next 7 days forecast data for a given location."
        projectImages={projectsImages.weatherApp}
        imagePlaceholder={projectsImages.weatherApp[0]}
        liveLink="https://wolfushima.github.io/weather-app/"
        codeLink="https://github.com/Wolfushima/weather-app/"
      />
      <Project
        isRow={!!matches}
        projectTitle="Battleship"
        projectDescription="Battleship game to practice TDD with Jest. Used factory functions to create players, ships and game board objects."
        projectImages={projectsImages.battleship}
        imagePlaceholder={projectsImages.battleship[0]}
        liveLink="https://wolfushima.github.io/battleship/"
        codeLink="https://github.com/Wolfushima/battleship/"
      />
      <div className="projects__wrapper showmore">
        <div className="projects__container">
          <div className="projects__showmore">
            <a href="https://github.com/Wolfushima">Show More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
