import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import SocialIcons from "../utils/SocialIcons";
import config from "../../config";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <div className="logo-wrapper">
            <div className="logo">
              <Link to="/">
                <img
                  src={`${config["s3-images-url"]}/white_without_slogan.png`}
                  alt="internn logo"
                />
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
        <SocialIcons />
        <div className="terms-link-wrapper">
          <Link to="/terms-and-conditions" className="terms-link">
            Terms & Conditions and Privacy Policy.
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
