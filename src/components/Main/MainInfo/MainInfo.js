import React, { Component } from "react";
import updatesImg from "./img/updates.png";
import newsImg from "./img/news.png";
import connectImg from "./img/connect.png";

class MainInfo extends Component {
  render() {
    return (
      <div className="container text-left mt-5">
        <h3 className="mb-5">
          <strong>
            Connect with friends and the world around you on Fakebook.
          </strong>
        </h3>
        <h5 className="mb-5">
          <img src={updatesImg} />
          <strong>See photos and updates</strong>
          <small className="text-muted"> from friends in News Feed.</small>
        </h5>
        <h5 className="mb-5">
          <img src={newsImg} />
          <strong>Share what's new</strong>
          <small className="text-muted"> in your life on your Timeline.</small>
        </h5>
        <h5 className="mb-5">
          <img src={connectImg} />
          <strong>Find more</strong>
          <small className="text-muted">
            {" "}
            of what you're looking for with Fakebook Search.
          </small>
        </h5>
      </div>
    );
  }
}

export default MainInfo;
