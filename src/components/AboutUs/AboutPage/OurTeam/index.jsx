import React, { useContext } from "react";
import "./ourTeam.scss";
import PersonCard from "../../PersonCard";
import { TeamDataContext } from "../../../../contexts/TeamDataContext";

const OurTeam = () => {
  const { teamData, loading } = useContext(TeamDataContext);

  return (
    <div id="meet-the-team" className="our-team-section">
      <h2>Our team</h2>
      {loading
        ? ""
        : teamData.map((teamMember) => (
            <PersonCard key={teamMember.name} {...teamMember} />
          ))}
    </div>
  );
};

export default OurTeam;
