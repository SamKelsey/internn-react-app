import React, { Component } from "react";
import "./header.css";
import NavLinks from "./subcomponents/NavLinks";
import HeaderLogo from "./subcomponents/HeaderLogo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerMenu: false,
    };
  }

  handleResize() {
    if (document.documentElement.clientWidth < 800) {
      this.setState({
        isBurgerMenu: true,
      });
    } else {
      this.setState({
        isBurgerMenu: false,
      });
    }
  }

  toggleMenu(e) {
    const burgerMenu = document.querySelector(".burger-menu");
    if (burgerMenu.style.display == "block") {
      burgerMenu.style.display = "none";
      e.target.classList.remove("change");
    } else {
      burgerMenu.style.display = "block";
      e.target.classList.add("change");
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.handleResize();
    });
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
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
            className="menu-button"
            onClick={(e) => {
              this.toggleMenu(e);
            }}
          >
            <div className="menu-button-line bar1"></div>
            <div className="menu-button-line bar2"></div>
            <div className="menu-button-line bar3"></div>
          </button>
          <div className="burger-menu">
            <div className="burger-menu-links-container">
              <ul className="burger-nav">
                <NavLinks />
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
              <NavLinks />
            </ul>
          </nav>
        </React.Fragment>
      );
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Header;
