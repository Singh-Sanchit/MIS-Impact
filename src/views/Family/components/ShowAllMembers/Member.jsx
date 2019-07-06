import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";

export default class Member extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <h4>Members:</h4>
            <Col md={4}>
              <Card
                border
                statsIcon="fa fa-history"
                stats="3 Task 4 Overdue"
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
                      <strong> Nizarbhai Badruddin Hudda</strong>
                    </h5>
                    <h5>Age : 41 years</h5>
                    <h5>Gender: male</h5>
                    <h5>Contact: 9924172275</h5>
                    <h5>Qualification: SSC</h5>
                    <h5>Relation: Head Of Family</h5>
                  </Fragment>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-history"
                stats="3 Task 4 Overdue"
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
                      <strong> Nizarbhai Badruddin Hudda</strong>
                    </h5>
                    <h5>Age : 41 years</h5>
                    <h5>Gender: male</h5>
                    <h5>Contact: 9924172275</h5>
                    <h5>Qualification: SSC</h5>
                    <h5>Relation: Head Of Family</h5>
                  </Fragment>
                }
              />
            </Col>
          </Row>
        </Grid>
        {/* this.state.allMembers.map((data, key) => {
          return (
            <Col md={4} key={key}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title={
                  data.firstName + " " + data.middleName + " " + data.lastName
                }
                category={data.gender + ", " + data.dateOfBirth}
                stats="3 Task 4 Overdue"
                content={"Hello"}
              />
            </Col>
          );
        }) */}
      </div>
    );
  }
}
