import React from "react";
import "../scss/About.scss";
import aboutPhoto from "../img/Mehul.jpg";

const About = () => {
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
            Hello! I'm <span className="highlight">Mehul Lathi</span>, a
            Software Engineer with 3 years of experience in digital transformation
            and UPI technologies. I graduated from 
            <span className="highlight"> Indian Institute of Information Technology - Vadodara </span> 
            with a B.Tech in Computer Science & Engineering.
          </p>

          <p>
            Currently, I'm working at <span className="highlight">Paytm Payments Bank</span>,
            where I've been instrumental in developing cutting-edge fintech solutions.
            My expertise lies in optimizing transaction processing, architecting
            scalable microservices, and implementing robust monitoring solutions.
          </p>

          <p>
            <span className="highlight">Key Skills & Technologies:</span>
            <ul>
              <li>⭐ Java & Spring Boot</li>
              <li>⭐ Microservices Architecture</li>
              <li>⭐ UPI & Payment Systems</li>
              <li>⭐ Event-driven Architecture</li>
              <li>⭐ RESTful APIs</li>
              <li>⭐ MySQL & ElasticSearch</li>
            </ul>
          </p>

          <p>
            I'm passionate about enhancing system performance and streamlining
            organizational processes in fast-paced fintech environments. My recent
            work includes spearheading the development of NPCI's Lite Autopay, a
            revolutionary product in the UPI ecosystem.
          </p>

          <a
            href="https://bit.ly/mehul_resume"
            target="_blank"
            rel="noreferrer"
            className="cta"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;