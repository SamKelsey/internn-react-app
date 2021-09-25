import React from "react";
import "./weAreHere.scss";
import FadeInSection from "../../../utils/FadeInSection";
import config from "../../../../config";

const WeAreHere = () => {
  return (
    <FadeInSection>
      <div className="we-are-here-section">
        <div className="left">
          <div className="headings">
            <h3>we are here for</h3>
            <h2>Landlords,</h2>
            <h2>AirBnb owners,</h2>
            <h2>Holiday let owners</h2>
          </div>
          <p className="text-content">
            internn is the perfect place for anyone selling or advertising
            property. Whether you're a landlord, BnB owner, or a rental agency,
            we can help you!
          </p>
        </div>
        <img
          className="right"
          src={`${config["s3-images-url"]}/IMG_1176_portrait-sm.jpg`}
          alt="doorway"
        />
      </div>
    </FadeInSection>
  );
};

export default WeAreHere;
