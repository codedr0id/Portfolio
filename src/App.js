import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
