import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

class NavLinks extends Component {
  render() {
    return (
      <React.Fragment>
        <li className="nav-link">
          <HashLink to="/#about-us">About us</HashLink>
        </li>
        <li className="nav-link">
          <Link to="portfolio.html">Portfolio</Link>
        </li>
        <li className="nav-link">
          <HashLink to="/#section-pricing">Pricing</HashLink>
        </li>
        <li className="nav-link">
          <HashLink to="/#contact-form">Get in touch</HashLink>
        </li>
      </React.Fragment>
    );
  }
}

export default NavLinks;
