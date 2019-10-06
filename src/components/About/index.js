import React, { useEffect } from 'react';
import AboutCube from "./about-cube";

import "./index.scss";

function About() {

  return (
    <div id="about">
      <div className="aboutKendall">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt quaerat vitae, cumque architecto placeat quia veniam id fuga corrupti quam atque quo, et fugit impedit, modi nihil voluptatum voluptatem.
        Quia, consequatur non. Veritatis sit libero rerum, perspiciatis nisi voluptatibus quae eligendi velit ullam dolorem quidem debitis nam aut impedit incidunt consequatur! Quae culpa cum dolore quibusdam obcaecati eius fuga!
        Consectetur atque maiores, praesentium ab voluptatibus maxime ipsa nostrum magni, tempora nihil accusantium animi nulla placeat laboriosam earum, soluta reprehenderit. Doloremque, quos possimus commodi dignissimos fugit repudiandae voluptatibus quam quod.</p>
      </div>
      <AboutCube/>
    </div>
  );
}

export default About;