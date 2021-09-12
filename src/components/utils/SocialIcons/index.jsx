import React from "react";
import "./socialIcons.scss";

const SocialIcons = ({ fbLink, igLink, liLink, extraClasses }) => {
  return (
    <div className={`social-icons ${extraClasses}`}>
      <a href={fbLink ? fbLink : "https://www.facebook.com/internnOfficial"}>
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href={igLink ? igLink : "https://www.instagram.com/internnofficial"}>
        <i className="fab fa-instagram fa-fw"></i>
      </a>
      <a href={liLink ? liLink : "https://www.linkedin.com/company/internn"}>
        <i className="fab fa-linkedin fa-fw"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
