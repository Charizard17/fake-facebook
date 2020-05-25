import React, { Component } from "react";

class FooterInfoLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerChoices: [
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
      ],
    };
  }
  render() {
    return (
      <ul className="list-inline">
        <li className="list-inline-item">
          {this.state.footerChoices.map((element, i) => {
            return (
              <a key={i} className="mr-3" href={`/${element}`}>
                <small>{element} </small>
              </a>
            );
          })}
        </li>
      </ul>
    );
  }
}

export default FooterInfoLinks;
