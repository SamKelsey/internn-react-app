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
                <img src={logo} alt="internn logo" />
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
          <a href="https://www.facebook.com/internnOfficial">
            <i className="fab fa-facebook fa-fw"></i>
          </a>
          <a href="https://www.instagram.com/internnofficial">
            <i className="fab fa-instagram fa-fw"></i>
          </a>
          <a href="https://www.linkedin.com/company/internn">
            <i className="fab fa-linkedin fa-fw"></i>
          </a>
        </div>
        <div className="terms-link-wrapper">
          <Link to="/terms-and-conditions" className="terms-link">
            Terms & Conditions and Privacy Policy dev.
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
