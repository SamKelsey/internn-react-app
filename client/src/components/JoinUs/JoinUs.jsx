import React, { Component } from "react";
import "./joinUs.css";

import PageHeader from "../utilities/PageHeader/PageHeader";

class JoinUs extends Component {
  render() {
    const {
      title,
      location,
      about,
      responsibilities,
      requirements,
      who,
      how,
    } = require("./job-content.json");

    return (
      <div className="section-text">
        <PageHeader
          title={title}
          subtitle="We are looking for talented students."
        />
        <div className="section">
          <p>
            <span className="bold-text">Location:</span> {location}
          </p>
        </div>
        <div className="section">
          <p className="header">About internn</p>
          <p>{about}</p>
        </div>
        <div className="section">
          <p className="header">Role responsibilities</p>
          <p>{responsibilities.paragraph}</p>
          <ul>
            {responsibilities.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <p className="header">Role requirements</p>
          <ul>
            {requirements.map((requirement) => (
              <li>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <p className="header">Who should apply for this role?</p>
          <p>{who}</p>
        </div>
        <div className="section">
          <p className="header">How to apply</p>
          <p>{how}</p>
        </div>
      </div>
    );
  }
}

export default JoinUs;
