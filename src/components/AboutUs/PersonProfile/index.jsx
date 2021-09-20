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

  const personInfo = getPersonInfo();

  const renderPortfolio = () => {
    const col1 = [];
    const col2 = [];

    personInfo.portfolio.forEach((image, index) =>
      index % 2 === 0 ? col1.push(image) : col2.push(image)
    );

    return (
      <div className="person-profile-portfolio">
        <div className="col1">
          {col1.map((image) => (
            <PropertyPhoto extraClasses="person-profile-photo" image={image} />
          ))}
        </div>
        <div className="col2">
          {col2.map((image) => (
            <PropertyPhoto extraClasses="person-profile-photo" image={image} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <TopTile image="IMG_1472-lg.jpg">
        <PersonCard expanded {...personInfo} />
      </TopTile>
      {renderPortfolio()}
    </div>
  );
};

export default PersonProfile;
