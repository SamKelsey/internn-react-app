import React, { Fragment, Component } from "react";
import SlideShow from "../SlideShow/SlideShow";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";

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
        <Contact />
      </Fragment>
    );
  }
}

export default Landing;
