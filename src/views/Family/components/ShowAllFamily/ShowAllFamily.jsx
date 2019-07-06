import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";

export default class ShowAllFamily extends Component {
  state = {
    alert: null
  };

  deleteThisFamily = e => {
    const deleteAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="default"
        title="Are you sure?"
        onConfirm={this.getConfirmation.bind(this, e.target.id)}
        onCancel={this.hideAlert}
      >
        You will not be able to recover this family details!
      </SweetAlert>
    );
    this.setState({
      alert: deleteAlert()
    });
  };

  getConfirmation = id => {
    /* TODO: Make Delete API Call Here With Given Family ID. */
    console.log("Deleting Family Id -", id);
    this.props.updateFamilyRecord(Number(id), "delete");
    const deleteConfirmation = () => (
      <SweetAlert
        success
        title="Family Deleted Successfully!"
        onConfirm={() => {
          this.setState({ alert: null });
        }}
      />
    );
    this.setState({
      alert: deleteConfirmation()
    });
  };

  render() {
    return (
      <Fragment>
        <Table striped hover>
          <thead>
            <tr>
              {this.props.delete ? <th /> : null}
              <th />
              <th>ID</th>
              <th>Head of Family</th>
              <th>Family Member</th>
              <th>JK Center</th>
              <th>Local Board</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allFamilyRecord.map((data, key) => {
              return (
                <tr key={key}>
                  {this.props.delete ? (
                    <td>
                      <div className="checkbox" key={key}>
                        <input
                          id={data.id}
                          type="checkbox"
                          onChange={this.deleteThisFamily}
                        />
                        <label htmlFor={data.id}>{""}</label>
                      </div>
                    </td>
                  ) : null}
                  <td>
                    <i className="fa fa-home" />
                  </td>
                  <td>{data.id}</td>
                  <td>
                    {" "}
                    <Link to={`/family/familyDetails/${data.id}`}>
                      {data.lastName}{" "}
                    </Link>
                  </td>
                  <td>{data.regionalCouncil}</td>
                  <td>{data.jkCenter}</td>
                  <td>{data.localCouncil}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {this.state.alert}
      </Fragment>
    );
  }
}
