import React, { Component, Fragment } from "react";
import "./slide.css";
import logo from "../../../images/without_slogan.png";

class Slide extends Component {
  render() {
    return (
      <Fragment>
        <div className="mySlides fade">
          <h2>{this.props.firstLine}</h2>
          <h1>{this.props.secondLine}</h1>
          <h2>
            {this.props.thirdLine} <img src={logo} alt="logo" />
            <span className="fullstop">.</span>
          </h2>
        </div>
      </Fragment>
    );
  }
}

export default Slide;
