import React from 'react';
import { ReactComponent as EmailIcon } from '../../assets/contact/email-icon.svg';

const ContactForm = () => (
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
);

export default ContactForm;
