import React from "react";
import "./about.css";

import Card from "./Card/Card";

class About extends React.Component {
  render() {
    return (
      <div className="section-about-us" id="about-us">
        <h1>What is internn?</h1>
        <div className="about-cards">
          <Card
            icon="fas fa-users"
            title="Your property starts with students"
            body="Use our team of students, based in Aberdeen, to photograph your property for a fraction of the price."
          />
          <Card
            icon="fas fa-award"
            title="Professional quality"
            body="Us internn's unrivalled passion for photography leads us to delivering outstanding quality. Don't believe us? Check out our portfolio."
          />
          <Card
            icon="fas fa-pound-sign"
            title="Unbeatable pricing"
            body="As internn's, we are here, simply, to gain experience. Use our price calculator below for an instant quote. You'll be surprised."
          />
        </div>
      </div>
    );
  }
}

export default About;
