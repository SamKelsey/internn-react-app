import React, { Component } from "react";
import config from "../../config";

import "./header.scss";
import NavLinks from "./NavLinks";
import HeaderLogo from "../utils/HeaderLogo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (window.scrollY > 88) {
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
            toggleBurgerMenu={this.toggleBurgerMenu.bind(this)}
            extraClasses="header-links"
          />
        </nav>
        <nav className="burger-menu-wrapper">
          <HeaderLogo extraClasses="burger-logo header-logo" />
          <button
            className={
              this.state.burgerMenuIsOpen === true
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
              display: this.state.burgerMenuIsOpen === true ? "block" : "none",
            }}
            className="burger-menu"
          >
            <NavLinks
              toggleBurgerMenu={this.toggleBurgerMenu.bind(this)}
              extraClasses="burger-links"
            />
          </div>
        </nav>
      </React.Fragment>
    );
  }

  renderStickyHeader() {
    return (
      <div
        className={
          this.state.stickyHeader
            ? "section-stickyHeader stickyHeader-active"
            : "section-stickyHeader"
        }
      >
        <div className="stickyHeader-inner">
          <HeaderLogo extraClasses="stickyHeader-logo" />
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
