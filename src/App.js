import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
      </main>
    </>
  );
}

export default App;
