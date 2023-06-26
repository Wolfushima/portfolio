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
import FramerMotionLogo from '../assets/skills/framer-motion-logo.svg';
import ReduxLogo from '../assets/skills/redux-logo.svg';
import FirebaseLogo from '../assets/skills/firebase-logo.svg';

const skillBoxVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skill = ({ logo, skillName }) => (
  <div className="skills__skill">
    <div className="skills__logo">
      <img src={logo} alt={skillName} />
    </div>
    <p>{skillName}</p>
  </div>
);

const SkillBox = ({ skillBoxTitle, children }) => (
  <motion.div className="skills__box" variants={skillBoxVariants}>
    <p className="skills__box-title">{skillBoxTitle}</p>
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
        <motion.div
          className="skills__skills"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          viewport={{ once: true }}
        >
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
          <SkillBox skillBoxTitle="Libraries">
            <Skill skillName="Redux" logo={ReduxLogo} />
            <Skill skillName="Framer Motion" logo={FramerMotionLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Backend/BaaS">
            <Skill skillName="Firebase" logo={FirebaseLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Tools">
            <Skill skillName="Webpack" logo={WebpackLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Collaborative Work">
            <Skill skillName="Git" logo={GitLogo} />
            <Skill skillName="GitHub" logo={GitHubLogo} />
          </SkillBox>
          <SkillBox skillBoxTitle="Prototyping">
            <Skill skillName="Figma" logo={FigmaLogo} />
          </SkillBox>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
