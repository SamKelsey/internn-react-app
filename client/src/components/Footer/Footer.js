import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../images/white_without_slogan.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <div className="logo-wrapper">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
          </div>
          <div className="center-line"></div>
          <div className="join-us-wrapper">
            <Link className="join-us" to="/join-us">
              Join the team.
            </Link>
          </div>
        </div>
        <div className="media-icons">
          <i className="fab fa-facebook fa-fw"></i>
          <i className="fab fa-instagram fa-fw"></i>
        </div>
      </div>
    );
  }
}

export default Footer;
