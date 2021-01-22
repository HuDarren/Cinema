import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import { SocialIcon } from "react-social-icons";

function Project2() {
  const [state, setState] = React.useState({
    previousPage: 0,
    currentPage: 0,
    nextPage: 0,
  });

  const images = [
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611336886/Screen_Shot_2021-01-22_at_12.31.06_PM_mva5oe.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611336886/Screen_Shot_2021-01-22_at_12.32.11_PM_ur3hi1.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611336886/Screen_Shot_2021-01-22_at_12.31.32_PM_wgobma.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611336886/Screen_Shot_2021-01-22_at_12.33.08_PM_qiwk7r.png",
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
          <h1 className="project-card-title">MagiCounter</h1>
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
            <div className="contact-icon">
              <SocialIcon
                className="contact-iconA"
                url="http://magicounter.herokuapp.com/"
              />
            </div>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
