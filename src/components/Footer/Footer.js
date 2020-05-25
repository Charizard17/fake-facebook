import React, { Component } from "react";
import Languages from "./Languages";
import FooterInfoLinks from "./FooterInfoLinks";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="container">
          <div className="row">
            <div className="col text-left mt-4">
              <Languages />
              <div className="container-expand">
                <hr />
              </div>
              <FooterInfoLinks />
              <footer className="blockquote-footer">
                Fakebook &copy; 2020
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
