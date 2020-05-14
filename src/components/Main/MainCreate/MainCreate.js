import React, { Component } from "react";
import "./MainCreate.css";

class MainCreate extends Component {
  render() {
    return (
      <div className="text-left col-10 mt-3">
        <h2>
          <strong>Sign Up</strong>
        </h2>
        <h5 className="font-weight-lighter">It's quick and easy.</h5>
        <div className="input-group mb-3">
          <input
            type="text"
            aria-label="First name"
            placeholder="First Name"
            className="form-control mr-3 rounded-lg"
          />
          <input
            type="text"
            aria-label="Last name"
            placeholder="Last Name"
            className="form-control"
          />
        </div>
        <div className="input-group mb-3 rounded-lg">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile number or email"
            aria-label="Text input with checkbox"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="New password"
            aria-label="Text input with checkbox"
          />
        </div>
        <h6 className="text-secondary">
          <strong>Birthday</strong>
        </h6>
        <div className="input-group mb-3">
          <div className="input-group-prepend mr-1">
            <button
              type="button"
              className="btn btn-outline-secondary bg-white"
            >
              Month
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                January
              </a>
              <a className="dropdown-item" href="#">
                February
              </a>
              <a className="dropdown-item" href="#">
                March
              </a>
              <a className="dropdown-item" href="#">
                April
              </a>
              <a className="dropdown-item" href="#">
                May
              </a>
              <a className="dropdown-item" href="#">
                June
              </a>
              <a className="dropdown-item" href="#">
                July
              </a>
              <a className="dropdown-item" href="#">
                August
              </a>
              <a className="dropdown-item" href="#">
                September
              </a>
              <a className="dropdown-item" href="#">
                October
              </a>
              <a className="dropdown-item" href="#">
                November
              </a>
              <a className="dropdown-item" href="#">
                December
              </a>
            </div>
          </div>
          <div className="input-group-prepend mr-1">
            <button
              type="button"
              className="btn btn-outline-secondary bg-white"
            >
              Day
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                1
              </a>
              <a className="dropdown-item" href="#">
                2
              </a>
              <a className="dropdown-item" href="#">
                3
              </a>
              <a className="dropdown-item" href="#">
                4
              </a>
              <a className="dropdown-item" href="#">
                5
              </a>
              <a className="dropdown-item" href="#">
                6
              </a>
              <a className="dropdown-item" href="#">
                7
              </a>
              <a className="dropdown-item" href="#">
                8
              </a>
              <a className="dropdown-item" href="#">
                9
              </a>
              <a className="dropdown-item" href="#">
                10
              </a>
              <a className="dropdown-item" href="#">
                ...
              </a>
            </div>
          </div>
          <div className="input-group-prepend mr-3">
            <button
              type="button"
              className="btn btn-outline-secondary bg-white"
            >
              Year
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                2020
              </a>
              <a className="dropdown-item" href="#">
                2019
              </a>
              <a className="dropdown-item" href="#">
                2018
              </a>
              <a className="dropdown-item" href="#">
                2017
              </a>
              <a className="dropdown-item" href="#">
                2016
              </a>
              <a className="dropdown-item" href="#">
                2015
              </a>
              <a className="dropdown-item" href="#">
                2014
              </a>
              <a className="dropdown-item" href="#">
                2013
              </a>
              <a className="dropdown-item" href="#">
                2012
              </a>
              <a className="dropdown-item" href="#">
                2011
              </a>
              <a className="dropdown-item" href="#">
                2010
              </a>
              <a className="dropdown-item" href="#">
                2009
              </a>
              <a className="dropdown-item" href="#">
                2008
              </a>
              <a className="dropdown-item" href="#">
                ...
              </a>
            </div>
          </div>
          <span className="pt-1">
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
          </span>
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
          className="btn btn-success btn-lg d-block mt-3 signUpColor col-6"
        >
          Sign Up
        </button>
        <div className="container-expand">
          <hr />
        </div>
        <h6>
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
