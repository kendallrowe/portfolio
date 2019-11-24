import React, { useEffect } from 'react';
import AboutCube from "./about-cube";

import "./index.scss";

function About() {

  return (
    <section id="about" className="wow bounceInUp">
      <div className="aboutKendall">
        <h2>About Me</h2>
        <p>A full stack developer with a background in business - as you can see I very literally think outside the box.</p>
        <p>Having graduated from Ryerson University with a Bachelor's of Commerce majoring in Economics and Management Science, I began my career as an Associate within TD Securities.</p>
        <p>After completing the esteemed two year Leadership Associate Program within Global Operations and Business Services, I decided to pursue my passion for code. After completing the program, I took a leave of absence to undertake the full stack web bootcamp at Lighthouse Labs in June 2019.</p>
        <p>I am now a Python developer at TD Securities, and have been trusted within a team of three to build </p>
      </div>
      <AboutCube/>
    </section>
  );
}

export default About;