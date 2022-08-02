import React from "react";
import "../App.css";
import battProject from "../assets/batt.png";
import cssProject from "../assets/css.png";
import sleepProject from "../assets/sleeptracker.png";
import peaProject from "../assets/peashooter.png";
import pigProject from "../assets/pig.png";
import starProject from "../assets/stargame.png";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Projects() {
  return (
    <div className="projects-container">
      <div>
        <h4>The "Pig" Game</h4>
        <div className="project-embedded-div">
          <img src={pigProject} alt="my pig project" />
          <div>
            <FaGithub className="project-embedded-link"></FaGithub>
            <MdOutlineMailOutline className="project-embedded-link"></MdOutlineMailOutline>
          </div>
        </div>

        <p>
          A dice rolling game. Two versions are available one in vanilla Js and
          one built with React.
        </p>
      </div>
      <div>
        <h4>React App Sleep Tracker</h4>
        <img src={sleepProject} alt="Sleep Tracker App" />
        <p>A React App for tracking Sleep. A practical UI.</p>
      </div>
      <div>
        <h4>The "Pea Shooter" Game</h4>
        <img src={peaProject} alt="my blocks game project" />
        <p>A blocks game built with HTML Canvas.</p>
      </div>
      <div>
        <h4>The "Star" Game</h4>
        <img src={starProject} alt="my Star Game project" />
        <p>A game built in React</p>
      </div>
      <div>
        <h4>CSS Project</h4>
        <img src={cssProject} alt="my CSS project" />
        <p>A functional experiment with CSS.</p>
      </div>
      <div>
        <h4>Battery Calculator</h4>
        <img src={battProject} alt="my CSS project" />
        <p>Two version, React and JS, of a Battery Degrade Calculator.</p>
      </div>
    </div>
  );
}
export default Projects;
