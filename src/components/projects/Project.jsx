import React, { useEffect, useState } from 'react';
import ProjectSlider from './ProjectSlider';

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

const ProjectSkills = ({ projectSkills }) => (
  <div className="projects__skills">
    {projectSkills.map((skill, index) => (
      <div className="projects__skill" key={index}>
        <div className="projects__logo">
          <img src={skill.src} alt={skill.alt} />
        </div>
        <span>{skill.alt}</span>
      </div>
    ))}
  </div>
);

const ProjectSkillsPlaceHolder = ({ projectSkills }) => (
  <div className="projects__skills-placeholder">
    <ProjectSkills projectSkills={projectSkills} />
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
  imagePlaceholder,
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
            {!verticalAlign && (
              <ProjectSkillsPlaceHolder projectSkills={projectSkills} />
            )}
            <ProjectSlider
              images={projectImages}
              imagePlaceholder={imagePlaceholder}
              projectTitle={projectTitle}
            />
            <ProjectSkills projectSkills={projectSkills} />
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
