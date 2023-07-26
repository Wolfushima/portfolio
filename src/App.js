import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
