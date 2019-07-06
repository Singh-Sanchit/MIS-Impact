import React, { Component, Fragment } from "react";
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class Investment extends Component {
  state = {
    selectedOption: "none"
  };

  handleRadioButton = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  enterNewFamilyInvestment = e => {
    e.preventDefault();
    console.log({
      creditors: e.target.creditors.value,
      isInvestment: "What Value To Be Putten Boolean or Yes/No",
      loanAmount: e.target.loans.value,
      month: e.target.monthinvestment.value,
      ownFunds: e.target.ownfunds.value,
      year: e.target.yearinvestment.value
    });

    /* TODO: Make API Call For New Investment Record For Same Family
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/investment/{familyId}",
        {
          creditors: e.target.creditors.value,
          isInvestment: "What Value To Be Putten Boolean or Yes/No",
          loanAmount: e.target.loans.value,
          month: e.target.monthinvestment.value,
          ownFunds: e.target.ownfunds.value,
          year: e.target.yearinvestment.value
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
          "parsing failed at src/views/Family/AddFamily/Investment in enterNewFamilyInformation() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Family Investment Info:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewFamilyInvestment}>
                <Card
                  border
                  content={
                    <Fragment>
                      <h5>Any Business Investment? </h5>
                      <div className="radio">
                        <input
                          id="1"
                          type="radio"
                          name="yes"
                          value="yes"
                          checked={this.state.selectedOption === "yes"}
                          onChange={this.handleRadioButton}
                        />
                        <label htmlFor="1">Yes</label>
                      </div>
                      <div className="radio">
                        <input
                          id="2"
                          type="radio"
                          name="no"
                          value="no"
                          checked={this.state.selectedOption === "no"}
                          onChange={this.handleRadioButton}
                        />
                        <label htmlFor="2">No</label>
                      </div>
                      {this.state.selectedOption === "yes" ? (
                        <Fragment>
                          <h5>Please Provide Information about Investment</h5>
                          <FormDropdown
                            ncols={["col-md-6", "col-md-6"]}
                            proprieties={[
                              {
                                label: "Month",
                                componentClass: "select",
                                placeholder: "select",
                                name: "monthinvestment",
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
                                name: "yearinvestment",
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
                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                            proprieties={[
                              {
                                label: "Own Funds",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Enter Own Funds",
                                name: "ownfunds"
                              },
                              {
                                label: "Loans",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Enter Loans",
                                name: "loans"
                              },
                              {
                                label: "Creditors",
                                type: "text",
                                bsClass: "form-control",
                                placeholder: "Enter Creditors",
                                name: "creditors"
                              }
                            ]}
                          />
                        </Fragment>
                      ) : (
                        ""
                      )}
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
                            &nbsp;&nbsp;&nbsp; Add Investment Info
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
