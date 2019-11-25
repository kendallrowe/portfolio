import React from 'react';

import { faReact } from '@fortawesome/free-brands-svg-icons'

import "./index.scss";
import Badge from "./Badge";

function Skills({ selectSkill }) {

  return (
    <section id="skills" className="wow fadeIn">
      <h2>Skills</h2>
      <div className="skill-badge-container">
        <Badge iconType={faReact} onClick={e => selectSkill("React")}/>
        {/* <Badge iconType={faReact}/> */}
      </div>
    </section>
  );
}

export default Skills;