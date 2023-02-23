import React from 'react';
import LinkedInLogo from '../assets/footer/linkedin-logo.svg';
import GitHubLogo from '../assets/skills/github-logo.svg';
import InstagramLogo from '../assets/footer/instagram-logo.svg';

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
              <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://github.com/Wolfushima">
              <img src={GitHubLogo} alt="Github" />
            </a>
          </div>
          <div className="footer__icon">
            <a href="https://www.instagram.com/wolfushima/">
              <img src={InstagramLogo} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
