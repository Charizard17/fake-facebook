import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light headerColor justify-content-around">
          <a className="navbar-brand text-white" href="#">
            <h1 className="fakebook">fakebook</h1>
          </a>
          <form className="form-inline">
            <div className="input-group-sm">
              <input
                type="text"
                className="form-control ml-3 rounded-0"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <input
                type="text"
                className="form-control ml-3 rounded-0"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <button
                className="btn-sm buttonColor text-white btn-outline-primary border-dark my-2 my-sm-0 ml-3"
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
