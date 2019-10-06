import React, { useEffect } from 'react';
import * as THREE from 'three';

import AboutCube from "./about-cube";

import "./index.scss";

function About() {

  return (
    <div id="about">
      <div className="aboutKendall">

      </div>
      <AboutCube/>
    </div>
  );
}

export default About;