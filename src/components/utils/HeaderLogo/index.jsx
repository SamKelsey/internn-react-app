import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./headerLogo.scss";
import config from "../../../config";

const HeaderLogo = ({ extraClasses = "" }) => {
  return (
    <div className={`logo ${extraClasses}`}>
      <Link to="/">
        <img
          src={`${config["s3-images-url"]}/original_design_with_slogan.png`}
          alt="internn logo..."
        />
      </Link>
    </div>
  );
};

HeaderLogo.propTypes = {
  extraClasses: PropTypes.string,
};

export default HeaderLogo;
