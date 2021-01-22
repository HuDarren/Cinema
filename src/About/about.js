import React from "react";
import "./about.css";

function About() {
  return (
    <div id="home">
      <div className="profile">
        <div className="profileAbout">
          <div className="profile-title">ABOUT</div>
          <div className="project-card-item">
            <div className="project-card">
              <img
                className="profilePicture"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1592855650/hkpix_l1ht4n.jpg"
                alt="img"
              />
              <div className="profile-content">
                <div className="profile-text">
                  Hello! Thank you for visiting my Website.
                </div>
                <div className="profile-text">
                  My name is Darren Hu. I am a Accoutant / Software Engineer
                  based in Brooklyn, NY.
                </div>
                <div className="profile-text">
                  I graduated from Hunter College with my Bachelor of Science in
                  Accounting. After graduating, I worked as an accountant /
                  auditor for over seven years. During those seven years, I had
                  the opportunity to work with great people, mentors and
                  friends. I have always been fascinated by the technologies I
                  used in my work and my personal life. I attended Fullstack
                  Academy to enhance my knowledge of coding and to learn to
                  build fullstack applications. Technology is important when it
                  comes to improving businesses, evaluating financial decisions
                  , providing accurate data and making daily tasks efficiency. I
                  enjoy exploring new technologies to help improve everyday
                  problems.
                </div>
                <div className="profile-text">
                  Besides finance and coding, I enjoy playing tennis,
                  basketball, video-games, boardgames, and watching movies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
