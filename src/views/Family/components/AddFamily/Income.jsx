import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class Income extends Component {
  enterNewFamilyIncome = e => {
    e.preventDefault();
    console.log({
      institutionalGrant: e.target.institutionalgrant.value,
      interest: e.target.interestincome.value,
      month: e.target.monthincome.value,
      other: e.target.otherincome.value,
      rental: e.target.rentalincome.value,
      year: e.target.yearincome.value
    });
    /* TODO: Make API Call For New Income Record For Same Family
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/income/{familyId}",
        {
          institutionalGrant: e.target.institutionalgrant.value,
          interest: e.target.interestincome.value,
          month: e.target.monthincome.value,
          other: e.target.otherincome.value,
          rental: e.target.rentalincome.value,
          year: e.target.yearincome.value
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
          "parsing failed at src/views/Family/AddFamily/Income in enterNewFamilyIncome() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Family Income Details:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewFamilyIncome}>
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
                            name: "monthincome",
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
                            name: "yearincome",
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
                            label: "Rental Income",
                            type: "text",
                            bsClass: "form-control",
                            placeholder:
                              "Family income earned from rent(if any..)",
                            name: "rentalincome"
                          },
                          {
                            label: "Interest Income",
                            type: "text",
                            bsClass: "form-control",
                            placeholder:
                              "Family income earned from interest(if any..)",
                            name: "interestincome"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Institutional Grant",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Any grant from insitutions",
                            name: "institutionalgrant"
                          },
                          {
                            label: "Others",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Any other type of family income",
                            name: "otherincome"
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
                            &nbsp;&nbsp;&nbsp; Add Income Info
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
