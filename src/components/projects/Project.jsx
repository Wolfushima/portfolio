import React from 'react';
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

const Project = ({
  isFeatured,
  isRow,
  projectTitle,
  projectImages,
  projectDescription,
  imagePlaceholder,
  liveLink,
  codeLink,
  projectSkills,
}) => {
  if (!isRow)
    return (
      <div
        className={
          isFeatured ? 'projects__wrapper' : 'projects__wrapper horizontal'
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
            <div className="projects__skills">
              {projectSkills.map((skill, index) => (
                <div className="projects__skill" key={index}>
                  <div className="projects__logo">
                    <img src={skill.src} alt={skill.alt} />
                  </div>
                </div>
              ))}
            </div>
            <div className="projects__description ">
              <p>{projectDescription}</p>
            </div>
            <ProjectButtons liveLink={liveLink} codeLink={codeLink} />
          </div>
        </div>
      </div>
    );
  return (
    <div className="projects__wrapper horizontal">
      <div className="projects__container">
        <div className="projects__project">
          <div className="projects__left">
            <ProjectSlider
              images={projectImages}
              imagePlaceholder={imagePlaceholder}
              projectTitle={projectTitle}
            />
            <div className="projects__skills">
              {projectSkills.map((skill, index) => (
                <div className="projects__skill" key={index}>
                  <div className="projects__logo">
                    <img src={skill.src} alt={skill.alt} />
                  </div>
                </div>
              ))}
            </div>
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

export default Project;
