import React, { Component, Fragment } from "react";
import Card from "components/Card/Card";

export default class PrimaryInfo extends Component {
  render() {
    return (
      <Card
        border
        content={
          <Fragment>
            <i
              className="fa fa-trash pull-right"
              style={{
                color: "#ff0000",
                fontSize: "18px"
              }}
            />
            <i
              className="fa fa-edit pull-right"
              style={{
                color: "#2669d6",
                fontSize: "18px",
                fontWeight: "700"
              }}
            />
            <h5>
              LastName:
              <strong> Hudda</strong>
            </h5>
            <h5>
              Address:<strong> Khoja society vapi</strong>
            </h5>
            <h5>Jamatkhana Center: Sanjan</h5>
            <hr />
            <h5> Head Of Family: Nizarbhai Badruddin</h5>
            <h5>
              <strong>Head of family Contact: 9924172275</strong>
            </h5>
          </Fragment>
        }
      />
    );
  }
}
