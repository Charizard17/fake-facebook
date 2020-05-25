import React, { Component } from "react";
import "./Header.css";
import alertify from "alertifyjs";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: ""
    }
  }
  loginClick = (e) => {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    e.preventDefault();
    if (username.value === "admin" && password.value === "admin") {
      console.log("Log In succesful!");
      window.location.href = "/userpage";
      alertify.success("Log In succesful!");
      this.setState({ isVisible: "hidden" })
    } else if (username.value !== "" && password.value !== "") {
      alert("Username or password incorrect!");
    } else {
      if (username.value === "" && password.value !== "") {
        console.log("Username is mandatory!");
        alert("The Log In section must be filled!");
      } else if (username.value !== "" && password.value === "") {
        console.log("Password is mandatory!");
        alert("The Log In section must be filled!");
      } else {
        console.log("Username and Password cannot be empty!");
        alert("The Log In section must be filled!");
      }
    }
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light headerColor justify-content-around">
          <a className="navbar-brand text-white col-4" href="/">
            <h1 className="fakebook">fakebook</h1>
          </a>
          <form className="form-inline" style={{ visibility: `${this.state.isVisible}` }}>
            <div className="input-group-sm">
              <input
                id="username"
                type="text"
                className="form-control ml-3 rounded-0"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <input
                id="password"
                type="password"
                className="form-control ml-3 rounded-0"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <button
                id="loginButton"
                onClick={this.loginClick}
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
