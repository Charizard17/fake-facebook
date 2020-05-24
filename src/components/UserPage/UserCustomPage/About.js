import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container bg-white p-3 mb-4">
        <h5>
          <strong>About</strong>
        </h5>
        <br />
        <span>
          <img
            style={{ width: "23px", height: "23px" }}
            src="https://img.icons8.com/dotty/50/000000/facebook-messenger.png"
          />{" "}
          <a href="contactUnblastMessenger">
            <strong>Contact Unblast on Messenger</strong>
          </a>
        </span>
        <br />
        <br />
        <span>
          <img
            style={{ width: "23px", height: "23px" }}
            src="https://img.icons8.com/dotty/80/000000/saving-book.png"
          />{" "}
          <a href="education">Education</a>{" "}
        </span>
      </div>
    );
  }
}

export default About;
