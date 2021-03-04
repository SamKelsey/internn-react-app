import React, { Component, Fragment } from "react";
import "./slide.css";
import logo from "../../../images/white_without_slogan.png";
import stockPerson from "../../../images/stockPerson.jpg";
import stockChair from "../../../images/stockChair.jpg";
import stockPhone from "../../../images/stockPhone.jpg";
import stockFacebook from "../../../images/stockFacebook.jpg";
import stockGirl from "../../../images/stockGirl.jpg";

const images = [stockGirl, stockChair, stockFacebook];

class Slide extends Component {
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
            <div className="h1-wrapper">
              <h1>{this.props.secondLine}</h1>
            </div>
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
