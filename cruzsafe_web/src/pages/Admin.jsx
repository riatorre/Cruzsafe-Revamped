import React, { Component } from "react";
import TopNav from "../components/TopNav"; 
 
class Admin extends Component {
  render() {
    return (
        <main>
          <TopNav/>
          <div className="content">Admin</div>
        </main>
    )
  }
}

export default Admin;