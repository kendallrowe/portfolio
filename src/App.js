import React from 'react';

import "./App.scss";

import { useApplicationData } from "./hooks/useApplicationData";
import Header from "./components/Header";
import About from "./components/About/index";
import Skills from "./components/Skills/index";

function App() {
  const { state, selectSkill, renderComplete } = useApplicationData();

  return (
    <div className="App">
      <Header/>
      <About rendered={state.rendered} renderComplete={renderComplete}/>
      <Skills skills={state.skills} selectSkill={skill => selectSkill(skill)}/>
    </div>
  );
}

export default App;
