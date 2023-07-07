import React from 'react';
import { ReactComponent as EmailIcon } from '../assets/contact/email-icon.svg';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__wrapper">
        <div className="contact__container">
          <div className="contact__left">
            <div className="contact__header">
              <h3>CONTACT</h3>
            </div>
            <div className="contact__msg">
              <p>Let&apos;s get in touch.</p>
              <p>
                I am actively seeking new work opportunities and currently
                available for hire.
              </p>
            </div>
          </div>
          <form
            className="contact__form"
            name="Contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Contact" />
            <div>
              <label htmlFor="name">
                Your Name: <input type="text" name="name" id="name" />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Your Email: <input type="email" name="email" id="email" />
              </label>
            </div>
            <div>
              <label htmlFor="message">
                Message: <textarea name="message" id="message" />
              </label>
            </div>
            <div className="contact__button">
              <button type="submit">
                <EmailIcon />
                <p>Email Me</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
