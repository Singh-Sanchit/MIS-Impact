import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import AddMember from "./components/AddMember/AddMember";
import ShowAllMembers from "./components/ShowAllMembers/ShowAllMembers";

export default class FamilyDetails extends Component {
  state = {
    allMembers: [],
    familyId: this.props.match.params.familyId,
    open: false
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Card
              plain
              content={
                <Fragment>
                  <div className="col-md-4">
                    <p
                      style={{
                        color: "#10897b",
                        fontWeight: "600",
                        float: "left",
                        fontSize: "32px"
                      }}
                    >
                      <i
                        className="fa fa-home"
                        style={{ paddingRight: "30px" }}
                      />{" "}
                      Families Details
                    </p>
                  </div>
                  <div className="col-md-8">
                    {this.state.open ? (
                      <i
                        className="fa fa-backward"
                        style={{
                          color: "#ff0000",
                          fontSize: "18px",
                          marginTop: "18px",
                          width: "50%",
                          cursor: "pointer"
                        }}
                        onClick={() =>
                          this.setState({ open: !this.state.open })
                        }
                      >
                        <strong> Back</strong>
                      </i>
                    ) : (
                      <i
                        className="fa fa-user-plus"
                        style={{
                          color: "#2669d6",
                          fontSize: "18px",
                          marginTop: "18px",
                          width: "50%",
                          cursor: "pointer"
                        }}
                        onClick={() =>
                          this.setState({ open: !this.state.open })
                        }
                      >
                        <strong> Add Member</strong>
                      </i>
                    )}

                    <i
                      className="fa fa-remove"
                      style={{
                        color: "#ff0000",
                        fontSize: "18px",
                        marginTop: "18px",
                        width: "50%",
                        cursor: "pointer"
                      }}
                    >
                      <strong> Delete Family</strong>
                    </i>
                  </div>
                </Fragment>
              }
            />
            {this.state.open ? (
              <Col md={12}>
                <AddMember />
              </Col>
            ) : (
              <Col md={12}>
                <ShowAllMembers />
              </Col>
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}
