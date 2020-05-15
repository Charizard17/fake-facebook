import React, { Component } from "react";
import "./MainCreate.css";
import alertify from "alertifyjs";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class MainCreate extends Component {
  signupClick = (e) => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let numberOrEmail = document.getElementById("numberOrEmail").value;
    let passWord = document.getElementById("passWord").value;
    let inlineRadio2 = document.getElementById("inlineRadio2").checked;
    let inlineRadio3 = document.getElementById("inlineRadio3").checked;
    let inlineRadio1 = document.getElementById("inlineRadio1").checked;

    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      numberOrEmail !== "" &&
      passWord !== "" &&
      (inlineRadio1 === true || inlineRadio2 === true || inlineRadio3 === true)
    ) {
      console.log("Sign Up Succesful!");
      alertify.success("Sign Up Succesful!");
      window.location.href = "/userpage";
    } else {
      if (firstName === "") {
        console.log("First name is mandatory!");
      }
      if (lastName === "") {
        console.log("Last name is mandatory!");
      }
      if (numberOrEmail === "") {
        console.log("Number or Email is mandatory!");
      }
      if (passWord === "") {
        console.log("Password is mandatory!");
      }
      if (
        inlineRadio1 === false &&
        inlineRadio2 === false &&
        inlineRadio3 === false
      ) {
        console.log("Gender selection is mandatory");
      }
    }
  };

  render() {
    let month = [];
    for (let i = 0; i < months.length; i++) {
      month.push(
        <option key={months[i]} value={months[i]}>
          {months[i]}
        </option>
      );
    }
    let day = [];
    for (let i = 1; i <= 31; i++) {
      day.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    let year = [];
    for (let i = 0; i <= 100; i++) {
      year.push(
        <option key={i} value={2020 - i}>
          {2020 - i}
        </option>
      );
    }
    return (
      <div className="text-left col-10 mt-3">
        <h2>
          <strong>Sign Up</strong>
        </h2>
        <h5 className="font-weight-lighter">It's quick and easy.</h5>
        <div className="input-group mb-3">
          <input
            type="text"
            id="firstName"
            aria-label="First name"
            placeholder="First Name"
            className="form-control mr-3 rounded-lg"
          />
          <input
            type="text"
            id="lastName"
            aria-label="Last name"
            placeholder="Last Name"
            className="form-control"
          />
        </div>
        <div className="input-group mb-3 rounded-lg">
          <input
            type="text"
            id="numberOrEmail"
            className="form-control"
            placeholder="Mobile number or email"
            aria-label="Text input with checkbox"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            id="passWord"
            className="form-control"
            placeholder="New password"
            aria-label="Text input with checkbox"
          />
        </div>
        <h6 className="text-secondary">
          <strong>Birthday</strong>
        </h6>
        <div className="input-group mb-3">
          <select id="month" className="custom-select-md">
            {month}
          </select>
          <select id="day" className="custom-select-md">
            {day}
          </select>
          <select id="year" className="custom-select-md">
            {year}
          </select>
          <svg
            className="bi bi-question-circle-fill mt-2 ml-3"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h6 className="text-secondary">
          <strong>Gender</strong>
        </h6>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Custom
          </label>
        </div>
        <svg
          className="bi bi-question-circle-fill"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
            clipRule="evenodd"
          />
        </svg>
        <h6 className="col-11">
          <small className="text-muted">
            By clicking Sign Up, you agree to our <a href="/terms">Terms</a>.
            Learn how we collect, use and share your data in our{" "}
            <a href="/datapolicy">Data Policy</a> and how we use cookies and
            similar technology in our{" "}
            <a href="/cookiespolicy">Cookies Policy</a>. You may receive SMS
            Notifications from us and can opt out any time.
          </small>
        </h6>
        <button
          type="button"
          onClick={this.signupClick}
          className="btn btn-success btn-lg d-block mt-3 signUpColor col-6"
        >
          Sign Up
        </button>
        <div className="container-expand">
          <hr />
        </div>
        <h6 className="mb-5">
          <small>
            <strong>
              <a href="/">Create a Page</a>
              <span className="text-muted mb-3">
                {" "}
                for a celebrity, band or business.
              </span>
            </strong>
          </small>
        </h6>
      </div>
    );
  }
}

export default MainCreate;
