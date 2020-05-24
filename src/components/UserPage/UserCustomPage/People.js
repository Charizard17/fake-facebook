import React, { Component } from "react";

class People extends Component {
  render() {
    return (
      <div className="container bg-white p-3 mb-4">
        <h5>
          <strong>People</strong>
        </h5>
        <div className="container-expand">
          <hr />
        </div>
        <span className="text-center d-flex justify-content-center">
          <strong style={{ fontSize: "30px" }}>
            {Math.floor(Math.random() * 150)}k <small>likes</small>
          </strong>
        </span>
      </div>
    );
  }
}

export default People;
