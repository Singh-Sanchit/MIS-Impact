import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class PrimaryInfo extends Component {
  enterNewFamily = e => {
    e.preventDefault();
    console.log({
      address: e.target.address.value,
      city: e.target.city.value,
      jkCenter: e.target.jkcenter.value,
      lastName: e.target.lastname.value,
      localCouncil: "Not Present In Given UI",
      regionalCouncil: "Not Present In Given UI",
      state: e.target.state.value
    });
    /* TODO: Make API Call For New Family Record
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/family",
        {
          address: e.target.address.value,
          city: e.target.city.value,
          jkCenter: e.target.jkcenter.value,
          lastName: e.target.lastname.value,
          localCouncil: e.target.localcouncil.value,
          regionalCouncil: e.target.regionalcouncil.value,
          state: e.target.state.value,
        },
        {
          headers: {
            "Content-Type": "application/json;",
            "Access-Control-Allow-Origin": "*",
            "username": localStorage.getItem("username")
          }
        }
      )
      .then(res => {
        this.props.updateFamilyRecord(res.data);
        alert("New Record Entered Successfully");
      })
      .catch(error =>
        console.log(
          "parsing failed at src/views/Family/AddFamily/PrimaryInfo in enterNewFamily() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Family General Info:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewFamily}>
                <Card
                  border
                  content={
                    <Fragment>
                      <FormInputs
                        ncols={["col-md-6"]}
                        proprieties={[
                          {
                            label: "Last Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter Your LastName..",
                            name: "lastname"
                          }
                        ]}
                      />
                      <FormDropdown
                        ncols={["col-md-6"]}
                        proprieties={[
                          {
                            label: "JamatKhana Center",
                            componentClass: "select",
                            placeholder: "Select",
                            name: "jkcenter",
                            options: [
                              {
                                key: "select",
                                value: "-- select --"
                              },
                              {
                                key: "Sanjan",
                                value: "Sanjan"
                              },
                              {
                                key: "Vapi",
                                value: "Vapi"
                              }
                            ]
                          }
                        ]}
                      />

                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "City",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter Your City",
                            name: "city"
                          },
                          {
                            label: "State",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter Your State",
                            name: "state"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        proprieties={[
                          {
                            label: "Address",
                            type: "text",
                            bsClass: "form-control",
                            placeholder:
                              "FlatNo, Building Name, Locality, Street",
                            name: "address"
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
                            &nbsp;&nbsp;&nbsp; Create New Family
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
