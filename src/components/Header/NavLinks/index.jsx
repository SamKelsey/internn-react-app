import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import config from "../../../config.json";
import "./navlinks.scss";
import links from "./linkInfo.js";

const NavLinks = ({ isBurgerMenu, toggleBurgerMenu }) => {
  return (
    <ul className="nav-links">
      {links.map(({ linkName, relativePath }) => (
        <li key={linkName} className="nav-link">
          {relativePath.includes("#") ? (
            <HashLink
              to={relativePath}
              onClick={(e) => toggleBurgerMenu(e, false)}
            >
              {linkName}
            </HashLink>
          ) : (
            <Link to={relativePath} onClick={(e) => toggleBurgerMenu(e, false)}>
              {linkName}
            </Link>
          )}
        </li>
      ))}
      <li className="nav-link header-booking-link">
        <a
          href={config["booking-url"]}
          onClick={(e) => (isBurgerMenu ? toggleBurgerMenu(e) : "")}
        >
          Book now!
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
