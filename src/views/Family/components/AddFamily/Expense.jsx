import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class Expense extends Component {
  enterNewFamilyExpense = e => {
    e.preventDefault();
    console.log({
      education: e.target.educationexpense.value,
      food: e.target.foodexpense.value,
      medical: e.target.medicalexpense.value,
      mediclaimPolicy: e.target.mediclaimpremium.value,
      month: e.target.monthexpense.value,
      other: e.target.otherexpense.value,
      premium: "Not Present In Given UI",
      rentemi: e.target.rentalexpense.value,
      year: e.target.yearexpense.value
    });
    /* TODO: Make API Call For New Expense Record For Same Family
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/expense/{familyId}",
        {
          education: e.target.educationexpense.value,
          food: e.target.foodexpense.value,
          medical: e.target.medicalexpense.value,
          mediclaimPolicy: e.target.mediclaimpremium.value,
          month: e.target.monthexpense.value,
          other: e.target.otherexpense.value,
          premium: "Not Present In Given UI",
          rentemi: e.target.rentalexpense.value,
          year: e.target.yearexpense.value
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
          "parsing failed at src/views/Family/AddFamily/Expense in enterNewFamilyExpense() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Family Expense Details:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewFamilyExpense}>
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
                            name: "monthexpense",
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
                            name: "yearexpense",
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
                            label: "Rental/EMI Expense",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Rental or EMI per month(if any..)",
                            name: "rentalexpense"
                          },
                          {
                            label: "Medical Expense",
                            type: "text",
                            bsClass: "form-control",
                            placeholder:
                              "Total family medical expense each month",
                            name: "medicalexpense"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Food Expense",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Food expense per month",
                            name: "foodexpense"
                          },
                          {
                            label: "Educational Expense",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Monthly education expense(if any..)",
                            name: "educationexpense"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Family Floater Mediclaim Premium",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Yearly family medical premium",
                            name: "mediclaimpremium"
                          },
                          {
                            label: "Other Expense",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Any other family expense",
                            name: "otherexpense"
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
                            &nbsp;&nbsp;&nbsp; Add Expense Info
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
