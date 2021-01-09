import React, { Component } from "react";
import "./header.css";
import NavLinks from "./subcomponents/NavLinks";
import HeaderLogo from "./subcomponents/HeaderLogo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerMenu: false,
      burgerMenuIsOpen: false,
    };
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

  render() {
    return this.renderContent();
  }
}

export default Header;
