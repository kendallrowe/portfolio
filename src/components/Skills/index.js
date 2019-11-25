import React from 'react';

import { faReact } from '@fortawesome/free-brands-svg-icons'

import "./index.scss";
import Badge from "./Badge";

function Skills() {

  return (
    <section id="skills" className="wow fadeIn">
      <h2>Skills</h2>
      <Badge iconType={faReact}/>
    </section>
  );
}

export default Skills;