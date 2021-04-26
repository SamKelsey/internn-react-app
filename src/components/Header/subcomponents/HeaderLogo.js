import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/original_design_with_slogan.png";

class HeaderLogo extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">
          <img className="logo header-logo" src={logo} alt="internn logo..." />
        </Link>
      </React.Fragment>
    );
  }
}

export default HeaderLogo;
