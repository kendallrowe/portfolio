import React from 'react';

import "./App.scss";

import Nav from "./components/Nav";

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

      <div id="about"><h2>About</h2></div>
      <div id="projects"><h2>Projects</h2></div>
    </div>
  );
}

export default App;
