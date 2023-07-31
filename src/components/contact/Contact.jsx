import React from 'react';
import ContactLeft from './ContactLeft';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__wrapper">
        <div className="contact__container">
          <ContactLeft />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
