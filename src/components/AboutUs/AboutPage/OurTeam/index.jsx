import React from "react";
import "./ourTeam.scss";
import teamInfo from "./teamInfo";
import PersonCard from "../../PersonCard";

const OurTeam = () => {
  return (
    <div className="our-team-section">
      <h2>Our team</h2>
      {teamInfo.map((teamMember) => (
        <PersonCard key={teamMember.name} {...teamMember} />
      ))}
    </div>
  );
};

export default OurTeam;
