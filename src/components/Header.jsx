import React, { useEffect, useState } from 'react';
import scrollToId from '../utils/scrollToId';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLiClick = (id) => {
    scrollToId(id);
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.querySelector('main').addEventListener('click', toggleNav);
      document.querySelector('footer').addEventListener('click', toggleNav);
    }
    return () => {
      document.querySelector('main').removeEventListener('click', toggleNav);
      document.querySelector('footer').removeEventListener('click', toggleNav);
    };
  }, [isNavOpen]);

  return (
    <header id="header" className="header">
      <div className="header__wrapper">
        <div className="header__container">
          <button
            type="button"
            className="header__logo"
            onClick={() => scrollToId('home')}
          >
            Adolfo Herrera
          </button>
          <nav>
            <ul className={isNavOpen ? 'expanded' : null}>
              <li>
                <button type="button" onClick={() => handleLiClick('aboutme')}>
                  About Me
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLiClick('projects')}>
                  Projects
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLiClick('skills')}>
                  Skills
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleLiClick('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className={
              isNavOpen ? 'header__hamburger open' : 'header__hamburger button'
            }
            onClick={toggleNav}
          >
            <span />
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
