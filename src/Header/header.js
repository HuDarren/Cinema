import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="nav-container">
      <div className="nav-container1">
        <div className="nav-container2">
          <div className="nav-title">
            <Link className="nav-title2" to="/view">
              Home
            </Link>
          </div>
          <div className="nav-log-container">
            <div className="nav-log">
              <Link className="nav-log2" to="/view">
                About
              </Link>
            </div>
            <div className="nav-log">
              <Link className="nav-log2" to="/view">
                Project
              </Link>
            </div>
            <div div className="nav-log">
              <Link className="nav-log2" to="/view">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
