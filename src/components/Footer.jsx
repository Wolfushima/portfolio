import React from 'react';
import { ReactComponent as LinkedInLogoSVG } from '../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogoSVG } from '../assets/skills/github-logo.svg';
import { ReactComponent as InstagramLogoSVG } from '../assets/footer/instagram-logo.svg';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__author">
          <p>
            Adolfo Herrera <span>- Copyright 2023</span>
          </p>
        </div>
        <div className="footer__contact">
          <div className="footer__icon">
            <a href="https://www.linkedin.com/in/adolfoherreradev/">
              <LinkedInLogoSVG />
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://github.com/Wolfushima">
              <GitHubLogoSVG />
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://www.instagram.com/wolfushima/">
              <InstagramLogoSVG />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
