import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectsContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Header />
      </Element>
      <main>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <ProjectsContainer />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  );
}

export default App;
