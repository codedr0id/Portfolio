import React, { Component } from "react";
import Project from "./Project";
// import './ProjectsContainer.scss';
import placeholderIcon from "../img/logo.png";

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: "AlgoLizer",
        img: placeholderIcon,
        description: "Your friendly Algorithm Visualizer",
        tech: ["HTML", "CSS", "React"],
        previewUrl: "https://algolizer.vercel.app",
        sourceUrl: "https://github.com/codedr0id/AlgoLizer",
      },
      {
        title: "Roshambo",
        img: placeholderIcon,
        description: "A Stone-Paper-Scissors game",
        tech: ["HTML", "SCSS", "React"],
        previewUrl: "https://roshambo-game.vercel.app/",
        sourceUrl: "https://github.com/codedr0id/Roshambo",
      },
    ],
  };

  render() {
    const projectList = this.props.projects.map((proj) => (
      <Project
        key={proj.title}
        title={proj.title}
        img={proj.img}
        description={proj.description}
        tech={proj.tech.map((t, idx) => (
          <li key={idx}>{t}</li>
        ))}
        previewUrl={proj.previewUrl}
        sourceUrl={proj.sourceUrl}
      />
    ));

    return (
      <section className="ProjectsContainer" id="projects">
        <h2 className="section-title">Projects</h2>

        <ul className="ProjectsContainer__list">{projectList}</ul>
      </section>
    );
  }
}

export default ProjectsContainer;
