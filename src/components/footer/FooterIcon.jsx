import React from 'react';

const FooterIcon = ({ iconSVG, ariaLabel, linkTo }) => (
  <div className="footer__icon">
    <a href={linkTo} aria-label={ariaLabel}>
      {iconSVG}
    </a>
  </div>
);

export default FooterIcon;
