import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { scrollWithOffset } from './helpers';
import '../scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="Header__heading">Mehul Lathi</h1>
        <h2 className="Header__sub-heading">Web Developer and a Tech Geek 💻</h2>
        <HashLink className="cta" smooth scroll={scrollWithOffset} to="#about">
          Know more about me
        </HashLink>
      </header>
    );
  }
}

export default Header;