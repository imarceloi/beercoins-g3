import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Operations from "./screens/Operations";
import RoleChange from "./screens/RoleChange";
import NotFound from "./screens/NotFound/NotFound";
import PaymentsRoutes from "./screens/Payments/Payments.routes";

const Routes = () => (
  <>
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/operations" role="ROLE_MODERATOR">
        <Operations />
      </PrivateRoute>
      <PrivateRoute path="/role-change" role="ROLE_MODERATOR">
        <RoleChange />
      </PrivateRoute>
      <PrivateRoute path="/payments" role="ROLE_USER">
        <PaymentsRoutes />
      </PrivateRoute>
      <Route path="*" component={() => <NotFound />} />
    </Switch>
  </>
);

export default Routes;
