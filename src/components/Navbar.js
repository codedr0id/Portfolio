import React, { Component } from "react";
// import { NavHashLink, HashLink } from 'react-router-hash-link';
// import { scrollWithOffset } from './helpers';
import { Link } from "react-scroll";
import "../scss/Navbar.scss";
import logo from "../img/Mehul.png";

class Navbar extends Component {
  static defaultProps = {
    links: ["About", "Skills", "Projects", "Contact"],
  };

  render() {
    const navLinks = this.props.links.map((link) => (
      <li key={link} className="Navbar__item">
        <Link
          activeClass="active-section"
          className="Navbar__link"
          to={link.toLowerCase()}
          offset={-150}
          spy={true}
          smooth={true}
          duration={1000}
        >
          {link}
        </Link>
      </li>
    ));

    return (
      <nav className="Navbar">
        <Link
          activeClass="active-section"
          className="Navbar__logo-container Navbar__link"
          to="home"
          offset={-150}
          spy={true}
          smooth={true}
          duration={1000}
        >
          <img className="Navbar__logo" src={logo} alt="logo" />
          {/* <h3>Mehul Lathi</h3> */}
        </Link>

        <ul className="Navbar__list">{navLinks}</ul>

        <button className="btn-dark-mode">DARK</button>
      </nav>
    );
  }
}

export default Navbar;
