import React, { Component } from "react";
import Slide from "./Slide/Slide";
import Notifications from "../utilities/Notifications/Notifications";
import "./slideshow.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCounter: 0,
      notifications: [],
    };
  }

  componentDidMount() {
    this.toggleSlide();

    // Add notifications to state
    this.setState({
      notifications: [
        {
          message: "Opening 9th July!",
          notificationType: "error",
        },
      ],
    });

    // Set a timer to remove the FIRST notification's from state
    setTimeout(() => {
      this.setState({
        notifications: [
          {
            message: this.state.notifications[0].message,
            notificationType: "none",
          },
        ],
      });
    }, 2500);
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
      return "slides-container position-0";
    } else if (this.state.slideCounter == 1) {
      return "slides-container position-1";
    } else {
      return "slides-container position-2";
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="slideshow-container">
          {this.state.notifications && (
            <Notifications notifications={this.state.notifications} />
          )}
          <div className="slides-outer-wrapper">
            <div className={this.renderSlide()}>
              <Slide
                slideNo="0"
                firstLine="think Property Photography."
                secondLine="think Students."
                thirdLine="think"
              />
              <Slide
                slideNo="1"
                firstLine="Properties sell with students."
                secondLine="View Portfolio"
                thirdLine="Properties sell with"
              />
              <Slide
                slideNo="2"
                firstLine="Rethinking photography."
                secondLine="Book now!"
                thirdLine="Market properties with"
              />
            </div>
          </div>
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
