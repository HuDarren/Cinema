import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

function Project2() {
  return (
    <div>
      <div className="project-card-item">
        <div className="project-card">
          <img
            alt="img"
            className=" project-card-image"
            src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593020243/Screen_Shot_2020-06-24_at_1.37.11_PM_lqyjns.png"
          />
          <div className="project-card-content">
            <h1 className="project-card-title">MagiCounter</h1>
            <p />
            <div className="project-card-text">
              MagiCounter is a mobile friendly application that can be used when
              playing “Magic The Gathering” to keep track of your life total.
              MagiCounter will allow you to search for over twenty billion card
              information in MagicTheGathering. You can also select a wizard
              character in the MagiCounter to enhance your game experiences. Use
              MagiCounter on your next game!
            </div>
            <div className="project-card-text">
              Built with : Javascript, CSS, React, Redux , REST-API.
            </div>
            <Link className="projectLink" to="/magicounter" target="_blank">
              <button className="project-button" type="button">
                Demo
              </button>
            </Link>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
