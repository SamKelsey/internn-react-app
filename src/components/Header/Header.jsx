import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config.json";

import "./header.scss";
import NavLinks from "./NavLinks";
import HeaderLogo from "../utils/HeaderLogo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerMenu: false,
      burgerMenuIsOpen: false,
      stickyHeader: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 88 && !this.state.isBurgerMenu) {
      this.setState({
        stickyHeader: true,
      });
    } else {
      this.setState({
        stickyHeader: false,
      });
    }
  }

  toggleBurgerMenu(e, value) {
    if (typeof value === "undefined") {
      this.setState({ burgerMenuIsOpen: !this.state.burgerMenuIsOpen });
    } else {
      this.setState({ burgerMenuIsOpen: value });
    }
  }

  renderContent() {
    return (
      <React.Fragment>
        <nav className="header-wrapper">
          <HeaderLogo extraClasses="header-logo" />
          <NavLinks
            isBurgerMenu={this.state.isBurgerMenu}
            toggleBurgerMenu={this.toggleBurgerMenu.bind(this)}
          />
        </nav>
        <div className="burger-menu-wrapper">
          <HeaderLogo extraClasses="burger-logo header-logo" />
          <button
            className={
              this.state.burgerMenuIsOpen == true
                ? "menu-button change"
                : "menu-button"
            }
            onClick={(e) => {
              this.toggleBurgerMenu(e);
            }}
          >
            <div className="menu-button-line bar1"></div>
            <div className="menu-button-line bar2"></div>
            <div className="menu-button-line bar3"></div>
          </button>
          <div
            style={{
              display: this.state.burgerMenuIsOpen == true ? "block" : "none",
            }}
            className="burger-menu"
          >
            <NavLinks
              isBurgerMenu={this.state.isBurgerMenu}
              toggleBurgerMenu={this.toggleBurgerMenu.bind(this)}
              extraClasses="burger-links"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderStickyHeader() {
    return (
      <div
        className={
          this.state.stickyHeader
            ? "section-stickyHeader header-active"
            : "section-stickyHeader"
        }
      >
        <div className="stickyHeader-inner">
          <div className="stickyHeader-logo">
            <HeaderLogo extraClasses="header-logo" />
          </div>
          <a href={config["booking-url"]} className="booking-link">
            <h2>Book now!</h2>
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="section-header">
        {this.renderStickyHeader()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Header;
