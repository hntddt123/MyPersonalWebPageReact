import React from 'react';
import Skills from './Skills';
import Hobby from './Hobby';
import Mentors from './Mentors';

function AboutMe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3 id="AboutMe">👨‍💻 About Me</h3>
          <p>
            I am software developer and I like to know the logic behind the tech.
          </p>
          <p>
            75% of me is made out of code
          </p>
          <Skills />
        </div>
        <div className="col-md-4">
          <Hobby />
        </div>
        <div className="col-md-4">
          <Mentors />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
