import React, { Component } from 'react';
import '../scss/About.scss';
import aboutPhoto from '../img/me-light.jpg';

class About extends Component {
  render() {
    return (
      <section className="About" id="about">
        <h1 className="section-title">About</h1>
	        <figure className="About__photo-container">
          <img src={aboutPhoto} alt="about photo" className="About__photo" />
        </figure>
        <div className="About__description">
          <p>
            My name is <span className="highlight">Mehul Lathi</span> and I'm an aspiring
            frontend developer living in Udaipur, Rajasthan. I am pursuing my Bachelor's degree in Computer
            Science at IIIT Vadodara and I am eager to start a career in web development.
          </p>

          <p>
            Duis lobortis gravida erat sed faucibus. Etiam eget sapien cursus, lobortis elit sed, mattis libero. Cras facilisis accumsan lacus. Etiam ut odio tempor, pretium libero at, commodo orci. Praesent vel massa est. Curabitur neque ex, placerat a tempus in, feugiat eu leo. Donec gravida consectetur cursus. Curabitur magna nibh, rhoncus et mollis nec, congue cursus arcu.
          </p>

          <p>
            Cras enim lacus, auctor eget leo ac, dictum elementum tortor. Donec vel posuere tortor, eget euismod nisl. Nullam ac justo eget libero tempus porta ut mollis massa. Sed feugiat ipsum at ullamcorper venenatis. Morbi id lobortis arcu. Sed luctus dui non diam maximus tincidunt. Integer ac erat tortor. Etiam tincidunt finibus ante et suscipit. Etiam tristique turpis sed pulvinar sagittis. Nullam et gravida lorem.
          </p>
        </div>
        <a href="#" className="cta">
          Resume
        </a>
      </section>
    );
  }
}

export default About;