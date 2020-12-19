import React, { Component } from 'react';
import '../scss/Project.scss';

class Project extends Component {
  render() {
    return (
      <li className="Project">
        <figure className="Project__img">
          <img src={this.props.img} alt={this.props.title} />
        </figure>

        <div className="Project__details">
          <h3 className="Project__title">{this.props.title}</h3>
          <p className="Project__description">{this.props.description}</p>

          <div className="Project__links">
            <a href={this.props.prevLink} target="_blank" className="cta">
              See Live
            </a>
            <a href={this.props.sourceLink} target="_blank" className="cta">
              Source Code
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default Project;