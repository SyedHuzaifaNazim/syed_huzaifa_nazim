import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  );
}

export default App;