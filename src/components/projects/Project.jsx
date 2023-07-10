import React, { useEffect, useState } from 'react';
import ProjectSlider from './ProjectSlider';
import ProjectSkillsCarousel from './ProjectSkillsCarousel';

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

const ProjectDescription = ({ projectDescription }) => (
  <div className="projects__description">
    <p>{projectDescription}</p>
  </div>
);

const Project = ({
  verticalAlign,
  projectTitle,
  projectImages,
  projectDescription,
  liveLink,
  codeLink,
  projectSkills,
}) => {
  const [projectClassName, setProjectClassName] = useState(
    'projects__project vertical'
  );
  const [panelOneClassName, setPanelOneClassName] = useState(
    'projects__vertical-top'
  );
  const [panelTwoClassName, setPanelTwoClassName] = useState(
    'projects__vertical-bottom'
  );

  useEffect(() => {
    if (verticalAlign) {
      setProjectClassName('projects__project vertical');
      setPanelOneClassName('projects__vertical-top');
      setPanelTwoClassName('projects__vertical-bottom');
    } else {
      setProjectClassName('projects__project horizontal');
      setPanelOneClassName('projects__horizontal-left');
      setPanelTwoClassName('projects__horizontal-right');
    }
  }, [verticalAlign]);

  return (
    <div className="projects__wrapper">
      <div className="projects__container">
        <div className={projectClassName}>
          <div className={panelOneClassName}>
            {verticalAlign && <h4>{projectTitle}</h4>}
            <ProjectSlider images={projectImages} />
            <ProjectSkillsCarousel projectSkills={projectSkills} />
          </div>
          <div className={panelTwoClassName}>
            {!verticalAlign && <h4>{projectTitle}</h4>}
            <ProjectDescription projectDescription={projectDescription} />
            <ProjectButtons liveLink={liveLink} codeLink={codeLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
