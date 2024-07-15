import React, { Component } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectsContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

// Vercel Analytics
import { inject } from '@vercel/analytics';

// Import SpeedInsights component
import { SpeedInsights } from '@vercel/speed-insights/react';

// devicons
import "../node_modules/devicon/devicon.min.css";

import "./App.scss";

// Call inject() to add Vercel Analytics tracking script
inject();

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.isLoading = setTimeout(() => {
      this.setState({ loading: false });
    }, 2200);
  }

  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  render() {
    const { loading } = this.state;
    return loading ? (
      <Preloader />
    ) : (
      <React.Fragment>
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
        {/* Include SpeedInsights component here */}
        <SpeedInsights />
      </React.Fragment>
    );
  }
}

export default App;