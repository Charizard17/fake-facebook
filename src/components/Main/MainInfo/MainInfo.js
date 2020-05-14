import React, { Component } from "react";

class MainInfo extends Component {
  render() {
    return (
      <div className="container text-left">
        <h3 className="mb-5">
          <strong>
            Connect with friends and the world around you on Facebook.
          </strong>
        </h3>
        <h5 className="mb-5">
          <img src="./img/newspaper-regular.svg"></img>
          <strong>See photos and updates</strong>
          <small className="text-muted"> from friends in News Feed.</small>
        </h5>
        <h5 className="mb-5">
          <img src="./img/newspaper-regular.svg"></img>
          <strong>Share what's new</strong>
          <small className="text-muted"> in your life on your Timeline.</small>
        </h5>
        <h5 className="mb-5">
          <img src="./img/newspaper-regular.svg"></img>
          <strong>Find more</strong>
          <small className="text-muted">
            {" "}
            of what you're looking for with Facebook Search.
          </small>
        </h5>
      </div>
    );
  }
}

export default MainInfo;
