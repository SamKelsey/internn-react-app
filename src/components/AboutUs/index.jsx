import React from "react";
import TopTile from "../utils/TopTile";
import "./aboutUs.scss";
import WhatWeDo from "./WhatWeDo";
import HowItWorks from "./HowItWorks";
import WeAreHere from "./WeAreHere";
import WeAreNew from "./WeAreNew";
import OurTeam from "./OurTeam";

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
        <WeAreNew />
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUs;
