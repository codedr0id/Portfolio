import React, { Component } from "react";
import Project from "./Project";
import algolizer from "../img/projects/algolizer.png";
import roshambo from "../img/projects/roshambo.png";
import bloodbank from "../img/projects/blood-bank.png";
import portfolio from "../img/projects/portfolio.png";

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: "My Portfolio",
        img: portfolio,
        description: "You are looking at it right now 😁",
        tech: ["HTML", "SCSS", "React"],
        previewUrl: "https://mehullathi.vercel.app",
        sourceUrl: "https://github.com/codedr0id/Portfolio",
      },
      {
        title: "AlgoLizer",
        img: algolizer,
        description: "Your friendly Algorithm Visualizer 📊",
        tech: ["HTML", "CSS", "React"],
        previewUrl: "https://algolizer.vercel.app",
        sourceUrl: "https://github.com/codedr0id/AlgoLizer",
      },
      {
        title: "Roshambo",
        img: roshambo,
        description: "A Stone-Paper-Scissors game 🤘",
        tech: ["HTML", "SCSS", "React"],
        previewUrl: "https://roshambo-game.vercel.app/",
        sourceUrl: "https://github.com/codedr0id/Roshambo",
      },
      {
        title: "Blood Bank",
        img: bloodbank,
        description: "A Web App template for Blood Bank Organization 🩸",
        tech: ["HTML", "CSS", "Javascript"],
        previewUrl: "https://iiitbb.herokuapp.com/",
        sourceUrl: "https://github.com/codedr0id/Blood-bank",
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
        <h2 className="section-title" data-title="Projects">
          Projects I built
        </h2>

        <ul className="ProjectsContainer__list">{projectList}</ul>
      </section>
    );
  }
}

export default ProjectsContainer;
