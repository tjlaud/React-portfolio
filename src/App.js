import React from "react";
import "./App.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="body-container">
        <Bio></Bio>

        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
