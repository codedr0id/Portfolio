import React, { Component } from "react";
import "../scss/Contact.scss";
import { ReactComponent as ContactBg } from "../img/svg/contact-bg.svg";
import { displayList } from "./helpers";

class Contact extends Component {
  static defaultProps = {
    contact: [
      {
        label: "Email",
        link: "mailto:mehullathi1999@gmail.com",
        icon: "fas fa-envelope-square",
      },
      {
        label: "GitHub",
        link: "https://github.com/codedr0id",
        icon: "fab fa-github",
      },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/mehul-lathi/",
        icon: "fab fa-linkedin",
      },
      {
        label: "Instagram",
        link: "https://www.instagram.com/lathi_saab/",
        icon: "fab fa-instagram",
      },
    ],
  };

  render() {
    return (
      <section className="Contact" id="contact">
        <h2 className="section-title" data-title="Contact">
          Get in touch
        </h2>

        <div className="Contact__container">
          <p className="Contact__text">
            ⏩ Think we should work together? Reach out to me at
          </p>

          <ul className="Contact__list">
            {displayList(this.props.contact, "Contact")}
          </ul>
        </div>

        <ContactBg />
      </section>
    );
  }
}

export default Contact;
