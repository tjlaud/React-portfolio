import React from "react";
import "../App.css";
import battProject from "../assets/batt.png";
import cssProject from "../assets/css.png";
import sleepProject from "../assets/sleeptracker.png";
import peaProject from "../assets/peashooter.png";
import pigProject from "../assets/pig.png";
import portfolioProject from "../assets/portfolio.png";
import { FaGithub, FaReact } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Portfolio</h2>
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
          A collaboration project between myself and a friend. Using React we
          built an App that will track sleeping hours. I used React, Material UI
          and SCSS to create the functioning UI framework.
        </p>
      </div>

      <div>
        <h4>Portfolio Web Page</h4>
        <div className="project-embedded-div">
          <img src={portfolioProject} alt="my portfolio page" />
          <div className="portfolio-gitHub-icon">
            <a
              href="https://github.com/tjlaud/React-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="My Portfolio (GitHub Repo)"
            >
              <FaGithub className="project-embedded-link"></FaGithub>
            </a>
          </div>
        </div>
        <p>
          The Portfolio web page you're currently viewing. Built from scratch
          with React. In hindsight I wish I had used SCSS for the styling.
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
        <p>
          A break out game built in HTML Canvas. After completing the basic game
          as part of a course I restyled the visuals, added sound effects, speed
          alterations to the ball and the ability to spin the ball with the
          paddle.
        </p>
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
        <p>A small project I built in order to test my knowledge of CSS.</p>
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
          Two versions of the same game. The pure JS version was built as part
          of a course. I then rebuilt the project in React from the ground up.
        </p>
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
          Built on request of an electrical engineer. A calculator used to
          determine the life of a battery. I built two versions from scratch,
          one in vanilla JS and one in React.
        </p>
      </div>
    </div>
  );
}
export default Projects;
