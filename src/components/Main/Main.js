import React, { Component } from "react";
import MainInfo from "./MainInfo/MainInfo";
import MainCreate from "./MainCreate/MainCreate";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid text-center bg-warning">
        <div class="container bg-primary">
          <div class="row">
            <div class="col">
              <MainInfo />
            </div>
            <div class="col">
              <MainCreate />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
