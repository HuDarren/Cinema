import React from "react";

export default function restApi() {
  return (
    <div className="blog-container">
      <div className="blog-space2" />
      <img
        alt="img"
        className="blog-image"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593444537/API_banner_jrphhk.jpg"
      />
      <p className="blog-text">This post is about RestAPI.</p>
      <p className="blog-text">What is a Rest API ?</p>
      <p>
        API, Application Programming Interface, is the communication between one
        piece of software with another through a request and response. The
        client would have to format their request accordingly to the server
        structure in order for the server provide a response. API would be a
        messenger between the two piece of software.
      </p>
      <p className="blog-text">What is HTTP ?</p>
      <p>
        HTTP is an application layer protocol for sending and receiving messages
        over a network. Every time you load a webpage, it is making a HTTP
        request to a server. We use HTTP methods ( GET, POST, PUT, DELETE ) for
        HTTP interactions and REST is a specific way to implement and use the
        HTTP protocol.
      </p>
      <p className="blog-text">What is REST?</p>
      <p>
        REST, Representational State Transfer , is an architecture style for
        designing networked applications.
      </p>
      <li>
        It uses HTTP methods ( GET for getting data, POST for creating , PUT,
        for updating DESTROY for deleting )
      </li>
      <li>Scoping information goes in the parameters part of the URL </li>
      <li>It uses a common data format , typically JSON. </li>
      <li>
        Communication is usually stateless , the server does not maintain the
        state for the client.
      </li>
      <p />
      <p className="blog-text">
        Below is a sample RestAPI request from scryfall. We will need to follow
        the specific rules inorder to retreive the information from Scryfall.
      </p>
      <p />
      <img
        alt="img"
        className="blog-image2"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593446893/Screen_Shot_2020-06-29_at_12.04.37_PM_rlo2js.png"
      />
      <p />
      <p className="blog-text">
        We can use Postman application to check the information that we will get
        from this API request.
      </p>
      <p />
      <img
        alt="img"
        className="blog-image2"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593446876/Screen_Shot_2020-06-29_at_12.04.51_PM_to2j4z.png"
      />
      <p />
      <p className="blog-text">
        We can now use this same structure and implement into our API request.
      </p>
      <p />
      <img
        alt="img"
        className="blog-image2"
        src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1593446885/Screen_Shot_2020-06-29_at_12.07.09_PM_vrgzjl.png"
      />
      <div className="blog-space" />
    </div>
  );
}
