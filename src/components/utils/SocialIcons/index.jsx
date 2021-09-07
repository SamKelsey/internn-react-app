import React from "react";
import "./socialIcons.scss";

const SocialIcons = ({ extraClasses }) => {
  return (
    <div className={`social-icons ${extraClasses}`}>
      <a href="https://www.facebook.com/internnOfficial">
        <i class="fab fa-facebook-square"></i>
      </a>
      <a href="https://www.instagram.com/internnofficial">
        <i className="fab fa-instagram fa-fw"></i>
      </a>
      <a href="https://www.linkedin.com/company/internn">
        <i className="fab fa-linkedin fa-fw"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
