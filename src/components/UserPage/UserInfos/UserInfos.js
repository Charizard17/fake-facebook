import React, { Component } from "react";
import faker from "faker";

class UserInfos extends Component {
  render() {
    return (
      <div>
        <img
          src={faker.image.avatar()}
          alt="..."
          style={{ width: "100%" }}
          className="mb-3"
        ></img>
        <h4>
          {faker.name.findName()}{" "}
          <span className="badge badge-primary ml-2 rounded-circle">✓</span>
        </h4>
        <h6 className="text-muted mb-3">
          <strong>@{faker.internet.userName()}</strong>
        </h6>
        <nav className="nav flex-column mb-3">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Posts
          </a>
          <a className="nav-link" href="#">
            Reviews
          </a>
          <a className="nav-link" href="#">
            Videos
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Photos
          </a>
          <a className="nav-link" href="#">
            Community
          </a>
          <a className="nav-link" href="#">
            Groups
          </a>
          <a className="nav-link" href="#">
            Info and ads
          </a>
        </nav>
        <button type="button" className="btn btn-success">
          Create a Page
        </button>
      </div>
    );
  }
}

export default UserInfos;
