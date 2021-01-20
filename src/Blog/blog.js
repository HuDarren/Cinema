import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

function Blog() {
  return (
    <div>
      <div>
        <div className="blog-space" />
        <div className="project-title"> RECENT BLOGS </div>
        <p />
        <div className="blog-cards">
          <div className="blog-card-item">
            <div className="blog-card">
              <img
                alt="img"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593441004/Database-Marketing-Banner_arps3w.jpg"
                className=" blog-card-image"
              />
              <div className="blog-card-content">
                <h1 className="blog-card-title">
                  What is the difference between NoSQl and SQL Databases?{" "}
                </h1>
                {/* <p className="blog-card-text">testing this out</p> */}
                <Link className="blogLink" to="/blog/database">
                  <button className="blog-button" type="button">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-card-item">
            <div className="blog-card">
              <img
                alt="img"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593444537/API_banner_jrphhk.jpg"
                className=" blog-card-image"
              />
              <div className="blog-card-content">
                <h1 className="blog-card-title">What is a RESTAPI? </h1>

                <Link className="blogLink" to="/blog/restAPI">
                  <button className="blog-button" type="button">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-card-item">
            <div className="blog-card">
              <img
                alt="img"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1594047362/unnamed_q4hsd2.jpg"
                className=" blog-card-image"
              />
              <div className="blog-card-content">
                <h1 className="blog-card-title">What are Computer Network?</h1>

                <Link className="blogLink" to="/blog/networks">
                  <button className="blog-button" type="button">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="blog-card-item">
            <div className="blog-card">
              <img
                alt="img"
                src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595877074/hooks_wgl3ir.png"
                className=" blog-card-image"
              />
              <div className="blog-card-content">
                <h1 className="blog-card-title">How to use React Hooks?</h1>
                <Link className="blogLink" to="/blog/reactHooks">
                  <button className="blog-button" type="button">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-space" />
      </div>
    </div>
  );
}

export default Blog;
