import React, { Component } from 'react';
import '../scss/Contact.scss';
import { displayList } from './helpers';

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

  render() {
    return (
      <section className="Contact" id="contact">
        <h2 className="section-title">Contact</h2>
        <ul className="Contact__list">{displayList(this.props.contact, 'Contact')}</ul>
      </section>
    );
  }
}

export default Contact;