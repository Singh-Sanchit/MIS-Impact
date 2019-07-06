import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import verificationRoute from "routes/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/searchbar.css";
import "./assets/css/authentication.css";
import "./assets/css/cardflip.css";
import "./assets/css/navigationtab.css";

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        {verificationRoute.map((prop, key) => {
            return <Route to={prop.path} component={prop.component} key={key}/>;
        })}
    </Switch>
</BrowserRouter>, document.getElementById("root"));
