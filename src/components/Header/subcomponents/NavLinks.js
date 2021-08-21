import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import config from "../../../config.json";
import "./navlinks.scss";

class NavLinks extends Component {
  render() {
    return (
      <ul className="nav-links">
        <li className="nav-link">
          <HashLink
            to="/#about-us"
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            About us
          </HashLink>
        </li>
        <li className="nav-link">
          <Link
            to="/portfolio"
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-link">
          <HashLink
            to="/#section-pricing"
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            Pricing
          </HashLink>
        </li>
        <li className="nav-link">
          <Link
            to="/blog"
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            Blog
          </Link>
        </li>
        <li className="nav-link">
          <HashLink
            to="/#contact-form"
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            Get in touch
          </HashLink>
        </li>
        <li className="nav-link header-booking-link">
          <a
            href={config["booking-url"]}
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            Book now!
          </a>
        </li>
      </ul>
    );
  }
}

export default NavLinks;
