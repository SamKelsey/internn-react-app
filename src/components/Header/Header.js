import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import NavLinks from "./subcomponents/NavLinks";
import HeaderLogo from "./subcomponents/HeaderLogo";

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
    window.addEventListener("resize", () => {
      this.handleResize();
    });
    this.handleResize();

    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleResize() {
    if (document.documentElement.clientWidth <= 800) {
      this.setState({
        isBurgerMenu: true,
        stickyHeader: false,
      });
    } else {
      this.setState({
        isBurgerMenu: false,
      });
    }
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

  toggleBurgerMenu() {
    this.setState({ burgerMenuIsOpen: !this.state.burgerMenuIsOpen });
  }

  renderContent() {
    if (this.state.isBurgerMenu) {
      return (
        <React.Fragment>
          <div className="burger-logo">
            <HeaderLogo />
          </div>
          <button
            id="burger-button"
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
            <div className="burger-menu-links-container">
              <ul className="burger-nav">
                <NavLinks
                  isBurgerMenu={this.state.isBurgerMenu}
                  toggleBurgerMenu={this.toggleBurgerMenu.bind(this)}
                />
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav>
            <HeaderLogo />
            <ul className="nav-links">
              <NavLinks
                isBurgerMenu={this.state.isBurgerMenu}
                toggleBurgerMenu={this.toggleBurgerMenu.bind(this)}
              />
            </ul>
          </nav>
        </React.Fragment>
      );
    }
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
            <HeaderLogo />
          </div>
          <Link to="/make-a-booking" className="booking-link">
            <h2>Book now!</h2>
          </Link>
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
