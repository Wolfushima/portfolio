import React from 'react';
import NavLi from './NavLi';

const Nav = ({ isNavOpen, handleLiClick }) => (
  <nav>
    <ul className={isNavOpen ? 'expanded' : null}>
      <NavLi
        liText="About Me"
        handleLiClick={handleLiClick}
        scrollTo="aboutme"
      />
      <NavLi
        liText="Projects"
        handleLiClick={handleLiClick}
        scrollTo="projects"
      />
      <NavLi liText="Skills" handleLiClick={handleLiClick} scrollTo="skills" />
      <NavLi
        liText="Contact"
        handleLiClick={handleLiClick}
        scrollTo="contact"
      />
    </ul>
  </nav>
);

export default Nav;
