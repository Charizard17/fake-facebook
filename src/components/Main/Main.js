import React, { Component } from "react";
import MainInfo from "./MainInfo/MainInfo";
import MainCreate from "./MainCreate/MainCreate";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid text-center bg-warning">
        <div className="container">
          <div className="row">
            <div className="col">
              <MainInfo />
            </div>
            <div className="col">
              <MainCreate />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
