import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info justify-content-sm-around">
          <a className="navbar-brand text-white" href="#">
            <h2>fakebook</h2>
          </a>
          <form className="form-inline">
            <div className="input-group">
              <input
                type="text"
                className="form-control ml-3"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <input
                type="text"
                className="form-control ml-3"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <button
                className="btn text-white btn-outline-dark my-2 my-sm-0 ml-3"
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
