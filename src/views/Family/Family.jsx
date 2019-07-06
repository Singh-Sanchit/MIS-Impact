import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Collapse } from "react-bootstrap";
import Card from "components/Card/Card";
import familiylogo from "assets/img/familiesgreenlogo.png";
import AddFamily from "./components/AddFamily/AddFamily";
import ShowAllFamily from "./components/ShowAllFamily/ShowAllFamily";
import axios from "axios";

export default class Families extends Component {
  state = {
    allFamilyRecord: [],
    open: false,
    delete: false
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_PATH_URL_v1 + "/akepb/family", {
        headers: {
          username: localStorage.getItem("username"),
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        this.setState(prevState => ({ allFamilyRecord: res.data.content }));
      })
      .catch(error => console.log("parsing failed", error));
  }

  updateFamilyRecord = (e, action) => {
    if (action === "add") {
      const allFamilyRecord = [...this.state.allFamilyRecord, e];
      this.setState(prevState => ({ allFamilyRecord: allFamilyRecord }));
    } else {
      let allFamilyRecord = this.state.allFamilyRecord.filter(
        data => data.id !== e
      );
      this.setState(prevState => ({
        allFamilyRecord: allFamilyRecord,
        delete: !this.state.delete
      }));
    }
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
                      {" "}
                      <img src={familiylogo} alt="" /> Families
                    </p>
                  </div>
                  <div className="col-md-4">
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
                        <strong> New Record</strong>
                      </i>
                    )}

                    {this.state.delete ? (
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
                          this.setState({ delete: !this.state.delete })
                        }
                      >
                        <strong> Back</strong>
                      </i>
                    ) : (
                      <i
                        className="fa fa-remove"
                        style={{
                          color: "#ff0000",
                          fontSize: "18px",
                          marginTop: "18px",
                          width: "50%",
                          cursor: "pointer"
                        }}
                        onClick={() =>
                          this.setState({ delete: !this.state.delete })
                        }
                      >
                        <strong> Delete</strong>
                      </i>
                    )}
                  </div>
                  <div className="col-md-4 search-bar">
                    <form action="">
                      <input type="search" />
                      <i className="fa fa-search" />
                    </form>
                  </div>
                </Fragment>
              }
            />
            <Col md={12}>
              <Collapse in={this.state.open}>
                <div>
                  <AddFamily updateFamilyRecord={this.updateFamilyRecord} />
                </div>
              </Collapse>
            </Col>
            <Col md={12}>
              <Card
                ctTableFullWidth
                ctTableResponsive
                ctTableUpgrade
                content={
                  <ShowAllFamily
                    allFamilyRecord={this.state.allFamilyRecord}
                    updateFamilyRecord={this.updateFamilyRecord}
                    delete={this.state.delete}
                  />
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
