import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderLinks from "../Header/HeaderLinks.jsx";
import imagine from "assets/img/sidebar-3.jpg";
import logo from "assets/img/logo.png";
import MainRoutes from "routes/MainRoutes.jsx";

export default class Sidebar extends Component {
  state = {
    width: window.innerWidth
  };
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <div className="logo-img">
            <Link to="/">
              <img src={logo} alt="mis_image" />
            </Link>
          </div>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            {MainRoutes.map((prop, key) => {
              if (prop.sidebar)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <img src={prop.icon} alt="" />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{prop.name}
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
