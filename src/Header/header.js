import React from "react";
import { Link } from "react-scroll";
import "./header.css";

function Header() {
  return (
    <div className="nav-container">
      <div className="nav-container1">
        <div className="nav-container2">
          <div className="nav-title">
            <Link className="nav-title2" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </div>
          <div className="nav-log-container">
            <div className="nav-log">
              <Link className="nav-log2" to="project" spy={true} smooth={true}>
                Project
              </Link>
            </div>
            <div className="nav-log">
              <Link className="nav-log2" to="blog" spy={true} smooth={true}>
                Blog
              </Link>
            </div>
            <div className="nav-log">
              <Link className="nav-log2" to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
