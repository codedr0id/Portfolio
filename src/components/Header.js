import React, { Component } from 'react';
import '../scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header__heading">Mehul Lathi</h1>
        <h2 className="Header__sub-heading">Web Developer and a Tech Geek 💻</h2>
        <a className="cta" href="#about">
          Know more about me
        </a>
      </header>
    );
  }
}

export default Header;