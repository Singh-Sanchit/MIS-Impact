import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import MainRoutes from "routes/MainRoutes.jsx";
import Login from "views/Verification/Login";

export default class Verification extends Component {
  state = {
    redirectToLoginPage: false
  };

  logoutUser = () => {
    localStorage.setItem("user_status", " ");
    this.setState({ redirectToLoginPage: true });
  };

  render() {
    if (localStorage.getItem("user_status") === "User_Logged_In") {
      return (
        <div className="wrapper">
          <Sidebar {...this.props} />
          <div id="main-panel" className="main-panel" ref="mainPanel">
            <Header {...this.props} logout={this.logoutUser} />
            <Switch>
              {MainRoutes.map((prop, key) => {
                if (prop.redirect)
                  return (
                    <Redirect
                      from={prop.path}
                      to={prop.to}
                      key={key}
                      page={prop.page}
                    />
                  );
                return (
                  <Route
                    exact
                    path={prop.path}
                    component={prop.component}
                    key={key}
                    page={prop.page}
                  />
                );
              })}
            </Switch>
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      );
    }
  }
}
