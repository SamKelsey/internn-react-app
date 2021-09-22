import React from "react";
import "./personProfile.scss";
import TopTile from "../../utils/TopTile";
import PersonCard from "../PersonCard";
import { useParams } from "react-router";
import peopleInfo from "../AboutPage/OurTeam/teamInfo";
import { kebabToSentence } from "../../../services/stringServices";
import PropertyPhoto from "../../utils/PropertyPhoto";
import PhotoGallery from "../../utils/PhotoGallery";

const PersonProfile = () => {
  const name = kebabToSentence(useParams().name);

  const getPersonInfo = () => {
    return peopleInfo.filter((person) => person.name === name)[0];
  };

  const personInfo = getPersonInfo();

  return (
    <div className="section-person-profile">
      <TopTile image="IMG_1472-lg.jpg">
        <PersonCard expanded {...personInfo} />
      </TopTile>
      <h2>Portfolio</h2>
      <PhotoGallery images={personInfo.portfolio} />
    </div>
  );
};

export default PersonProfile;
