import React, { Component } from "react";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute"

import Landing from "./Landing";
import Login from "./Login";
import Signup from "./SignUp";
import Home from "./Home";
import Reports from "./Reports";
import Analytics from "./Analytics";
import Admin from "./Admin";

const Page404 = ({location}) => (
  <h3>404 Error; Page <code>{location.pathname}</code> Not Found!</h3>
)
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
              <Route exact path="/" component = {Landing}/>
              <Route exact path="/Login" component = {Login}/>
              <Route exact path="/Signup" component = {Signup}/>
              <PrivateRoute exact path="/home" component={Home}/>
              <PrivateRoute exact path="/Reports" component={Reports}/>
              <PrivateRoute exact path="/Analytics" component={Analytics}/>
              <PrivateRoute exact path="/Admin" component={Admin}/>
              <Route component={Page404}/>
            </Switch>
      </BrowserRouter>
    );
  }
}
 
export default Main;