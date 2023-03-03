import React from 'react';
import { motion } from 'framer-motion';
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

const boxVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const Skill = ({ logo, skillName }) => (
  <div className="skills__skill">
    <div className="skills__logo">
      <motion.img
        src={logo}
        alt={skillName}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      />
    </div>
    <p>{skillName}</p>
  </div>
);

const SkillBox = ({ skillBoxTitle, children }) => (
  <motion.div
    className="skills__box"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ type: 'tween', duration: 0.7 }}
    variants={boxVariants}
  >
    <h5>{skillBoxTitle}</h5>
    <div className="skills__box-items">{children}</div>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills__wrapper">
      <div className="skills__container">
        <div className="skills__header">
          <h3>SKILLS</h3>
        </div>
        <div className="skills__skills">
          <SkillBox skillBoxTitle="Languages">
            <Skill skillName="JavaScript" logo={JavaScriptLogo} />
            <Skill skillName="HTML" logo={HTMLLogo} />
            <Skill skillName="CSS" logo={CSSLogo} />
            <Skill skillName="Sass" logo={SassLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Frameworks">
            <Skill skillName="React" logo={ReactLogo} />
            <Skill skillName="Bootstrap" logo={BootstrapLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Collaborative Work">
            <Skill skillName="Git" logo={GitLogo} />
            <Skill skillName="GitHub" logo={GitHubLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Tools">
            <Skill skillName="Webpack" logo={WebpackLogo} />
            <Skill skillName="Figma" logo={FigmaLogo} />
          </SkillBox>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
