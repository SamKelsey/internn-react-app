import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

class NavLinks extends Component {
  render() {
    return (
      <React.Fragment>
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
          <HashLink
            to="/#contact-form"
            onClick={(e) =>
              this.props.isBurgerMenu ? this.props.toggleBurgerMenu(e) : ""
            }
          >
            Get in touch
          </HashLink>
        </li>
      </React.Fragment>
    );
  }
}

export default NavLinks;
