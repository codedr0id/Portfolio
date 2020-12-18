import React, { Component } from 'react';
import '../scss/Skills.scss';

class Skills extends Component {
  static defaultProps = {
    dev: ['HTML', 'CSS', 'Sass', 'JavaScript', 'React', 'Node.js', 'Python', 'Java'],
    tools: ['VS Code', 'Visual Studio', 'Git', 'Github', 'NPM', 'Adobe XD']
  };

  showList(arr) {
    const list = [];
    for (let item of arr) {
      list.push(
        <li key={item} className="Skills__item">
          {item}
        </li>
      );
    }
    return list;
  }

  render() {
    return (
      <section className="Skills">
        <h1 className="section-title">Skills</h1>

        <section className="Skills__container">
          <h2 className="Skills__heading">Development</h2>
          <ul className="Skills__list">{this.showList(this.props.dev)}</ul>
        </section>

        <section className="Skills__container">
          <h2 className="Skills__heading">Tools</h2>
          <ul className="Skills__list">{this.showList(this.props.tools)}</ul>
        </section>
      </section>
    );
  }
}

export default Skills;