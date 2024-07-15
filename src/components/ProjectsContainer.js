import React, { Component } from "react";
import Project from "./Project";
import algolizer from "../img/projects/algolizer.png";
import portfolio from "../img/projects/portfolio.png";

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: "AlgoLizer",
        img: algolizer,
        description: "Interactive web application visualizing 10+ sorting and pathfinding algorithms, enhancing algorithm comprehension for 500+ users.",
        tech: ["JavaScript", "React", "CSS"],
        previewUrl: "https://algolizer.vercel.app",
        sourceUrl: "https://github.com/codedr0id/AlgoLizer",
      },
      {
        title: "My Portfolio",
        img: portfolio,
        description: "Responsive personal portfolio showcasing projects and skills, built with modern web technologies and optimized for performance.",
        tech: ["React", "Tailwind CSS", "Vercel"],
        previewUrl: "https://mehullathi.vercel.app",
        sourceUrl: "https://github.com/codedr0id/Portfolio",
      },
      {
        title: "Lite Autopay (NPCI)",
        img: null, // No image available
        description: "Pioneered NPCI's cutting-edge UPI product for recurring micropayments up to ₹2000. Engineered a hyper-scalable system processing 1000+ TPS, featuring zero-click e-mandate flow and real-time webhooks with sub-second latency.",
        tech: ["Event-driven Architecture", "Domain-driven Design", "UPI 2.0", "Java", "Spring Boot"],
        previewUrl: null, // No preview available for internal product
        sourceUrl: null, // No source code available for internal product
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