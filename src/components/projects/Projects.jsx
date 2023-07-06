import React, { useEffect, useState } from 'react';
import Project from './Project';
import projectsImages from './projectsImages';
import projectsSkills from './projectsSkills';
import { ReactComponent as ShapeDividerSVG } from '../../assets/projects/wave-haikei.svg';

const Projects = () => {
  const [matchesMediaQuery, setMatchesMediaQuery] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatchesMediaQuery(e.matches));

    return () =>
      window.removeEventListener('change', (e) =>
        setMatchesMediaQuery(e.matches)
      );
  }, [matchesMediaQuery]);

  return (
    <section id="projects" className="projects">
      <div className="svg-divider-top">
        <ShapeDividerSVG className="projects__shape-divider-top" />
      </div>
      <div className="projects__content">
        <div className="projects__header">
          <h3>PROJECTS</h3>
        </div>
        <div className="projects__featured">
          <Project
            verticalAlign={!matchesMediaQuery}
            projectTitle="Studio Ghibli Shopping Cart"
            projectDescription="Studio Ghibli Shopping Cart is an e-commerce web application built using React and designed to allow users to browse, search and purchase films from the world of Studio Ghibli. I used React
          Router to handle client-side routing and React Context API to
          handle the users cart."
            projectImages={projectsImages.studioGhibliShoppingCart}
            imagePlaceholder={projectsImages.studioGhibliShoppingCart[0]}
            liveLink="https://wolfushima.github.io/react-shopping-cart/"
            codeLink="https://github.com/Wolfushima/react-shopping-cart/"
            projectSkills={projectsSkills.studioGhibliShoppingCart}
          />
          <Project
            verticalAlign={!matchesMediaQuery}
            projectTitle="Where's Waldo?"
            projectDescription="Photo-tagging application that incorporates a backend using Firebase. The objective of the project is to find Waldo and other hidden characters within six different levels."
            projectImages={projectsImages.whereIsWaldo}
            imagePlaceholder={projectsImages.whereIsWaldo[0]}
            liveLink="https://wolfushima.github.io/where-is-waldo/"
            codeLink="https://github.com/Wolfushima/where-is-waldo"
            projectSkills={projectsSkills.whereIsWaldo}
          />
        </div>
        <div className="projects__grid">
          <Project
            verticalAlign
            projectTitle="Portfolio"
            projectDescription="Used React and Framer Motion to create a smooth and visually engaging portfolio with reusable components and animations. Used React and Framer Motion to create a smooth and visually engaging portfolio with reusable components and animations."
            projectImages={projectsImages.portfolio}
            imagePlaceholder={projectsImages.portfolio[0]}
            liveLink="https://adolfoherrera.netlify.app/"
            codeLink="https://github.com/Wolfushima/portfolio/"
            projectSkills={projectsSkills.portfolio}
          />
          <Project
            verticalAlign
            projectTitle="Weather App"
            projectDescription="Weather forecast site that uses the API OpenWeatherMap. Display current and the next 7 days forecast data for a given location."
            projectImages={projectsImages.weatherApp}
            imagePlaceholder={projectsImages.weatherApp[0]}
            liveLink="https://wolfushima.github.io/weather-app/"
            codeLink="https://github.com/Wolfushima/weather-app/"
            projectSkills={projectsSkills.weatherApp}
          />
          <Project
            verticalAlign
            projectTitle="Battleship"
            projectDescription="Battleship game to practice TDD with Jest. Used factory functions to create players, ships and game board objects."
            projectImages={projectsImages.battleship}
            imagePlaceholder={projectsImages.battleship[0]}
            liveLink="https://wolfushima.github.io/battleship/"
            codeLink="https://github.com/Wolfushima/battleship/"
            projectSkills={projectsSkills.battleship}
          />
        </div>
        <div className="projects__showmore">
          <a href="https://github.com/Wolfushima">Show More</a>
        </div>
      </div>
      <div className="svg-divider-bottom">
        <ShapeDividerSVG className="projects__shape-divider-bottom" />
      </div>
    </section>
  );
};

export default Projects;
