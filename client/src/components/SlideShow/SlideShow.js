import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./slideshow.css";
import "./text.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCounter: 0,
    };
  }

  componentDidMount() {
    this.toggleSlide();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleSlide() {
    this.interval = setInterval(() => {
      if (this.state.slideCounter == 2) {
        this.setState({ slideCounter: 0 });
      } else {
        this.setState({ slideCounter: parseInt(this.state.slideCounter) + 1 });
      }
    }, 4000);
  }

  currentSlide(e) {
    this.setState({
      slideCounter: e.target.getAttribute("name"),
    });
  }

  renderSlide() {
    if (this.state.slideCounter == 0) {
      return (
        <div className="mySlides fade">
          <div className="landing-text first-slide">
            <h1>
              Photography, <span>done by</span> students.
            </h1>
            <h2>
              Photograph <span>your properties</span> for a
              <span> fraction of the price</span>.
            </h2>
          </div>
        </div>
      );
    } else if (this.state.slideCounter == 1) {
      return (
        <div className="mySlides fade">
          <div className="landing-text">
            <h1>See our results...</h1>
            <div className="link-wrapper">
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mySlides fade">
          <div className="landing-text">
            <h1>Book now!</h1>
            <div className="link-wrapper">
              <HashLink to="/#contact-form">Get in touch</HashLink>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="slideshow-container">
          {this.renderSlide()}
          {/* The dots/circles */}
          <div style={{ textAlign: "center" }}>
            <span
              className={this.state.slideCounter == 0 ? "dot active" : "dot"}
              onClick={(e) => this.currentSlide(e)}
              name="0"
            ></span>
            <span
              className={this.state.slideCounter == 1 ? "dot active" : "dot"}
              onClick={(e) => this.currentSlide(e)}
              name="1"
            ></span>
            <span
              className={this.state.slideCounter == 2 ? "dot active" : "dot"}
              onClick={(e) => this.currentSlide(e)}
              name="2"
            ></span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
