import React from 'react';

const ProjectSkills = ({ projectSkills }) => {
  return (
    <div className="projects__skills">
      {projectSkills.map((skill, index) => (
        <div className="projects__skill" key={index}>
          <div className="projects__logo">
            <img src={skill.src} alt={skill.alt} />
          </div>
          <span>{skill.alt}</span>
        </div>
      ))}
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
};

const ProjectSkillsCarousel = ({ projectSkills }) => {
  return (
    <div className="projects__skills-carousel">
      <ProjectSkills projectSkills={projectSkills} />
    </div>
  );
};
export default ProjectSkillsCarousel;
