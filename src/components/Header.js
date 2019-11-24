import React from 'react';

import "./Header.scss";
import Nav from "./Nav";

function Header() {

  return (
    <header>
      <Nav/>
      <div className="header-container">
        <h1>Kendall Rowe</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </header>
  );
}

export default Header;