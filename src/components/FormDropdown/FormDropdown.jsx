import React, { Component, Fragment } from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

function FieldGroup({ label, options, ...props }) {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}>
        {options.map((data, key) => {
          return (
            <option key={key} value={data.key}>
              {data.value}
            </option>
          );
        })}
      </FormControl>
    </FormGroup>
  );
}

export default class FormDropdown extends Component {
  render() {
    var row = [];
    for (var i = 0; i < this.props.ncols.length; i++) {
      row.push(
        <div key={i} className={this.props.ncols[i]}>
          <FieldGroup {...this.props.proprieties[i]} />
        </div>
      );
    }
    return <Fragment>{row}</Fragment>;
  }
}
