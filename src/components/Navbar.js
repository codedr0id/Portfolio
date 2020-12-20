import React, { Component } from 'react';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import '../scss/Navbar.scss';
import logo from '../img/Mehul.png';

class Navbar extends Component {
  static defaultProps = {
    links: ['About', 'Skills', 'Projects', 'Contact']
  };

  render() {
    const scrollWithOffset = el => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -80;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    const navLinks = this.props.links.map(link => (
      <li key={link} className="Navbar__item">
        <NavHashLink
          className="Navbar__link"
          // activeClassName="active-link"
          activeStyle={{ color: '#ed6a5a' }}
          smooth
          scroll={scrollWithOffset}
          to={`#${link.toLowerCase()}`}
        >
          {link}
        </NavHashLink>
      </li>
    ));

    return (
      <nav className="Navbar">
        <HashLink className="Navbar__logo-container Navbar__link" smooth to="#home">
          <img className="Navbar__logo" src={logo} alt="logo" />
          {/* <h3>Mehul Lathi</h3> */}
        </HashLink>

        <ul className="Navbar__list">{navLinks}</ul>

        <button className="btn-dark-mode">DARK</button>
      </nav>
    );
  }
}

export default Navbar;