import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

function Project1() {
  return (
    <div>
      <div className="project-card-item">
        <div className="project-card">
          <h1 className="project-card-title">Bramble</h1>
          <img
            alt="img"
            className=" project-card-image"
            src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593020174/Screen_Shot_2020-06-24_at_1.36.02_PM_jqcfmd.png"
          />
          <div className="project-card-content">
            <p />
            <div className="project-card-text">
              Bramble is a social media app that allows users to post content,
              connect with communities, and share their favorite locations.
              Users can subscribe and post content to communities based around
              things they are interested in (books, food, music, etc), add and
              review locations related to these communities, as well as follow
              and share content with other users.
            </div>
            <div className="project-card-text">
              Built with : Javascript, Node.js, Express, React, Redux ,
              Postgres.
            </div>
            <Link className="projectLink" to="/bramble" target="_blank">
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

export default Project1;
