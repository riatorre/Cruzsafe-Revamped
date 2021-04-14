import React, { Component } from "react";
import TopNav from "../components/TopNav";
import "../stylesheets/admin.css";
 
class Admin extends Component {
  render() {
    return (
        <main>
          <TopNav/>
          <div className="admin_content">
            <div>Filters</div>
            <div>Users List</div>
            <div className="admin_actions">Administrator Actions</div>
          </div>
        </main>
    )
  }
}

export default Admin;