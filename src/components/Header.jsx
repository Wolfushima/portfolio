import React, { useEffect, useState } from 'react';
import scrollToId from '../utils/scrollToId';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isBgTransparent, setIsBgTransparent] = useState(true);

  const handleLiClick = (id) => {
    scrollToId(id);
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const listenScrollEvent = () => {
    if (window.scrollY === 0) {
      return setIsBgTransparent(true);
    }
    return setIsBgTransparent(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

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
    <header
      id="header"
      className={isBgTransparent ? 'header bgTransparent' : 'header'}
    >
      <div className="header__wrapper">
        <div className="header__container">
          <button
            type="button"
            className="header__logo"
            onClick={() => scrollToId('home')}
            aria-label="Adolfo Herrera"
          >
            AH
          </button>
          <nav>
            <ul className={isNavOpen ? 'expanded' : null}>
              <li>
                <button
                  type="button"
                  onClick={() => handleLiClick('aboutme')}
                  aria-label="About Me"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLiClick('projects')}
                  aria-label="Projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLiClick('skills')}
                  aria-label="Skills"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLiClick('contact')}
                  aria-label="Contact"
                >
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
            aria-label="Hamburger Menu"
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
