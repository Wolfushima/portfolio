import React from 'react';

const NavLi = ({ liText, handleLiClick, scrollTo }) => (
  <li>
    <button
      type="button"
      onClick={() => handleLiClick(scrollTo)}
      aria-label={liText}
    >
      {liText}
    </button>
  </li>
);

export default NavLi;
