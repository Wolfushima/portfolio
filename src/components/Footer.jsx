import React from 'react';
import { ReactComponent as LinkedInLogoSVG } from '../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogoSVG } from '../assets/skills/github-logo.svg';
import { ReactComponent as InstagramLogoSVG } from '../assets/footer/instagram-logo.svg';
import { ReactComponent as LayeredWavesSVG } from '../assets/home/layered-waves-haikei.svg';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="svg-divider-top">
      <LayeredWavesSVG className="footer__shape-divider-top" />
    </div>
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__contact">
          <div className="footer__icon">
            <a
              href="https://www.linkedin.com/in/adolfoherreradev/"
              aria-label="LinkedIn"
            >
              <LinkedInLogoSVG />
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://github.com/Wolfushima" aria-label="GitHub">
              <GitHubLogoSVG />
            </a>
          </div>
          <div className="footer__icon">
            <a
              href="https://www.instagram.com/wolfushima/"
              aria-label="Instagram"
            >
              <InstagramLogoSVG />
            </a>
          </div>
        </div>
        <div className="footer__author">
          <p>
            Adolfo Herrera <span>- Copyright 2023</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
