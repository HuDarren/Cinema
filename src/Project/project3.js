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
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339018/Screen_Shot_2021-01-22_at_12.49.24_PM_yrfglu.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339016/Screen_Shot_2021-01-22_at_12.49.42_PM_hpyvlp.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_12.49.51_PM_ypwlmb.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_12.51.25_PM_mg1njw.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_12.51.56_PM_vekuy0.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_12.51.46_PM_ok8s2m.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_12.52.20_PM_bpnrp1.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_1.05.21_PM_g1kqbg.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_1.05.43_PM_eanrls.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_1.07.59_PM_lwhltv.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_1.07.33_PM_zubevm.png",
    "https://res.cloudinary.com/dsi0jbonx/image/upload/v1611339010/Screen_Shot_2021-01-22_at_1.08.14_PM_wxdo6w.png",
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
          <h1 className="project-card-title">Holiday</h1>
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
              Holiday is an gift exchange application. It makes the process of
              setting up a gift exchange simple and helps users find the perfect
              gift. You can create a holiday gift exchange with
              friends/family/colleagues or simply check out a wishlist and
              spread the joy.
            </div>
            <div className="project-card-text">
              Built with : Javascript, Node.js, Express, React, Redux ,
              PostgreSQL
            </div>
            <div className="contact-icon">
              <SocialIcon
                className="contact-iconA"
                url="https://github.com/HuDarren/Holiday-FN"
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
