import React from "react";
import TopTile from "../TopTile";
import "./aboutUs.scss";
import WhatWeDo from "./WhatWeDo";
import HowItWorks from "./HowItWorks";
import WeAreHere from "./WeAreHere";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <TopTile
        title="About us"
        subtitle='"Rethinking property photography, starting in Aberdeen."'
        image="IMG_0220.JPG"
      />
      <div className="about-content">
        <WhatWeDo />
        <HowItWorks />
        <WeAreHere />
      </div>
    </div>
  );
};

export default AboutUs;
