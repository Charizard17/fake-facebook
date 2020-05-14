import React, { Component } from "react";

class MainCreate extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <h5>It's quick and easy.</h5>
        <div class="input-group">
          <input type="text" aria-label="First name" placeholder="First Name" class="form-control" />
          <input type="text" aria-label="Last name" placeholder="Last Name" class="form-control" />
        </div>
      </div>
    );
  }
}

export default MainCreate;
