import React, { Component } from 'react';
import '../scss/Contact.scss';

class Contact extends Component {
  static defaultProps = {
    contact: [
      { label: 'Email', link: 'mehullathi1999@gmail.com', icon: 'temp' },
      { label: 'Github', link: 'https://github.com/codedr0id', icon: 'devicon-github-plain' },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mehul-lathi-3019a41b0/',
        icon: 'devicon-linkedin-plain'
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/mehullathi',
        icon: 'devicon-twitter-plain'
      }
    ]
  };

  showList(arr) {
    const list = [];
    for (let item of arr) {
      list.push(
        <li key={item.label} className="Contact__item">
          <i className={item.icon}> </i>
          {item.label}
        </li>
      );
    }
    return list;
  }

  render() {
    return (
      <section className="Contact">
        <h1 className="section-title">Contact</h1>
        <ul className="Contact__list">{this.showList(this.props.contact)}</ul>
      </section>
    );
  }
}

export default Contact;