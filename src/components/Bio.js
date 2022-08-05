import React from "react";
import "../App.css";
import profilePic from "../assets/profile.png";
import htmlLogo from "../assets/logos/html.png";
import cssLogo from "../assets/logos/css.png";
import jsLogo from "../assets/logos/javascript.jpg";
import sassLogo from "../assets/logos/sass.png";

import { FaReact } from "react-icons/fa";

function Bio() {
  return (
    <div className="bio-container">
      <h2>Thomas J Laud</h2>
      <div className="profile-pic">
        <img src={profilePic} alt="profile" />
      </div>

      <p>
        I'm Thomas Laud and I'm a front-end developer living in Hampshire. I
        have served in the military as a Weapons Systems Operator on the Chinook
        helicopter. After nearly 15 years of operational service I made the,
        quite significant, career change into web development. <br></br>
        <br></br> I have experience working with the following languages,
        frameworks and libraries:
      </p>
      <aside className="logo-bar">
        <img src={htmlLogo} alt="html logo" title="HTML 5" />
        <img src={cssLogo} alt="css logo" title="CSS 3" />
        <img src={jsLogo} alt="javascript logo" title="JavaScript ES6" />
        <FaReact className="bio-logo" title="React"></FaReact>
        <img src={sassLogo} alt="sass logo" title="Sass" />
      </aside>
    </div>
  );
}

export default Bio;
