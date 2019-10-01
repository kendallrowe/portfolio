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
        <div className="contrast-container"/>
      </header>
    </div>
  );
}

export default App;
