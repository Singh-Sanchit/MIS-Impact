import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PrimaryInfo from "../AddMember/PrimaryInfo";
import BusinessChallenges from "./BusinessChallenges";
import BusinessDetails from "./BusinessDetails";
import SalaryDetails from "./SalaryDetails";

export default class AddMember extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <div className="nav-switch-tab_container">
              <input
                id="nav-switch-tab7"
                type="radio"
                name="tabs"
                defaultChecked
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab7" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-info-circle" />
                  Primary Info
                </span>
              </label>
              <input
                id="nav-switch-tab8"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab8" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-address-book-o" />
                  Business Details
                </span>
              </label>
              <input
                id="nav-switch-tab9"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab9" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-puzzle-piece" />
                  Business Challenges
                </span>
              </label>
              <input
                id="nav-switch-tab10"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab10" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-inr" />
                  Salary Details
                </span>
              </label>
              <section
                id="nav-switch-content7"
                className="nav-switch-tab-content nav-switch"
              >
                <PrimaryInfo />
              </section>

              <section
                id="nav-switch-content8"
                className="nav-switch-tab-content nav-switch"
              >
                <BusinessDetails />
              </section>

              <section
                id="nav-switch-content9"
                className="nav-switch-tab-content nav-switch"
              >
                <BusinessChallenges />
              </section>
              <section
                id="nav-switch-content10"
                className="nav-switch-tab-content nav-switch"
              >
                <SalaryDetails />
              </section>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
