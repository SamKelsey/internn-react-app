import React from "react";
import { Link } from "react-router-dom";
import "./personCard.scss";
import config from "../../../../config";

const PersonCard = ({ name, role, bio, instagram, facebook, image }) => {
  return (
    <div className="person-card">
      <div className="person-card-text">
        <div className="headers">
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        <p>{bio}</p>
        <Link className="person-card-button">View my work</Link>
      </div>
      <img
        src={`${config["s3-images-url"]}/IMG_0220.JPG`}
        alt="profile picture"
      />
    </div>
  );
};

export default PersonCard;
