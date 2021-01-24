import React from "react";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";
import { mailkey, mailId } from "../secrets";
import "./contact.css";

function Contact() {
  const [state, setstate] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  // function handleChange(event) {
  //   setstate({ ...state, [event.target.name]: event.target.value });
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   emailjs.send("Email", mailId, state, mailkey).then(
  //     (response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     (err) => {
  //       console.log("FAILED...", err);
  //     }
  //   );
  //   setstate({ name: "", email: "", message: "" });
  // }

  return (
    <div id="contact">
      <div className="project-title">Contact</div>
      <div className="contact-text">Feel Free to Connect with Me</div>

      <div className="contact-icon">
        <SocialIcon
          url="https://www.linkedin.com/in/darrenhu/"
          className="contact-iconA"
        />
        <SocialIcon
          className="contact-iconA"
          url="https://github.com/HuDarren"
        />
      </div>
      {/* <div className="message-container">
        <form className="message-content" onSubmit={handleSubmit}>
          <div className="contact-text">Email Me</div>
          <div>
            <input
              className="message-input"
              placeholder="Enter Your Name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="message-input"
              placeholder="Enter Your Email"
              name="email"
              type="text"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="message-detail"
              placeholder="Enter Your Message"
              name="message"
              type="text"
              rows="5"
              value={state.message}
              onChange={handleChange}
            />
          </div>
          <div className="message-button-container ">
            <button className="message-button1" type="submit">
              Send
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Contact;
