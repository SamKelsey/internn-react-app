import React from "react";
import TopTile from "../utils/TopTile";
import "./joinUs.scss";
import { scrollToTop } from "../../services/utils";

const {
  title,
  location,
  about,
  responsibilities,
  requirements,
  who,
  how,
} = require("./job-content.json");

const JoinUs = () => {
  scrollToTop();

  return (
    <React.Fragment>
      <TopTile
        title={title}
        subtitle="We are looking for talented students."
        image="IMG_2471-HDR-md.jpg"
      />
      <div className="section-text">
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
            {responsibilities.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="section">
          <p className="header">Role requirements</p>
          <ul>
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
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
    </React.Fragment>
  );
};

export default JoinUs;
