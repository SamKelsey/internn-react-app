import React, { Fragment, useEffect } from "react";
import SlideShow from "../SlideShow";
import About from "../About/About";
import HowItWorks from "../HowItWorks";
import Pricing from "./Pricing";
import Contact from "../Contact/Contact";
import Faqs from "./Faqs";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <SlideShow />
      <HowItWorks />
      <Pricing />
      <Faqs />
      <Contact />
    </Fragment>
  );
};

export default Landing;
