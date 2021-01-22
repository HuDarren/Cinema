import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import { SocialIcon } from "react-social-icons";

function Project1() {
  const [state, setState] = React.useState({
    previousPage: 0,
    currentPage: 0,
    nextPage: 0,
  });

  const images = [
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611262698/Screen_Shot_2021-01-21_at_3.55.31_PM_wcdoew.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611262698/Screen_Shot_2021-01-21_at_3.55.52_PM_rqgeyv.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611262698/Screen_Shot_2021-01-21_at_3.57.35_PM_i5txsl.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611262698/Screen_Shot_2021-01-21_at_3.57.00_PM_eit2cy.png",
  ];

  function clickBack() {
    if (state.currentPage !== 0) {
      setState({
        previousPage: state.previousPage - 1,
        currentPage: state.currentPage - 1,
        nextPage: state.currentPage - 1,
      });
    }
  }

  function clickNext() {
    if (state.currentPage !== images.length - 1) {
      setState({
        previousPage: state.previousPage + 1,
        currentPage: state.currentPage + 1,
        nextPage: state.currentPage + 1,
      });
    }
  }

  return (
    <div>
      <div className="project-card-item">
        <div className="project-card">
          <h1 className="project-card-title">Bramble</h1>
          <img
            alt="img"
            className=" project-card-image"
            src={images[state.currentPage]}
          />
          <div className="project-button-container">
            <button className="project-buttonA" onClick={clickBack}>
              <img
                className="project-button-display"
                alt="imgx"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1611265541/back_nwhxhb.png"></img>
            </button>
            <button className="project-buttonA" onClick={clickNext}>
              <img
                className="project-button-display"
                alt="img"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1611265562/back_xq5vpl.png"></img>
            </button>
          </div>
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
              PostgreSQL.
            </div>
            <div className="contact-icon">
              <SocialIcon
                className="contact-iconA"
                url="http://brambles.herokuapp.com/"
              />
              <SocialIcon
                className="contact-iconA"
                url="https://github.com/Ultra-Punks/bramble"
              />
            </div>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
