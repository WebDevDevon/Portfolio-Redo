import './App.css';
import React from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className='bg-[#030406]'>
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <NavBar />
      <ScrollToTop smooth color="#12ebcb" />
    </div>
  );
}

export default App;
