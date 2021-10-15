// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import { LogIn, Register, Products, ProductDetail } from "./pages";
import { RouteWithoutLayout } from "ra-core";

export default [
    <RouteWithoutLayout exact path="/register" component={Register} />,
    <Route exact path={["/login"]} component={LogIn}></Route>,
    <Route exact path={["/products"]} component={Products}></Route>,
    <Route exact path={["/products/:productID"]} component={ProductDetail}></Route>,
];