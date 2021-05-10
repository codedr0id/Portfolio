import React, { Component } from "react";
import "../scss/About.scss";
import aboutPhoto from "../img/Mehul.jpg";

class About extends Component {
  render() {
    return (
      <section style={{ marginTop: "20px" }} className="About" id="about">
        <h2 className="section-title">Get to know me</h2>

        <div className="About__container">
          <picture className="About__photo-container">
            <source srcSet={aboutPhoto} media="(max-width: 1100px)" />
            <img src={aboutPhoto} alt="Mehul Lathi" className="About__photo" />
          </picture>

          <div className="About__description">
            <p>
              My name is <span className="highlight">Mehul Lathi</span> and I'm
              a Pre-Final year student at 𝐈𝐈𝐈𝐓 𝐕𝐚𝐝𝐨𝐝𝐚𝐫𝐚 currently pursuing my
              𝘉𝘢𝘤𝘩𝘦𝘭𝘰𝘳𝘴 𝘪𝘯 𝘊𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘚𝘤𝘪𝘦𝘯𝘤𝘦. I have an experience developing 💧
              Fluid websites and 💻 Web Applications.
            </p>

            <p>
              <span className="highlight">Technologies</span> I use and
              constantly work on :-
              <ul>
                <li style={{ listStyle: "none" }}>⭐ ReactJS</li>
                <li style={{ listStyle: "none" }}>
                  ⭐ Javascript (ES6 and above)
                </li>
                <li style={{ listStyle: "none" }}>⭐ NodeJS </li>
                <li style={{ listStyle: "none" }}>⭐ MongoDB</li>
                <li style={{ listStyle: "none" }}>⭐ Firebase </li>
              </ul>
            </p>

            <p>
              🤞 𝐈 𝐚𝐦 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐥𝐨𝐨𝐤𝐢𝐧𝐠 𝐟𝐨𝐫 𝐈𝐧𝐭𝐞𝐫𝐧 𝐎𝐩𝐩𝐨𝐫𝐭𝐮𝐧𝐢𝐭𝐢𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐫𝐨𝐥𝐞 𝐨𝐟
              𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞/𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐚𝐧𝐝 𝐃𝐞𝐬𝐢𝐠𝐧.
            </p>

            <a href="#" className="cta">
              Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
