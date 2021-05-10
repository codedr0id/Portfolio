import React, { Component } from "react";
import { Link } from "react-scroll";
import "../scss/Navbar.scss";
import logo from "../img/logo.png";
import { ReactComponent as Sun } from "../img/svg/sun.svg";
import { ReactComponent as Moon } from "../img/svg/moon.svg";

class Navbar extends Component {
  static defaultProps = {
    links: ["About", "Skills", "Projects", "Contact"],
  };

  constructor(props) {
    super(props);
    this.state = {
      navIcon: "bars",
      darkMode: false,
      darkModeIcon: <Sun ref={this.svgRef} />,
    };

    this.svgRef = React.createRef();
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleNav() {
    const navList = document.querySelector(".Navbar__list");
    navList.classList.toggle("active");

    navList.classList.contains("active")
      ? this.setState({ navIcon: "times" })
      : this.setState({ navIcon: "bars" });
  }

  toggleDarkMode() {
    const app = document.querySelector(".App");
    this.setState({ darkMode: !this.state.darkMode });

    if (!this.state.darkMode) {
      app.classList.add("dark-mode");
      this.setState({ darkModeIcon: <Moon ref={this.svgRef} /> });
    } else {
      app.classList.remove("dark-mode");
      this.setState({ darkModeIcon: <Sun ref={this.svgRef} /> });
    }
  }

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
          <picture className="Navbar__logo-container">
            <source srcSet={logo} media="(max-width: 600px)" />
            <img className="Navbar__logo" src={logo} alt="logo" />
          </picture>
        </Link>

        {/* for hamburger */}
        <button className="toggle-nav" onClick={this.toggleNav}>
          <i className={`fas fa-${this.state.navIcon}`}></i>
        </button>

        <ul className="Navbar__list">
          {navLinks}
          <button className="btn-dark-mode" onClick={this.toggleDarkMode}>
            {this.state.darkModeIcon}
          </button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
