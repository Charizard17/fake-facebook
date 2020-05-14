import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid text-center bg-light">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="/">English (US)</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Deutsch</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Türkçe</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Polski</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Italiano</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Français (France)</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Română</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Русский</a>
          </li>
          <li class="list-inline-item">
            <a href="/">العربية</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Español</a>
          </li>
          <li class="list-inline-item">
            <a href="/">Português (Brasil)</a>
          </li>
        </ul>
        <footer className="blockquote-footer">Fakebook © 2020</footer>
      </div>
    );
  }
}

export default Footer;
