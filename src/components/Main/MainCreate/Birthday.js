import React, { Component } from "react";

let dayStart = 1;
let dayEnd = 31;
let days = Array(dayEnd - dayStart + 1)
  .fill()
  .map(() => dayStart++);

let yearStart = 1900;
let yearEnd = 2020;
let years = Array(yearEnd - yearStart + 1)
  .fill()
  .map(() => yearStart++);

class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
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
      ],
    };
  }

  render() {
    return (
      <div>
        <h6 className="text-secondary">
          <strong>Birthday</strong>
        </h6>
        <div className="input-group mb-3">
          <select id="month" className="custom-select-md">
            {this.state.months.map((elem, i) => {
              return (
                <option key={i} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
          <select id="day" className="custom-select-md">
          {days.map((elem, i) => {
              return (
                <option key={i} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
          <select id="year" className="custom-select-md">
            {years.map((element, i) => {
              return (
                <option key={i} value={element}>
                  {element}
                </option>
              );
            })}
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
      </div>
    );
  }
}

export default Birthday;
