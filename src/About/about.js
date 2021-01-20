import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="profile">
        <div className="profileAbout">
          <div className="project-title">ABOUT</div>
          <img
            className="profilePicture"
            src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1592855650/hkpix_l1ht4n.jpg"
            alt="img"
          />
          <div className="profileMessage">
            <p>Hello! Thank you for visiting my Website. </p>
            <p>
              My name is Darren Hu. I am a Accoutant / Software Engineer based
              in Brooklyn, NY.
            </p>
            <p>
              I graduated from Hunter College with my Bachelor of Science in
              Accounting. After graduating, I worked as an accountant / auditor
              for over seven years. During those seven years, I had the
              opportunity to work with great people, mentors and friends. I have
              always been fascinated by the technologies I used in my work and
              my personal life. I attended Fullstack Academy to enhance my
              knowledge of coding and build fullstack applications using various
              technologies. Technology can be important when it comes to
              promoting businesses , evaluating financial decisions , providing
              more accurate data, or makes daily tasks efficiency. I enjoy
              exploring new technologies to help improve everyday problems.
            </p>
            <p>
              Besides finance and coding, I enjoy playing tennis, basketball ,
              video-games , boardgames, and watching movies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
