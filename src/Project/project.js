import React from "react";
import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import "./project.css";

function Project() {
  return (
    <div>
      <div className="project-container">
        <div className="project-title">PROJECTS </div>
        <div className="project-cards">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </div>
  );
}

export default Project;
