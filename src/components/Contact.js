import React, { Component } from 'react';
import '../scss/Contact.scss';
import { displayList } from './helpers';

class Contact extends Component {
  static defaultProps = {
    contact: [
      { 
        label: 'Email',
        link: 'mailto:mehullathi1999@gmail.com',
        icon: 'fas fa-envelope-square'
      },
      { label: 'Github', link: 'https://github.com/codedr0id', icon: 'fab fa-github' },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mehul-lathi-3019a41b0/',
        icon: 'fab fa-linkedin'
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/mehullathi',
        icon: 'fab fa-twitter'
      }
    ]
  };

  render() {
    return (
      <section className="Contact" id="contact">
        <h2 className="section-title"  data-title="Contact">
          Contact
        </h2>

        <ul className="Contact__list">{displayList(this.props.contact, 'Contact')}</ul>
      </section>
    );
  }
}

export default Contact;