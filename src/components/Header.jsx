import React, { useEffect, useState, useRef } from 'react';
import scrollToId from '../utils/scrollToId';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isBgTransparent, setIsBgTransparent] = useState(true);
  const [hideHeader, setHideHeader] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositionRef = useRef(null);
  const [matchesMediaQuery, setMatchesMediaQuery] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );
  const [headerStyle, setHeaderStyle] = useState('bgTransparent');

  const handleLiClick = (id) => {
    scrollToId(id);
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleHideHeader = () => {
    const isScrollDown = window.scrollY > scrollPositionRef.current;
    const isScrollUp = window.scrollY < scrollPositionRef.current;
    if (isScrollDown) {
      setHideHeader(true);
      return;
    }
    if (isScrollUp) {
      setHideHeader(false);
    }
  };

  const listenScrollEvent = () => {
    setScrollPosition(window.scrollY);
    handleHideHeader();
  };

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', (e) => setMatchesMediaQuery(e.matches));

    return () =>
      window.removeEventListener('change', (e) =>
        setMatchesMediaQuery(e.matches)
      );
  }, [matchesMediaQuery]);

  useEffect(() => {
    if (isBgTransparent && !matchesMediaQuery)
      return setHeaderStyle('bgTransparent');
    if (hideHeader) return setHeaderStyle('hide');
    return setHeaderStyle('');
  }, [hideHeader, isBgTransparent, matchesMediaQuery]);

  useEffect(() => {
    scrollPositionRef.current = scrollPosition;
    if (scrollPosition === 0) return setIsBgTransparent(true);
    return setIsBgTransparent(false);
  }, [scrollPosition]);

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
    <header id="header" className={`header ${headerStyle}`}>
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
