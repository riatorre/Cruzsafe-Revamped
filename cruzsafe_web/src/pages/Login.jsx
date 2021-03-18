import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Authenticator from "../components/Authenticator"

class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    Authenticator.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
      
      if(from.pathname === "/") from.pathname = "/home";
      console.log(from.pathname);

      if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }
  
      return (
        <div>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
}

export default Login;