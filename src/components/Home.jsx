import React from 'react';
import scrollToId from '../utils/scrollToId';

const Home = () => (
  <section id="home" className="home">
    <div className="home__wrapper">
      <div className="home__container">
        <div />
        <div className="home__header">
          <h1>Adolfo Herrera</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="home__bottom">
          <div className="home__description">
            <p>
              I bring designs to life by creating responsive, user-friendly
              websites
            </p>
          </div>
          <div className="home__button">
            <button type="button" onClick={() => scrollToId('aboutme')}>
              Find out More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
