import React from 'react';

const Overlay = ({ isNavOpen, matchesMediaQuery }) => (
  <div
    className={`header__overlay ${
      isNavOpen && matchesMediaQuery ? 'show-overlay' : ''
    }`}
  />
);

export default Overlay;
