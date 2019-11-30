import React from 'react';

import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faReact, faPython, faNodeJs, faGitSquare, faJsSquare, faHtml5, faCss3Alt, faNode } from '@fortawesome/free-brands-svg-icons'

import "./index.scss";
import Badge from "./Badge";

const classNames = require('classnames');

function Skills({ skills, selectSkill }) {

  const allSelected = skills.length === 8;

  const resumeClasses = classNames("resume-link", {
    "resume-link--visible": allSelected
  });

  return (
    <section id="skills" className="wow fadeIn">
      <h2>Skills</h2>
      <div className="skill-badge-container">
        <Badge 
          iconType={faJsSquare}
          allSelected={allSelected}
          onClick={e => selectSkill("JavaScript")}
          label="JavaScript"
          selected={skills.indexOf("JavaScript") !== -1}/>
        <Badge 
          iconType={faPython}
          allSelected={allSelected}
          onClick={e => selectSkill("Python")}
          label="Python"
          selected={skills.indexOf("Python") !== -1}/>
        <Badge 
          iconType={faGem}
          allSelected={allSelected}
          onClick={e => selectSkill("Ruby")}
          label="Ruby"
          selected={skills.indexOf("Ruby") !== -1}/> 
        <Badge 
          iconType={faReact}
          allSelected={allSelected}
          onClick={e => selectSkill("React")}
          label="React"
          selected={skills.indexOf("React") !== -1}/>
      </div>
      <div className="skill-badge-container">
        <Badge 
          iconType={faHtml5}
          allSelected={allSelected}
          onClick={e => selectSkill("HTML5")}
          label="HTML5"
          selected={skills.indexOf("HTML5") !== -1}/>
        <Badge 
          iconType={faCss3Alt}
          allSelected={allSelected}
          onClick={e => selectSkill("CSS3")}
          label="CSS3"
          selected={skills.indexOf("CSS3") !== -1}/>
        <Badge 
          iconType={faGitSquare}
          allSelected={allSelected}
          onClick={e => selectSkill("Git")}
          label="Git"
          selected={skills.indexOf("Git") !== -1}/>
        <Badge 
          iconType={faNodeJs}
          allSelected={allSelected}
          onClick={e => selectSkill("Node")}
          label="Node"
          selected={skills.indexOf("Node") !== -1}/>
      </div>
      <a className={resumeClasses} href="#resume">Resume</a>
    </section>
  );
}

export default Skills;