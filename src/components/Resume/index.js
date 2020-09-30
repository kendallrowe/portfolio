import React from "react";

import ResumeItem from "../ResumeItem/index";

import "./index.scss";

function Resume() {

  return (
    <section id="resume" className="wow fadeIn">
      <ResumeItem/>
      <ResumeItem/>
      <ResumeItem/>
    </section>
  );
};

export default Resume;