import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class SalaryDetails extends Component {
  enterNewMemberSalary = e => {
    e.preventDefault();
    console.log({
      comments: "Not Present In UI",
      currentJobDescription: e.target.jobdescription.value,
      employerDetails: e.target.employerdetails.value,
      jobTitle: e.target.jobtitle.value,
      month: e.target.monthsalary.value,
      salary: e.target.salary.value,
      year: e.target.yearsalary.value
    });
    /* TODO: Make API Call For Add New Salary Details For Member
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/salary/{memberId}",
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
          "parsing failed at src/views/Family/AddMember/Salary in enterNewMemberSalary() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Member Salary Details:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewMemberSalary}>
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
                            name: "monthsalary",
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
                            name: "yearsalary",
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
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Job Title",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "jobtitle"
                          },
                          {
                            label: "Job Title",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "jobtitle"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Employer Details",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "employerdetails"
                          },
                          {
                            label: "Salary",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "salary"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Job Description",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any",
                            name: "jobdescription"
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
                            &nbsp;&nbsp;&nbsp; Add Salary Details
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
