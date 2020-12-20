import React from 'react';
// import { Switch, Route } from 'react-router-dom';
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

      {/* <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={ProjectsContainer} />
        <Route exact path="/contact" component={Contact} />
      </Switch> */}
      
      <Footer />
    </div>
  );
}

export default App;
