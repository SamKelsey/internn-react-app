import React from "react";
import "./weAreHere.scss";
import config from "../../../config";

const WeAreHere = () => {
  return (
    <div className="we-are-here-section">
      <div className="left">
        <div className="headings">
          <h3>we are here for</h3>
          <h2>Landlords,</h2>
          <h2>AirBnb owners,</h2>
          <h2>Holiday let owners</h2>
        </div>
        <p className="text-content">here is the text content</p>
      </div>
      <div className="image right">
        <img src={`${config["s3-images-url"]}/IMG_0220.JPG`} alt="doorway" />
      </div>
    </div>
  );
};

export default WeAreHere;
