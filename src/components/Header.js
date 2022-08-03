import React from "react";
import "../App.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="header-bar">
        <h1>T J LAUD</h1>
        <ul className="header-list">
          <li>
            <a
              href="mailto:tjlaud@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="TJLaud Email Address"
            >
              <MdOutlineMailOutline className="header-icon"></MdOutlineMailOutline>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tjlaud"
              target="_blank"
              rel="noopener noreferrer"
              title="TJLaud GitHub"
            >
              <FaGithub className="header-icon"></FaGithub>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
