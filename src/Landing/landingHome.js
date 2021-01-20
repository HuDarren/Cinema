import React from "react";
import About from "../About/about";
import Project from "../Project/project";
import Blog from "../Blog/blog";
import Contact from "../Contact/contact";

function LandingHome() {
  return (
    <div className="landingHome">
      <div>
        <About />
        <Project />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default LandingHome;
