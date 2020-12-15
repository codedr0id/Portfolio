import React, { Component } from 'react';
import '../scss/Navlink.scss';

class Navlink extends Component {
  render() {
    return (
      <a className="Navlink" href={this.props.href}>
        {this.props.text}
      </a>
    );
  }
}

export default Navlink;