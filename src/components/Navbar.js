import React, { Component } from 'react';
import Navlink from './Navlink';
import '../scss/Navbar.scss';
import logo from '../img/Mehul.png';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  // create nav links to display
  makeNavLinks() {
    let navLinks = [];
    for (let link of this.props.links) {
      navLinks.push(
        <li key={link} className="Navbar__item">
          <Navlink text={link} href={`#${link.toLowerCase()}`} />
        </li>
      );
    }
    return navLinks;
  }

  render() {
    return (
      <nav className="Navbar">
        <div className="Navbar__logo-container">
          <a href="#home">
            <img className="Navbar__logo" src={logo} alt="logo" />
            <h3>Mehul Lathi</h3>
          </a>
        </div>

        <ul className="Navbar__list">{this.makeNavLinks()}</ul>

        <button className="btn-dark-mode">DARK</button>
      </nav>
    );
  }
}

export default Navbar;