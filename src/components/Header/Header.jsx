import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import HeaderLinks from "./HeaderLinks.jsx";
import MainRoutes from "routes/MainRoutes.jsx";

export default class Header extends Component {
  state = {
    sidebarExists: false
  };

  logoutUser = () => {
    this.props.logout();
  };

  mobileSidebarToggle = e => {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  getBrand = () => {
    var name;
    MainRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  };
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Aga Khan Economic Planning Board for India</Link>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <HeaderLinks logout={this.logoutUser} />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
