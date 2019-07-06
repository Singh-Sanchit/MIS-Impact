import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class BusinessChallenges extends Component {
  enterNewMemberBusinessChallenge = e => {
    e.preventDefault();
    console.log({
      challenge: e.target.businesschallenges.value,
      month: e.target.monthbusinesschallenge.value,
      overcomeMeasures: e.target.overcomechallenges.value,
      year: e.target.yearbusinesschallenge.value
    });
    /* TODO: Make API Call For Add New Business Challanges For Member
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/businesschallenge/{memberId}",
        {
          challenge: e.target.businesschallenges.value,
          month: e.target.monthbusinesschallenge.value,
          overcomeMeasures: e.target.overcomechallenges.value,
          year: e.target.yearbusinesschallenge.value
        },
        {
          headers: {
            "Content-Type": "application/json;",
            "Access-Control-Allow-Origin": "*",
          }
        }
      )
      .then(res => {
        alert("New Record Entered Successfully");
      })
      .catch(error =>
        console.log(
          "parsing failed at src/views/Family/AddMember/BusinessChallenge in enterNewMemberBusinessChallenge() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Member Business Challenges:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewMemberBusinessChallenge}>
                <Card
                  border
                  content={
                    <Fragment>
                      <FormDropdown
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Month",
                            componentClass: "select",
                            placeholder: "select",
                            name: "monthbusinesschallenge",
                            options: [
                              {
                                key: "select",
                                value: "-- select --"
                              },
                              {
                                key: "October",
                                value: "October"
                              },
                              {
                                key: "November",
                                value: "November"
                              }
                            ]
                          },
                          {
                            label: "Year",
                            componentClass: "select",
                            placeholder: "select",
                            name: "yearbusinesschallenge",
                            options: [
                              {
                                key: "select",
                                value: "-- select --"
                              },
                              {
                                key: "2018",
                                value: "2018"
                              },
                              {
                                key: "2017",
                                value: "2017"
                              }
                            ]
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Business Challenges",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "businesschallenges"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Measures To Overcome Challenges",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "overcomechallenges"
                          }
                        ]}
                      />
                      <Row>
                        <Col md={12}>
                          <Button
                            bsStyle="info"
                            fill
                            block
                            type="submit"
                            style={{
                              fontSize: "20px"
                            }}
                          >
                            <i className="fa fa-paper-plane fa-lg" />
                            &nbsp;&nbsp;&nbsp; Add Business Challenges
                          </Button>
                        </Col>
                      </Row>
                      <div className="clearfix" />
                    </Fragment>
                  }
                />
              </form>
            </Row>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
