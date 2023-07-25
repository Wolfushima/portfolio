import React from 'react';
import { ReactComponent as EmailIcon } from '../../assets/contact/email-icon.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/footer/linkedin-logo.svg';
import { ReactComponent as GitHubLogo } from '../../assets/skills/github-logo.svg';
import scrollToId from '../../utils/scrollToId';

const HeroContact = () => (
  <div className="hero__contact">
    <a
      href="https://www.linkedin.com/in/adolfoherreradev/"
      className="hero__contact-logo"
      aria-label="LinkedIn"
    >
      <LinkedInLogo />
    </a>
    <a
      href="https://github.com/Wolfushima"
      className="hero__contact-logo"
      aria-label="GitHub"
    >
      <GitHubLogo />
    </a>
    <button
      type="button"
      className="hero__contact-logo"
      onClick={() => scrollToId('contact')}
      aria-label="Email"
    >
      <EmailIcon />
    </button>
  </div>
);

export default HeroContact;
