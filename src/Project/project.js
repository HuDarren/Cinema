import React from "react";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import "./project.css";

function Project() {
  return (
    <div id="project">
      <div className="project-container">
        <div className="project-title">PROJECTS </div>
        <div className="project-cards">
          <Project3 />
          <Project1 />
          <Project2 />
        </div>
      </div>
    </div>
  );
}

export default Project;
