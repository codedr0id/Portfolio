import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsContainer from "./components/ProjectsContainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

import "./App.scss";
class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.isLoading = setTimeout(() => {
      this.setState({ loading: false });
    }, 1800);
  }

  componentWillUnmount() {
    clearTimeout(this.isLoading);
  }

  // timer = () =>
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //   }, 3000);

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
      </React.Fragment>
    );
  }
}

export default App;
