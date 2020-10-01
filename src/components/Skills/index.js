import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

import { faGem } from "@fortawesome/free-solid-svg-icons"
import { faReact, faPython, faNodeJs, faGitSquare, faJsSquare, faHtml5, faCss3Alt, faNode, faCss3 } from "@fortawesome/free-brands-svg-icons"

import "./index.scss";
import Badge from "./Badge";

const classNames = require("classnames");

function Skills({ skills, selectSkill }) {

  const numberOfSkills = 8

  const allSelected = skills.length === numberOfSkills;

  const percentSelected = Math.round(skills.length / 8 * 100);

  const progressStyle = allSelected ? "success" : "info";

  const resumeClasses = classNames("resume-link", {
    "resume-link--visible": allSelected
  });

  const skillList = [
    { label: "JavaScript", icon: faJsSquare },
    { label: "Python", icon: faPython },
    { label: "Ruby", icon: faGem },
    { label: "React", icon: faReact },
    { label: "HTML5", icon: faHtml5 },
    { label: "CSS3", icon: faCss3Alt },
    { label: "Git", icon: faGitSquare },
    { label: "Node", icon: faNodeJs }
  ];

  const halfSkillLength = Math.round(skillList.length / 2)

  const skillBadgeComponents = skillList.map((skill, index) => {
    return <Badge 
      key={skill.label}
      iconType={skill.icon}
      allSelected={allSelected}
      onClick={e => selectSkill(skill.label)}
      label={skill.label}
      evenIndex={index % 2 === 0}
      selected={skills.indexOf(skill.label) !== -1}
    />
  });

  return (
    <section id="skills" className="wow fadeIn">
      <h2>Skills</h2>
      <div className="skill-badge-container">
        {skillBadgeComponents.slice(0, halfSkillLength)}
      </div>
      <div className="skill-badge-container">
      {skillBadgeComponents.slice(halfSkillLength)}
      </div>
      <div id="progress-container">
        <ProgressBar variant={progressStyle} now={percentSelected} />
      </div>
      <a className={resumeClasses} href="#resume">Resume</a>
    </section>
  );
}

export default Skills;