import React from 'react';

const FooterIcon = ({ iconSVG, ariaLabel }) => (
  <div className="footer__icon">
    <a
      href="https://www.linkedin.com/in/adolfoherreradev/"
      aria-label={ariaLabel}
    >
      {iconSVG}
    </a>
  </div>
);

export default FooterIcon;
