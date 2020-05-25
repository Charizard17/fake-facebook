import React, { Component } from "react";

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        "English (US)",
        "Deutsch",
        "Türkçe",
        "Polski",
        "Italiano",
        "Français (France)",
        "Română",
        "Русский",
        "العربية",
        "Español",
        "Português (Brasil)",
      ],
    };
  }
  render() {
    return (
      <ul className="list-inline">
        <li className="list-inline-item">
          {this.state.languages.map((element, i) => {
            return (
              <a key={i} className="mr-2" href={`/${element}`}>
                <small>{element} </small>
              </a>
            );
          })}
        </li>
        <li className="list-inline-item">
          <button>+</button>
        </li>
      </ul>
    );
  }
}

export default Languages;
