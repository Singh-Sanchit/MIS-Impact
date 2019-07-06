import React, { Component } from "react";
import "views/Verification/LoginAnimation";
import authentication from "../../routes/authentication";
import axios from "axios";
export default class Login extends Component {
  state = {
    localBoard: "",
    password: "",
    regionalBoard: "",
    role: "",
    username: ""
  };

  addUser = e => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_PATH_URL_v1 + "/login/user",
        {
          localBoard: e.target.localBoard.value,
          password: e.target.password.value,
          regionalBoard: e.target.regionalBoard.value,
          role: "employee",
          username: e.target.username.value
        },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(res => {
        alert("Registration Successful...!! Proceed to Login");
        document.querySelector(".authentication-log-in").click();
      })
      .catch(error =>
        console.log(
          "parsing failed at src/views/Verification/Login in addUser() for SignUp",
          error
        )
      );
  };

  checkUser = e => {
    e.preventDefault();
    const username = e.target.username.value;
    axios
      .get(process.env.REACT_APP_PATH_URL_v1 + "/login/user", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          username: e.target.username.value,
          password: e.target.password.value
        }
      })
      .then(res => {
        this.setState({ localBoard: res.data.localBoard });
        this.setState({ password: res.data.password });
        this.setState({ regionalBoard: res.data.regionalBoard });
        this.setState({ role: res.data.role });
        this.setState({ username: res.data.username });
        authentication.login(username, () => {
          this.props.history.push("/families");
        });
      })
      .catch(error => {
        console.log(
          "parsing failed at src/views/Verification/Login in checkUser() for Login",
          error
        );
        alert("Invalid Details");
      });
  };

  render() {
    return (
      <div className="authentication-container">
        <form
          className="authentication authentication-signUp"
          onSubmit={this.checkUser}
        >
          <h3 className="authentication">
            Welcome
            <br />
            Back !
          </h3>
          <button className="authentication-fb" type="button">
            Log In With Facebook
          </button>
          <p>- or -</p>
          <br />
          <div className="authentication-input-container">
            <i className="fa fa-envelope" style={{ paddingTop: "5px" }} />
            <input
              type="email"
              name="username"
              placeholder="Enter Your Email."
              autoComplete="off"
              required
              className="authentication"
            />
          </div>
          <div className="authentication-input-container">
            <i className="fa fa-lock" style={{ paddingTop: "5px" }} />
            <input
              type="password"
              name="password"
              placeholder="Enter Password."
              required
              className="authentication"
            />
          </div>
          <button
            className="authentication-form-btn sx authentication-log-in"
            type="button"
          >
            Sign Up
          </button>
          <button className="authentication-form-btn dx" type="submit">
            Log In
          </button>
        </form>
        <form
          className="authentication authentication-signIn"
          onSubmit={this.addUser}
        >
          <h3 className="authentication">Create Your Account</h3>
          <div className="authentication-input-container">
            <i className="fa fa-envelope" style={{ paddingTop: "5px" }} />
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Enter Your Email."
              required
              autoComplete="off"
              className="authentication"
            />
          </div>
          <div className="authentication-input-container">
            <i className="fa fa-lock" style={{ paddingTop: "5px" }} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
              className="authentication"
            />
          </div>
          <div className="authentication-input-container">
            <i className="fa fa-lock" style={{ paddingTop: "5px" }} />
            <input
              type="password"
              name="re-password"
              id="re-password"
              placeholder="Re-Enter Password"
              required
              className="authentication"
            />
          </div>
          <div className="authentication-input-container">
            <i className="fa fa-address-card-o" style={{ paddingTop: "5px" }} />
            <input
              type="text"
              name="localBoard"
              id="localBoard"
              placeholder="Enter Local Board"
              required
              className="authentication"
            />
          </div>
          <div className="authentication-input-container">
            <i className="fa fa-address-card" style={{ paddingTop: "5px" }} />
            <input
              type="text"
              name="regionalBoard"
              id="regionalBoard"
              placeholder="Enter Regional Board"
              required
              className="authentication"
            />
          </div>
          <button
            className="authentication-form-btn sx authentication-back"
            type="button"
          >
            Back
          </button>
          <button className="authentication-form-btn dx" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
