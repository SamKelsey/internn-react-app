import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import config from "../../../config";
import "./navlinks.scss";
import links from "./linkInfo.js";

const NavLinks = ({ toggleBurgerMenu, extraClasses }) => {
  return (
    <ul className={`nav-links ${extraClasses}`}>
      {links.map(({ linkName, relativePath }) =>
        relativePath.includes("#") ? (
          <HashLink
            to={relativePath}
            onClick={(e) => toggleBurgerMenu(e, false)}
            className="nav-link"
            key={linkName}
          >
            {linkName}
          </HashLink>
        ) : (
          <Link
            to={relativePath}
            className="nav-link"
            onClick={(e) => toggleBurgerMenu(e, false)}
            key={linkName}
          >
            {linkName}
          </Link>
        )
      )}
      <a
        className="nav-link header-booking-link"
        href={config["booking-url"]}
        onClick={(e) => toggleBurgerMenu(e, false)}
      >
        Book now!
      </a>
    </ul>
  );
};

export default NavLinks;
