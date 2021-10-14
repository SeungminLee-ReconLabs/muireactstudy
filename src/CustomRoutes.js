// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import { LogIn, Register, Products, ProductDetail } from "./pages";
import DashboardComponent from "./component/DashboardComponent";
import { RouteWithoutLayout } from "ra-core";

export default [
    <RouteWithoutLayout exact path="/register" component={Register} />,
    <Route exact path={["/login"]} component={LogIn}></Route>,
    <Route exact path={["/products"]} component={Products}></Route>,
    <Route exact path={["/products/:productID"]} component={ProductDetail}></Route>,
    <Route exact path={["/library"]} component={DashboardComponent} /> ,
    <Route exact path="/product/:taskID/:productID/:plmProcessStep" component={DashboardComponent} />,
    // <Route path="/" component={DashboardComponent} />,
];