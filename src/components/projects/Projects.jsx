import React, { useEffect, useState } from 'react';
import Project from './Project';
import { ReactComponent as ShapeDividerSVG } from '../../assets/projects/wave-haikei.svg';
import PROJECTS_DATA from '../../data/projects/projects-data';

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
            projectData={PROJECTS_DATA.whereIsWaldo}
          />
          <Project
            verticalAlign={!matchesMediaQuery}
            projectData={PROJECTS_DATA.studioGhibliShoppingCart}
          />
        </div>
        <div className="projects__grid">
          <Project verticalAlign projectData={PROJECTS_DATA.portfolio} />
          <Project verticalAlign projectData={PROJECTS_DATA.weatherApp} />
          <Project verticalAlign projectData={PROJECTS_DATA.battleship} />
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
