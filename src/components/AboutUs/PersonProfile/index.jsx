import React from "react";
import "./personProfile.scss";
import TopTile from "../../utils/TopTile";
import PersonCard from "../PersonCard";
import { useParams } from "react-router";
import peopleInfo from "../AboutPage/OurTeam/teamInfo";
import { kebabToSentence } from "../../../services/stringServices";
import PropertyPhoto from "../../utils/PropertyPhoto";

const PersonProfile = () => {
  const name = kebabToSentence(useParams().name);

  const getPersonInfo = () => {
    return peopleInfo.filter((person) => person.name === name)[0];
  };

  return (
    <div>
      <TopTile image="IMG_0220.JPG">
        <PersonCard expanded {...getPersonInfo()} />
      </TopTile>
      <PropertyPhoto />
    </div>
  );
};

export default PersonProfile;