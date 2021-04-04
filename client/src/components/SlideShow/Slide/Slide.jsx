import React, { Component, Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import "./slide.css";
import logo from "../../../images/white_without_slogan.png";
import stockChair from "../../../images/stockChair.jpg";
import stockFacebook from "../../../images/stockFacebook.jpg";
import stockGirl from "../../../images/stockGirl.jpg";

const images = [stockGirl, stockChair, stockFacebook];
const links = ["/#about-us", "/portfolio", "https://facebook.com"];

class Slide extends Component {
  renderLink() {
    if (this.props.slideNo == 2) {
      return (
        <a href={links[this.props.slideNo]}>
          <h1>{this.props.secondLine}</h1>
        </a>
      );
    } else {
      return (
        <HashLink
          to={links[this.props.slideNo]}
          style={{ textDecoration: "none" }}
        >
          <h1>{this.props.secondLine}</h1>
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
            <div className="h2-wrapper">
              <h2>
                {this.props.firstLine}
                {this.props.icon && (
                  <a href="https://www.facebook.com/">
                    <i className={this.props.icon}></i>
                  </a>
                )}
              </h2>
            </div>
            <div className="h1-wrapper">{this.renderLink()}</div>
            <div className="h2-wrapper bottom">
              <h2>
                {this.props.thirdLine} <img src={logo} alt="logo" />
                <span className="fullstop">.</span>
              </h2>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Slide;
