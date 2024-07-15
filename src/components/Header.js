import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "./helpers";
import GLOBE from "vanta/dist/vanta.globe.min";
import BIRDS from "vanta/dist/vanta.birds.min";
import "../scss/Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    console.log("hi");
    if (window.localStorage.getItem("darkMode") === "true") {
      this.vantaEffect = GLOBE({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        size: 0.70
      });
    } else {
      this.vantaEffect = BIRDS({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        birdSize: 2,
        wingSpan: 25.0,
        separation: 50.0,
        quantity: 3.2,
        backgroundAlpha: 0.01,
      });
    }
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div ref={this.vantaRef}>
        <header className="Header">
          <h1 className="Header__heading">Mehul Lathi</h1>
          <p className="Header__sub-heading">
            Software Engineer 🧑🏻‍💻
          </p>
          <HashLink
            className="cta"
            smooth
            scroll={scrollWithOffset}
            to="#about"
          >
            Discover My Expertise
          </HashLink>
        </header>
      </div>
    );
  }
}

export default Header;