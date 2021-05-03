import React, { Component, Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import "./slide.css";
import logo from "../../../images/white_without_slogan.png";
import stockChair from "../../../images/stockChair.jpg";
import stockFacebook from "../../../images/stockFacebook.jpg";
import stockGirl from "../../../images/stockGirl.jpg";

const images = [stockGirl, stockChair, stockFacebook];
const links = [
  "/#about-us",
  "/portfolio",
  "https://squareup.com/appointments/book/lh5bwjbbh62mfi/L9SG5QR4MCQA8/services",
];

class Slide extends Component {
  renderLink() {
    if (this.props.slideNo == 2) {
      return (
        <a href={links[this.props.slideNo]}>
          <h2>{this.props.secondLine}</h2>
        </a>
      );
    } else if (this.props.slideNo == 0) {
      return (
        <HashLink
          to={links[this.props.slideNo]}
          style={{ textDecoration: "none" }}
        >
          <h1>{this.props.secondLine}</h1>
        </HashLink>
      );
    } else {
      return (
        <HashLink
          to={links[this.props.slideNo]}
          style={{ textDecoration: "none" }}
        >
          <h2>{this.props.secondLine}</h2>
        </HashLink>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <div className="mySlides fade">
          <div
            className={
              this.props.slideNo == 0 ? `left ${this.props.slideNo}` : "left"
            }
            style={{
              backgroundImage: `url(${images[this.props.slideNo]})`,
            }}
          ></div>
          <div className="right">
            <div className="h3-wrapper">
              <h3>
                {this.props.firstLine}
                {this.props.icon && (
                  <a href="https://www.facebook.com/">
                    <i className={this.props.icon}></i>
                  </a>
                )}
              </h3>
            </div>
            <div className="h1-wrapper">{this.renderLink()}</div>
            <div className="h3-wrapper bottom">
              <h3>
                {this.props.thirdLine} <img src={logo} alt="logo" />
                <span className="fullstop">.</span>
              </h3>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Slide;
