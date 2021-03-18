import React, { Component } from "react";
import { NavLink } from "react-router-dom";
 
class Landing extends Component {
  render() {
    return (
        <main>
          <p>Home</p>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/Signup">Sign Up</NavLink>
        </main>
    )
  }
}

export default Landing;