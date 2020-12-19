import React, { Component } from 'react';
import Project from './Project';
// import './ProjectsContainer.scss';
import placeholderIcon from '../img/Mehul.png';

class ProjectsContainer extends Component {
  render() {
    return (
      <section className="ProjectsContainer" id="projects">
        <h1 className="section-title">Projects</h1>

        <ul className="ProjectsContainer__list">
          <Project
            title="Project 1"
            img={placeholderIcon}
            description="test"
            prevLink="#"
            sourceLink="#"
          />

          <Project
            title="Project 2"
            img={placeholderIcon}
            description="test"
            prevLink="#"
            sourceLink="#"
          />
        </ul>
      </section>
    );
  }
}

export default ProjectsContainer;