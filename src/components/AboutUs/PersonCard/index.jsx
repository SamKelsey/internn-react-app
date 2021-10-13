import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./personCard.scss";
import config from "../../../config";
import { toKebabCase } from "../../../services/stringServices";

import SocialIcons from "../../utils/SocialIcons";

const PersonCard = ({
  name,
  role,
  bio,
  instagram,
  facebook,
  linkedIn,
  image,
  expanded,
}) => {
  let { url } = useRouteMatch();

  const renderButton = () =>
    expanded ? (
      <a href={config["booking-url"]} className="person-card-button">
        Book now
      </a>
    ) : (
      <Link to={`${url}/${toKebabCase(name)}`} className="person-card-button">
        View my work
      </Link>
    );

  return (
    <div className={`person-card ${expanded && "person-card--expanded"}`}>
      <div className="person-card-text">
        <div className="headers">
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        {expanded && (
          <SocialIcons fbLink={facebook} igLink={instagram} liLink={linkedIn} />
        )}
        <p>{bio}</p>
        {renderButton()}
      </div>
      <img
        src={`${config["s3-images-url"]}/${image}`}
        alt="Employee headshot"
      />
    </div>
  );
};

export default PersonCard;
