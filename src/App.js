import React from 'react';

import "./App.scss";

import Header from "./components/Header"
import About from "./components/About/index";
import Skills from "./components/Skills/index";

function App() {
  return (
    <div className="App">
      
      <Header/>
      <About/>
      <Skills/>
      <div id="projects"><h2>Projects</h2></div>
    </div>
  );
}

export default App;
