import React, { Component } from "react";
import faker from "faker";
import "./UserPage.css";
import UserInfos from "./UserInfos/UserInfos";
import UserCustomPage from "./UserCustomPage/UserCustomPage";

class UserPage extends Component {
  render() {
    return (
      <div className="userPageColor">
        <div className="container-fluid" style={{ width: "80%" }}>
          <div className="row">
            <div className="col-3 mt-4">
              <UserInfos />
            </div>
            <div className="col-9 mt-4">
              <UserCustomPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
