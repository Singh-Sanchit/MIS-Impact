import React, { Component } from "react";
import { Grid } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/family">Family</a>
              </li>
              <li>
                <a href="/universe">Universe</a>
              </li>
              <li>
                <a href="/programs">Programs</a>
              </li>
              <li>
                <a href="/reports">Reports</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.techskillsit.com/">TechSkillsIT</a>, made with
            love for a better web
          </p>
        </Grid>
      </footer>
    );
  }
}
