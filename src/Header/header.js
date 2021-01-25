import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="nav-container">
      <div className="nav-container1">
        <div className="nav-container2">
          <div className="nav-title">
            <Link className="nav-title2" to="/">
              Home
            </Link>
          </div>
          <div className="nav-log-container">
            <div className="nav-log">
              <ScrollLink
                className="nav-log2"
                to="project"
                spy={true}
                smooth={true}>
                Project
              </ScrollLink>
            </div>
            <div className="nav-log">
              <ScrollLink
                className="nav-log2"
                to="blog"
                spy={true}
                smooth={true}>
                Blog
              </ScrollLink>
            </div>
            <div className="nav-log">
              <ScrollLink
                className="nav-log2"
                to="contact"
                spy={true}
                smooth={true}>
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
