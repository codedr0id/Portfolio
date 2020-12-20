import React, { Component } from 'react';
import '../scss/Project.scss';

class Project extends Component {
  render() {
    const { title, img, description, tech, previewUrl, sourceUrl } = this.props;

    return (
      <li className="Project" key={title}>
        <figure className="Project__img">
          <img src={img} alt={title} />
        </figure>

        <div className="Project__details">
          <h3 className="Project__title">{title}</h3>
          <p className="Project__description">{description}</p>

          <ul>{tech}</ul>

          <div className="Project__links">
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="cta">
              See Live
            </a>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="cta">
              Source Code
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default Project;