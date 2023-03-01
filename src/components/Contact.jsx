import React from 'react';
import EmailIcon from '../assets/contact/email-icon.svg';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact__wrapper">
      <div className="contact__container">
        <div className="contact__header">
          <h3>CONTACT</h3>
        </div>
        <div className="contact__msg">
          <p>I&apos;m currently available for work</p>
        </div>
        <div className="contact__button">
          <button type="button">
            <img src={EmailIcon} alt="Email" />
            <p>Email Me</p>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
