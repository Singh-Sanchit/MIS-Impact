import React, { Component } from "react";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";

export default class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavDropdown
            eventKey={2}
            title="Western India"
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Northern India</MenuItem>
            <MenuItem eventKey={2.2}>Southern India</MenuItem>
            <MenuItem eventKey={2.3}>Eastern India</MenuItem>
            <MenuItem eventKey={2.4}>Western India</MenuItem>
            <MenuItem eventKey={2.5}>Central India</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title={localStorage.getItem("username")}
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Profile</MenuItem>
            <MenuItem eventKey={2.2}>Records</MenuItem>
            <MenuItem eventKey={2.3}>Entry</MenuItem>
            <MenuItem eventKey={2.4}>Stats</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5} onSelect={this.props.logout}>
              Logout
            </MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}
