import React, { Component } from "react";

let languages = [
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
];

let footerChoices = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Fakebook Lite",
  "Watch",
  "People",
  "Pages",
  "Page Categories",
  "Places",
  "Games",
  "Locations",
  "Marketplace",
  "Groups",
  "Portal",
  "Fake-Instagram",
  "Local",
  "Fundraisers",
  "Services",
  "About",
  "Create Ad",
  "Create Page",
  "Developers",
  "Careers",
  "Privacy",
  "Cookies",
  "Ad Choices",
  "Impressum/Terms/NetzDG",
  "Help",
];

class Footer extends Component {
  render() {
    let language = [];
    for (let i = 0; i < languages.length; i++) {
      language.push(
        <a key={i} className="mr-2" href={`/${languages[i]}`}>
          <small>{languages[i]} </small>
        </a>
      );
    }

    let footerChoice = [];
    for (let i = 0; i < footerChoices.length; i++) {
      footerChoice.push(
        <a key={i} className="mr-3" href={`/${footerChoices[i]}`}>
          <small>{footerChoices[i]} </small>
        </a>
      );
    }
    return (
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col text-left mt-4">
              <ul className="list-inline">
                <li className="list-inline-item">{language}</li>
                <li className="list-inline-item">
                  <button>+</button>
                </li>
              </ul>
              <div className="container-expand">
                <hr />
              </div>
              <ul className="list-inline">
                <li className="list-inline-item">{footerChoice}</li>
              </ul>
              <footer className="blockquote-footer">Fakebook © 2020</footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
