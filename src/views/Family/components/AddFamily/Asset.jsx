import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class Asset extends Component {
  state = {
    checkbox: [
      {
        checkboxName: "House",
        isChecked: false,
        inputBox: "House Details",
        name: "houseasset"
      },
      {
        checkboxName: "Land",
        isChecked: false,
        inputBox: "Land Details",
        name: "landasset"
      },
      {
        checkboxName: "Shop",
        isChecked: false,
        inputBox: "Shop Details",
        name: "shopasset"
      },
      {
        checkboxName: "Vehicle",
        isChecked: false,
        inputBox: "Vehical Details",
        name: "vehicleasset"
      },
      {
        checkboxName: "Savings",
        isChecked: false,
        inputBox: "Savings Details",
        name: "savingsasset"
      }
    ]
  };

  handleCheckboxClick = e => {
    let checkbox = this.state.checkbox.filter(
      data => e.target.id === data.checkboxName
    );
    checkbox[0].isChecked = !checkbox[0].isChecked;
    this.setState({});
  };

  enterNewFamilyAsset = e => {
    e.preventDefault();
    console.log({
      house: e.target.houseasset.value,
      land: e.target.landasset.value,
      month: e.target.monthasset.value,
      otherDetails: e.target.otherasset.value,
      savings: e.target.savingsasset.value,
      shop: e.target.shopasset.value,
      vehicle: e.target.vehicleasset.value,
      year: e.target.yearasset.value
    });

    /* TODO: Make API Call For New Asset Record For Same Family
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/asset/{familyId}",
        {
          house: e.target.houseasset.value,
          land: e.target.landasset.value,
          month: e.target.monthasset.value,
          otherDetails: e.target.otherasset.value,
          savings: e.target.savingsasset.value,
          shop: e.target.shopasset.value,
          vehicle: e.target.vehicleasset.value,
          year: e.target.yearasset.value
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
          "parsing failed at src/views/Family/AddFamily/Asset in enterNewFamilyAsset() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Family Asset Information:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewFamilyAsset}>
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
                            name: "monthasset",
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
                            name: "yearasset",
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
                      {this.state.checkbox.map((data, key) => {
                        return (
                          <Fragment key={key}>
                            <Row>
                              <div
                                className="checkbox col-md-2"
                                key={data.checkboxName}
                                style={{ paddingLeft: "30px" }}
                              >
                                <input
                                  id={data.checkboxName}
                                  type="checkbox"
                                  checked={data.isChecked}
                                  onChange={this.handleCheckboxClick}
                                />
                                <label htmlFor={data.checkboxName}>
                                  {data.checkboxName}
                                </label>
                              </div>
                              <div className="col-md-6">
                                {data.isChecked ? (
                                  <FormInputs
                                    ncols={[""]}
                                    proprieties={[
                                      {
                                        type: "text",
                                        bsClass: "form-control",
                                        placeholder: `${data.inputBox}`,
                                        name: `${data.name}`
                                      }
                                    ]}
                                  />
                                ) : (
                                  ""
                                )}
                              </div>
                            </Row>
                          </Fragment>
                        );
                      })}
                      <br />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Other Assets",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Other Assets, If Any  ",
                            name: "otherasset"
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
                            &nbsp;&nbsp;&nbsp; Add Asset Info
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
