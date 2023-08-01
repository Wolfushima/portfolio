import React from 'react';
import { ReactComponent as LinkedInLogoSVG } from '../../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogoSVG } from '../../assets/skills/github-logo.svg';
import { ReactComponent as InstagramLogoSVG } from '../../assets/footer/instagram-logo.svg';
import { ReactComponent as LayeredWavesSVG } from '../../assets/hero/layered-waves-haikei.svg';
import FooterIcon from './FooterIcon';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="svg-divider-top">
      <LayeredWavesSVG className="footer__shape-divider-top" />
    </div>
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__contact">
          <FooterIcon iconSVG={<LinkedInLogoSVG />} ariaLabel="LinkedIn" />
          <FooterIcon iconSVG={<GitHubLogoSVG />} ariaLabel="GitHub" />
          <FooterIcon iconSVG={<InstagramLogoSVG />} ariaLabel="Instagram" />
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
