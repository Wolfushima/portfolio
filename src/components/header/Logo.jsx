import React from 'react';
import scrollToId from '../../utils/scrollToId';

const Logo = () => (
  <button
    type="button"
    className="header__logo"
    onClick={() => scrollToId('hero')}
    aria-label="Adolfo Herrera"
  >
    AH
  </button>
);

export default Logo;
