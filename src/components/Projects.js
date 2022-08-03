import React from "react";
import "../App.css";
import battProject from "../assets/batt.png";
import cssProject from "../assets/css.png";
import sleepProject from "../assets/sleeptracker.png";
import peaProject from "../assets/peashooter.png";
import pigProject from "../assets/pig.png";
import starProject from "../assets/stargame.png";
import { FaGithub, FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

function Projects() {
  return (
    <div className="projects-container">
      <div>
        <h4>The Sleep App</h4>
        <div className="project-embedded-div">
          <img src={sleepProject} alt="my sleep project" />
          <div>
            <a
              href="https://sleepappreact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Sleep App (React)"
            >
              <FaReact className="project-embedded-link"></FaReact>
            </a>
            <a
              href="https://github.com/tjlaud/React-App-Sleep-Tracker"
              target="_blank"
              rel="noopener noreferrer"
              title="Sleep App (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>
          A React App to track sleep hours. An exercise in building a functional
          UI. Using React, Material UI and SCSS.
        </p>
      </div>

      <div>
        <h4>The Pig Game</h4>
        <div className="project-embedded-div">
          <img src={pigProject} alt="my pig project" />
          <div>
            <a
              href="https://piggamereact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Pig Game (React)"
            >
              <FaReact className="project-embedded-link"></FaReact>
            </a>
            <a
              href="https://piggamebasic.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Pig Game (Vanilla)"
            >
              <GoBrowser className="project-embedded-link"></GoBrowser>
            </a>
            <a
              href="https://github.com/tjlaud/React-exercise-Pig-game"
              target="_blank"
              rel="noopener noreferrer"
              title="Pig Game (React) (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
            <a
              href="https://github.com/tjlaud/Pig-game"
              target="_blank"
              rel="noopener noreferrer"
              title="Pig Game (Vanilla) (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>
          A dice rolling game. Two versions are available one in vanilla JS and
          one built with React.
        </p>
      </div>

      <div>
        <h4>The Blocks Game</h4>
        <div className="project-embedded-div">
          <img src={peaProject} alt="my blocks project" />
          <div>
            <a
              href="https://peashooter.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Blocks Game"
            >
              <GoBrowser className="project-embedded-link"></GoBrowser>
            </a>
            <a
              href="https://github.com/tjlaud/Pea-Shooter-Game"
              target="_blank"
              rel="noopener noreferrer"
              title="Blocks Game (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>A break out game built in HTML Canvas.</p>
      </div>

      <div>
        <h4>The CSS Test Page</h4>
        <div className="project-embedded-div">
          <img src={cssProject} alt="my css project" />
          <div>
            <a
              href="https://cssnavgridflex.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="CSS Project"
            >
              <GoBrowser className="project-embedded-link"></GoBrowser>
            </a>
            <a
              href="https://github.com/tjlaud/css-nav-grid-flex"
              target="_blank"
              rel="noopener noreferrer"
              title="CSS Project (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>A single page used to test various elements of CSS.</p>
      </div>

      <div>
        <h4>The Star Countdown Game</h4>
        <div className="project-embedded-div">
          <img src={starProject} alt="my star game" />
          <div>
            <a
              href="https://stargamereact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Star Game (React)"
            >
              <FaReact className="project-embedded-link"></FaReact>
            </a>
            <a
              href="https://github.com/tjlaud/React-exercise-Star-Game"
              target="_blank"
              rel="noopener noreferrer"
              title="Star Game (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>A counting game built with React.</p>
      </div>

      <div>
        <h4>The Battery Calculator</h4>
        <div className="project-embedded-div">
          <img src={battProject} alt="my battery calc project" />
          <div>
            <a
              href="https://battcalcgenreact.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Battery Calc (React)"
            >
              <FaReact className="project-embedded-link"></FaReact>
            </a>
            <a
              href="https://battcalcgenbasic.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Battery Calc (Vanilla)"
            >
              <GoBrowser className="project-embedded-link"></GoBrowser>
            </a>
            <a
              href="https://github.com/tjlaud/React-App-Battery-Life-Calculator"
              target="_blank"
              rel="noopener noreferrer"
              title="Battery Calc (React) (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
            <a
              href="https://github.com/tjlaud/Battery-Life-Calculator"
              target="_blank"
              rel="noopener noreferrer"
              title="Battery Calc (Vanilla) (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>
          A simple calculator used to determine the life of a battery. Two
          versions are available one in vanilla JS and one built with React.
        </p>
      </div>
    </div>
  );
}
export default Projects;
