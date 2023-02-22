import React from 'react';
import JavaScriptLogo from '../assets/skills/javascript-logo.svg';
import HTMLLogo from '../assets/skills/html-logo.svg';
import CSSLogo from '../assets/skills/css-logo.svg';
import SassLogo from '../assets/skills/sass-logo.svg';
import ReactLogo from '../assets/skills/react-logo.svg';
import BootstrapLogo from '../assets/skills/bootstrap-logo.svg';
import GitLogo from '../assets/skills/git-logo.svg';
import GitHubLogo from '../assets/skills/github-logo.svg';
import WebpackLogo from '../assets/skills/webpack-logo.svg';
import FigmaLogo from '../assets/skills/figma-logo.svg';

const Skill = ({ logo, skillName }) => (
  <div className="skills__skill">
    <div className="skills__logo">
      <img src={logo} alt={skillName} />
    </div>
    <p>{skillName}</p>
  </div>
);

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills__wrapper">
      <div className="skills__container">
        <div className="skills__header">
          <h3>SKILLS</h3>
        </div>
        <div className="skills__skills">
          <div className="skills__box">
            <h5>Languages</h5>
            <div className="skills__box-items">
              <Skill skillName="JavaScript" logo={JavaScriptLogo} />
              <Skill skillName="HTML" logo={HTMLLogo} />
              <Skill skillName="CSS" logo={CSSLogo} />
              <Skill skillName="Sass" logo={SassLogo} />
            </div>
          </div>
          <div className="skills__box">
            <h5>Frameworks</h5>
            <div className="skills__box-items">
              <Skill skillName="React" logo={ReactLogo} />
              <Skill skillName="Bootstrap" logo={BootstrapLogo} />
            </div>
          </div>
          <div className="skills__box">
            <h5>Collaborative Work</h5>
            <div className="skills__box-items">
              <Skill skillName="Git" logo={GitLogo} />
              <Skill skillName="GitHub" logo={GitHubLogo} />
            </div>
          </div>
          <div className="skills__box">
            <h5>Tools</h5>
            <div className="skills__box-items">
              <Skill skillName="Webpack" logo={WebpackLogo} />
              <Skill skillName="Figma" logo={FigmaLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
