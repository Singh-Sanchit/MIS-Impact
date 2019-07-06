import React, { Component, Fragment } from "react";
import { Grid, Row, Collapse } from "react-bootstrap";
import Card from "components/Card/Card";
import FamilyInvestment from "../AddFamily/Investment";

export default class Investment extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <h4>
              Family Investment Record:
              {this.state.open ? (
                <strong
                  className="pull-right"
                  onClick={() => this.setState({ open: !this.state.open })}
                  style={{
                    color: "#ff0000",
                    fontSize: "16px",
                    textAlign: "right",
                    cursor: "pointer"
                  }}
                >
                  <i className="fa fa-backward" /> Back
                </strong>
              ) : (
                <strong
                  className="pull-right"
                  onClick={() => this.setState({ open: !this.state.open })}
                  style={{
                    color: "#2669d6",
                    fontSize: "16px",
                    textAlign: "right",
                    cursor: "pointer"
                  }}
                >
                  <i className="fa fa-plus" /> Add
                </strong>
              )}
            </h4>
            <Collapse in={this.state.open}>
              <div>
                <FamilyInvestment />
              </div>
            </Collapse>
            <Card
              border
              content={
                <Fragment>
                  <i
                    className="fa fa-trash pull-right"
                    style={{
                      color: "#ff0000",
                      fontSize: "18px"
                    }}
                  />
                  <i
                    className="fa fa-edit pull-right"
                    style={{
                      color: "#2669d6",
                      fontSize: "18px",
                      fontWeight: "700"
                    }}
                  />
                  <h5>
                    Month:
                    <strong> october</strong>
                  </h5>
                  <h5>
                    year:<strong> 2018</strong>
                  </h5>

                  <h5>Rental: 0</h5>
                  <h5>Interest: 0</h5>
                  <h5>Institutional Grant: 0</h5>
                  <h5>Other Income:</h5>
                  <h5>
                    <strong>Total Income: Rs.</strong>
                  </h5>
                </Fragment>
              }
            />
          </Row>
        </Grid>
      </div>
    );
  }
}
