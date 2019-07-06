import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class BusinessDetails extends Component {
  enterNewMemberBusinessDetails = e => {
    e.preventDefault();
    console.log({
      activityDetails: e.target.activity.value,
      businessIncome: e.target.businessincome.value,
      businessType: e.target.businesstype.value,
      month: e.target.monthbusinessdetails.value,
      name: e.target.businessname.value,
      ownershipStatus: e.target.ownershipstatus.value,
      year: e.target.yearbusinessdetails.value
    });
    /* TODO: Make API Call For Add New Business Details For Member
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/business/{memberId}",
        {
          activityDetails: e.target.activity.value,
          businessIncome: e.target.businessincome.value,
          businessType: e.target.businesstype.value,
          month: e.target.monthbusinessdetails.value,
          name: e.target.businessname.value,
          ownershipStatus: e.target.ownershipstatus.value,
          year: e.target.yearbusinessdetails.value
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
          "parsing failed at src/views/Family/AddMember/BusinessDetails in enterNewMemberBusinessDetails() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Business Details:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewMemberBusinessDetails}>
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
                            name: "monthbusinessdetails",
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
                            name: "yearbusinessdetails",
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
                            label: "Business Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder:
                              "Family income earned from rent(if any..)",
                            name: "businessname"
                          },
                          {
                            label: "Business Type",
                            type: "text",
                            bsClass: "form-control",
                            placeholder:
                              "Family income earned from interest(if any..)",
                            name: "businesstype"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Activity",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Any grant from insitutions",
                            name: "activity"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Business Income",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Any grant from insitutions",
                            name: "businessincome"
                          },
                          {
                            label: "Ownership Status",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Any other type of family income",
                            name: "ownershipstatus"
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
                            &nbsp;&nbsp;&nbsp; Add Business Info
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
