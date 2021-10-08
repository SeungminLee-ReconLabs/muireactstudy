// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import { LogIn, Register, Product } from "./pages";
import DashboardComponent from "./component/DashboardComponent";
import { RouteWithoutLayout } from "ra-core";

export default [
    <Route path={["/login"]} component={LogIn}></Route>,
    <RouteWithoutLayout exact path="/register" component={Register} />,
    <Route path={["/library"]} component={DashboardComponent} /> ,
    <Route path="/product/:taskID/:productID/:plmProcessStep" component={DashboardComponent} />,
    // <Route path="/" component={DashboardComponent} />,
];