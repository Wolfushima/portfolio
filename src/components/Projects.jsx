import React, { useEffect, useState } from 'react';
import FeaturedImg from '../assets/projects/studioghibli-shopping-cart.png';
import ProjectRickAndMortyImg from '../assets/projects/rickandmorty-memory-card.png';
import WeatherAppImg from '../assets/projects/weatherapp.png';
import BattleshipImg from '../assets/projects/battleship.png';

const Project = ({
  isFeatured,
  isRow,
  projectTitle,
  projectSrc,
  projectDescription,
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
            <div className="projects__image">
              <img src={projectSrc} alt={projectTitle} />
            </div>
            <div className="projects__description">
              <p>{projectDescription}</p>
            </div>
            <div className="projects__buttons">
              <div className="projects__button">
                <button type="button">Live</button>
              </div>
              <div className="projects__button">
                <button type="button">Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="projects__wrapper greybg">
      <div className="projects__container">
        <div className="projects__project">
          <div className="projects__left">
            <div className="projects__image">
              <img src={projectSrc} alt={projectTitle} />
            </div>
          </div>
          <div className="projects__right">
            <h4>{projectTitle}</h4>
            <div className="projects__description">
              <p>{projectDescription}</p>
            </div>
            <div className="projects__buttons">
              <div className="projects__button">
                <button type="button">Live</button>
              </div>
              <div className="projects__button">
                <button type="button">Code</button>
              </div>
            </div>
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
        projectSrc={FeaturedImg}
      />
      <Project
        isRow={!!matches}
        projectTitle="Rick and Morty Memory Card"
        projectDescription="A react-based game built with functional components, where players must click through every character once to win. With each click, the state updates and the cards are shuffled accordingly."
        projectSrc={ProjectRickAndMortyImg}
      />
      <Project
        isRow={!!matches}
        projectTitle="Weather App"
        projectDescription="Weather forecast site that uses the API OpenWeatherMap. Display current and the next 7 days forecast data for a given location."
        projectSrc={WeatherAppImg}
      />
      <Project
        isRow={!!matches}
        projectTitle="Battleship"
        projectDescription="Battleship game to practice TDD with Jest. Used factory functions to create players, ships and game board objects."
        projectSrc={BattleshipImg}
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
