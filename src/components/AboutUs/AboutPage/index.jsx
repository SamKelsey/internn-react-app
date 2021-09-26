import React from "react";
import TopTile from "../../utils/TopTile";
import "./aboutUs.scss";
import WhatWeDo from "./WhatWeDo";
import HowItWorks from "../../HowItWorks";
import WeAreHere from "./WeAreHere";
import WeAreNew from "./WeAreNew";
import OurTeam from "./OurTeam";
import { scrollToTop } from "../../../services/utils";
import Helmet from "react-helmet";

const AboutUs = () => {
  scrollToTop();

  return (
    <div className="about-us-page">
      <Helmet>
        <title>About us | internn</title>
        <meta
          name="description"
          content="Here at internn, we offer stunning property photography, but our pricing is what really sets us apart! What makes us different? All of our photographers are students!"
        />
      </Helmet>
      <TopTile
        title="About us"
        subtitle='"Rethinking property photography, starting in Aberdeen."'
        image="IMG_1472-lg.jpg"
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
