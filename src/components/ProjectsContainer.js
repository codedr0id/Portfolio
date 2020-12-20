import React, { Component } from 'react';
import Project from './Project';
// import './ProjectsContainer.scss';
import placeholderIcon from '../img/Mehul.png';

class ProjectsContainer extends Component {
  static defaultProps = {
    projects: [
      {
        title: 'AlgoLizer',
        img: placeholderIcon,
        description: 'Your friendly Algorithm Visualizer',
        tech: ['HTML', 'CSS', 'React'],
        prevLink: 'https://algolizer.vercel.app',
        sourceLink: 'https://github.com/codedr0id/AlgoLizer'
      },
      {
        title: 'Roshambo',
        img: placeholderIcon,
        description:
          'A Stone-Paper-Scissors game',
        tech: ['HTML', 'SCSS', 'React'],
        prevLink: 'https://roshambo-game.vercel.app/',
        sourceLink: 'https://github.com/codedr0id/Roshambo'
      }
    ]
  };

  render() {
    const projectList = this.props.projects.map(proj => (
      <li key={proj.name}>
        <Project
          title={proj.title}
          img={proj.img}
          description={proj.description}
          tech={proj.tech.map(t => (
            <li>{t}</li>
          ))}
          prevLink={proj.prevLink}
          sourceLink={proj.sourceLink}
        />
      </li>
    ));

    return (
      <section className="ProjectsContainer" id="projects">
        <h2 className="section-title">
          Projects
        </h2>

        <ul className="ProjectsContainer__list">{projectList}</ul>
      </section>
    );
  }
}

export default ProjectsContainer;