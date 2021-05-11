import React, { Component } from "react";
import "../scss//Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <p className="Footer__copyright">
          &copy; 2021 <span>Mehul Lathi</span>
        </p>
        <p className="Footer__message">
          <strong className="Footer__bold">&lt;/&gt;</strong> with{" "}
          <span className="Footer__bold">🧡</span>
        </p>
      </footer>
    );
  }
}

export default Footer;
