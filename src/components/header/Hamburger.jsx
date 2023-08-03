import React from 'react';

const Hamburger = ({ isNavOpen, toggleNav }) => (
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
);

export default Hamburger;
