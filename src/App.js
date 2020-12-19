import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsContainer from './components/ProjectsContainer';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        <ProjectsContainer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
