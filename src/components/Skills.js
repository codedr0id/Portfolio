import React, { Component } from 'react';
import '../scss/Skills.scss';

class Skills extends Component {
  static defaultProps = {
    dev: [
      { label: 'HTML', icon: 'devicon-html5-plain' },
      { label: 'CSS', icon: 'devicon-css3-plain' },
      { label: 'Sass', icon: 'devicon-sass-original' },
      { label: 'JavaScript', icon: 'devicon-javascript-plain' },
      { label: 'React', icon: 'devicon-react-original' },
      { label: 'Node.js', icon: 'devicon-nodejs-plain' },
      { label: 'Python', icon: 'devicon-python-plain' },
      { label: 'Java', icon: 'devicon-java-plain' }
    ],
    tools: [
      { label: 'VS Code', icon: 'devicon-visualstudio-plain' },
      { label: 'Visual Studio', icon: 'devicon-visualstudio-plain' },
      { label: 'Git', icon: 'devicon-git-plain' },
      { label: 'Github', icon: 'devicon-github-plain' },
      { label: 'NPM', icon: 'devicon-npm-original-wordmark' },
    ]
  };

  showList(arr) {
    const list = [];
    for (let item of arr) {
      list.push(
        <li key={item.label} className="Skills__item">
          <i className={item.icon}> </i>
          {item.label}
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