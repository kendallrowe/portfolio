import React from 'react';

import "./Nav.scss";

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#about">Profile</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Nav;