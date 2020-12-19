import React, { Component } from 'react';
import { displayList } from './helpers';
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

  render() {
    return (
      <section className="Skills" id="skills">
        <h2 className="section-title">Skills</h2>

        <section className="Skills__container">
        <h3 className="Skills__heading">Development</h3>
          <ul className="Skills__list">{displayList(this.props.dev, 'Skills')}</ul>
        </section>

        <section className="Skills__container">
        <h3 className="Skills__heading">Tools</h3>
          <ul className="Skills__list">{displayList(this.props.tools, 'Skills')}</ul>
        </section>
      </section>
    );
  }
}

export default Skills;