import React from "react";
import "./personCard.scss";

const PersonCard = ({ name, role, bio, instagram, facebook, image }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{role}</div>
      <div>{bio}</div>
      <div>{instagram}</div>
      <div>{facebook}</div>
      <div>{image}</div>
    </div>
  );
};

export default PersonCard;
