import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from "./helpers";
import NET from "vanta/dist/vanta.net.min";
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
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf23370,
        backgroundColor: 0x2f2f39,
        points: 13.0,
        maxDistance: 25.0,
        spacing: 19.0,
      });
    } else {
      this.vantaEffect = BIRDS({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        birdSize: 1.1,
        wingSpan: 18.0,
        separation: 50.0,
        quantity: 4.0,
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
            Web Developer and a Tech Geek 💻
          </p>
          <HashLink
            className="cta"
            smooth
            scroll={scrollWithOffset}
            to="#about"
          >
            Know more about me
          </HashLink>
        </header>
      </div>
    );
  }
}

export default Header;
