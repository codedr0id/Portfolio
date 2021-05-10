import React, { Component } from "react";
import { Link } from "react-scroll";
import "../scss/Navbar.scss";
import logo from "../img/logo.png";

class Navbar extends Component {
  static defaultProps = {
    links: ["About", "Skills", "Projects", "Contact"],
  };

  constructor(props) {
    super(props);
    this.state = { navIcon: "bars" };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    const navList = document.querySelector(".Navbar__list");
    navList.classList.toggle("active");

    navList.classList.contains("active")
      ? this.setState({ navIcon: "times" })
      : this.setState({ navIcon: "bars" });
  }

  render() {
    const navList = document.querySelector(".Navbar__list");

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
          onClick={this.toggleNav}
        >
          {link}
        </Link>
      </li>
    ));

    return (
      <nav className="Navbar">
        <Link
          activeClass="active-section"
          className="Navbar__logo-link"
          to="home"
          offset={-150}
          spy={true}
          smooth={true}
          duration={1000}
        >
          <img className="Navbar__logo" src={logo} alt="logo" />
          {/* <h3>Mehul Lathi</h3> */}
        </Link>

        {/* for hamburger */}
        <button className="toggle-nav" onClick={this.toggleNav}>
          <i className={`fas fa-${this.state.navIcon}`}></i>
        </button>

        <ul className="Navbar__list">
          {navLinks}
          <button className="btn-dark-mode">DARK</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
