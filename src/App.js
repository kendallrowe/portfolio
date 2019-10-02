import React from 'react';

import "./App.scss";

import Nav from "./components/Nav";
import About from "./components/About/index";

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
        <div className="header-container">
          <h1>Kendall Rowe</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </header>

      <About/>
      <div id="projects"><h2>Projects</h2></div>
    </div>
  );
}

export default App;
