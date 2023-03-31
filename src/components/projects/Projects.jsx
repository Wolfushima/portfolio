import React, { useEffect, useState } from 'react';
import Project from './Project';
import projectsImages from './projectsImages';
import projectsSkills from './projectsSkills';

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
        projectSkills={projectsSkills.studioGhibliShoppingCart}
      />
      <Project
        isRow={!!matches}
        projectTitle="Portfolio"
        projectDescription="Used React and Framer Motion to create a smooth and visually engaging portfolio with reusable components and animations."
        projectImages={projectsImages.portfolio}
        imagePlaceholder={projectsImages.portfolio[0]}
        liveLink="https://adolfoherrera.netlify.app/"
        codeLink="https://github.com/Wolfushima/portfolio/"
        projectSkills={projectsSkills.portfolio}
      />
      <Project
        isRow={!!matches}
        projectTitle="Rick and Morty Memory Card"
        projectDescription="A react-based game built with functional components, where players must click through every character once to win. With each click, the state updates and the cards are shuffled accordingly."
        projectImages={projectsImages.rickAndMortyMemoryCard}
        imagePlaceholder={projectsImages.rickAndMortyMemoryCard[0]}
        liveLink="https://wolfushima.github.io/react-memory-card/"
        codeLink="https://github.com/Wolfushima/react-memory-card/"
        projectSkills={projectsSkills.rickAndMortyMemoryCard}
      />
      <Project
        isRow={!!matches}
        projectTitle="Weather App"
        projectDescription="Weather forecast site that uses the API OpenWeatherMap. Display current and the next 7 days forecast data for a given location."
        projectImages={projectsImages.weatherApp}
        imagePlaceholder={projectsImages.weatherApp[0]}
        liveLink="https://wolfushima.github.io/weather-app/"
        codeLink="https://github.com/Wolfushima/weather-app/"
        projectSkills={projectsSkills.weatherApp}
      />
      <Project
        isRow={!!matches}
        projectTitle="Battleship"
        projectDescription="Battleship game to practice TDD with Jest. Used factory functions to create players, ships and game board objects."
        projectImages={projectsImages.battleship}
        imagePlaceholder={projectsImages.battleship[0]}
        liveLink="https://wolfushima.github.io/battleship/"
        codeLink="https://github.com/Wolfushima/battleship/"
        projectSkills={projectsSkills.battleship}
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
