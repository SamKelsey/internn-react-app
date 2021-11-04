import React, { Fragment } from "react";
import Topper from "./Topper";
import HowItWorks from "../HowItWorks";
import Pricing from "./Pricing";
import Contact from "./Contact/Contact";
import Faqs from "./Faqs";
import { scrollToTop } from "../../services/utils";

const Landing = () => {
  scrollToTop();

  return (
    <Fragment>
      <Topper />
      <HowItWorks />
      <Pricing />
      <Faqs />
      <Contact />
    </Fragment>
  );
};

export default Landing;
