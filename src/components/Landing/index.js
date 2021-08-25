import React, { Fragment, Component } from "react";
import SlideShow from "../SlideShow";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";
import HowItWorks from "../HowItWorks/HowItWorks";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <SlideShow />
        <About />
        <Pricing />
        <HowItWorks />
        <Contact />
      </Fragment>
    );
  }
}

export default Landing;
