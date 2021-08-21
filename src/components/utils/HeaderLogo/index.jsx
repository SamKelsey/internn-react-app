import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../../images/original_design_with_slogan.png";
import "./headerLogo.scss";

const HeaderLogo = ({ extraClasses = "" }) => {
  return (
    <div className={`logo ${extraClasses}`}>
      <Link to="/">
        <img src={logo} alt="internn logo..." />
      </Link>
    </div>
  );
};

HeaderLogo.propTypes = {
  extraClasses: PropTypes.string,
};

export default HeaderLogo;
