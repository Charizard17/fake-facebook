import React, { Component } from "react";
import MainInfo from "./MainInfo/MainInfo";
import MainCreate from "./MainCreate/MainCreate";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid text-center mainColor">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <MainInfo />
            </div>
            <div className="col-5">
              <MainCreate />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
