import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PrimaryInfo from "./PrimaryInfo";
import Member from "./Member";
import Investment from "./Investment";
import Asset from "./Asset";
import Expense from "./Expense";
import Income from "./Income";

export default class ShowAllMembers extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <div className="nav-switch-tab_container">
              <input
                id="nav-switch-tab1"
                type="radio"
                name="tabs"
                defaultChecked
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab1" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-info-circle" />
                  Primary Info
                </span>
              </label>
              <input
                id="nav-switch-tab2"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab2" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-user-circle-o" />
                  Members
                </span>
              </label>
              <input
                id="nav-switch-tab3"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab3" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-inr" />
                  Income
                </span>
              </label>
              <input
                id="nav-switch-tab4"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab4" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-credit-card" /> Expenses
                </span>
              </label>
              <input
                id="nav-switch-tab5"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab5" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-pencil-square-o" />
                  Asset
                </span>
              </label>
              <input
                id="nav-switch-tab6"
                type="radio"
                name="tabs"
                className="nav-switch"
              />
              <label htmlFor="nav-switch-tab6" className="nav-switch">
                <span className="nav-switch">
                  <i className="fa fa-bar-chart-o" /> Investments
                </span>
              </label>
              <section
                id="nav-switch-content1"
                className="nav-switch-tab-content nav-switch"
              >
                <PrimaryInfo />
              </section>
              <section
                id="nav-switch-content2"
                className="nav-switch-tab-content nav-switch"
              >
                <Member />
              </section>
              <section
                id="nav-switch-content3"
                className="nav-switch-tab-content nav-switch"
              >
                <Income />
              </section>
              <section
                id="nav-switch-content4"
                className="nav-switch-tab-content nav-switch"
              >
                <Expense />
              </section>
              <section
                id="nav-switch-content5"
                className="nav-switch-tab-content nav-switch"
              >
                <Asset />
              </section>
              <section
                id="nav-switch-content6"
                className="nav-switch-tab-content nav-switch"
              >
                <Investment />
              </section>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}
