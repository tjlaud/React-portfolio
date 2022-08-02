import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <div className="header-bar">
        <h1>T J LAUD</h1>
        <ul className="header-icons">
          <li>
            <a
              href="mailto:tjlaud@hotmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="Icons/email.svg" alt="icon-email" />
            </a>
          </li>
          <li class="landing-icon-list">
            <a
              href="https://github.com/tjlaud"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="Icons/github-white.svg" alt="icon-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
