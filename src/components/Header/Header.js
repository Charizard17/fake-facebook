import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Fakebook
          </a>
          <form class="form-inline">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default Header;
