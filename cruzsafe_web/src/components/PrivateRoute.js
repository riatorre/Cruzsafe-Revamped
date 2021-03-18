import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authenticator from "../components/Authenticator"

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      Authenticator.isAuthenticated === true
        ? <Component {...props}/>
        : <Redirect to={{
          pathname: "/",
          state: { from: props.location }
        }} />
    )}/>
  )

export default PrivateRoute;