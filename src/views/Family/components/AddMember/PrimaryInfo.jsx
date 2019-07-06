import React, { Component, Fragment } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card";
import FormInputs from "components/FormInputs/FormInputs";
import FormDropdown from "components/FormDropdown/FormDropdown";
import Button from "components/CustomButton/CustomButton";

export default class PrimaryInfo extends Component {
  enterNewMember = e => {
    e.preventDefault();
    console.log({
      age: e.target.age.value,
      contact: e.target.contact.value,
      dateOfBirth: "Not Present In Given UI",
      firstName: e.target.fname.value,
      gender: e.target.gender.value,
      lastName: e.target.lname.value,
      middleName: e.target.mname.value,
      qualification: e.target.qualification.value,
      relationship: e.target.relation.value
    });
    /* TODO: Make API Call For Add New Member
    axios
      .post(
        process.env.PATH_URL_v1 + "/akepb/member/{familyID}",
        {
          age: e.target.age.value,
          contact: e.target.contact.value,
          dateOfBirth: "Not Present In Given UI",
          firstName: e.target.fname.value,
          gender: e.target.gender.value,
          lastName: e.target.lname.value,
          middleName: e.target.mname.value,
          qualification: e.target.qualification.value,
          relationship: e.target.relation.value
        },
        {
          headers: {
            "Content-Type": "application/json;",
            "Access-Control-Allow-Origin": "*",
          }
        }
      )
      .then(res => {
        this.props.updateFamilyRecord(res.data);
        alert("New Record Entered Successfully");
      })
      .catch(error =>
        console.log(
          "parsing failed at src/views/Family/AddMember/PrimaryInfo in enterNewMember() for AddNewRecord",
          error
        )
      ); */
  };

  render() {
    return (
      <Fragment>
        <h5>Enter Member Details:</h5>
        <div className="content">
          <Grid fluid>
            <Row>
              <form onSubmit={this.enterNewMember}>
                <Card
                  border
                  content={
                    <Fragment>
                      <FormInputs
                        ncols={["col-md-4", "col-md-4", "col-md-4"]}
                        proprieties={[
                          {
                            label: "Last Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter Last Name",
                            name: "lname"
                          },
                          {
                            label: "First Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter First Name",
                            name: "fname"
                          },
                          {
                            label: "Middle Name",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Enter Middle Name",
                            name: "mname"
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-6", "col-md-6"]}
                        proprieties={[
                          {
                            label: "Contact",
                            type: "text",
                            bsClass: "form-control",
                            name: "contact"
                          },
                          {
                            label: "Qualification",
                            type: "text",
                            bsClass: "form-control",
                            name: "qualification"
                          }
                        ]}
                      />
                      <FormDropdown
                        ncols={["col-md-4"]}
                        proprieties={[
                          {
                            label: "Gender",
                            componentClass: "select",
                            placeholder: "select",
                            name: "gender",
                            options: [
                              {
                                key: "select",
                                value: "-- select --"
                              },
                              {
                                key: "Male",
                                value: "Male"
                              },
                              {
                                key: "Female",
                                value: "Female"
                              }
                            ]
                          }
                        ]}
                      />
                      <FormInputs
                        ncols={["col-md-4", "col-md-4"]}
                        proprieties={[
                          {
                            label: "Age",
                            type: "text",
                            bsClass: "form-control",
                            name: "age"
                          },
                          {
                            label: "Relation to Head of Family",
                            type: "text",
                            bsClass: "form-control",
                            name: "relation"
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
                            &nbsp;&nbsp;&nbsp; Add Member
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
