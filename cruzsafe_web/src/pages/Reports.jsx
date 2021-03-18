import React, { Component } from "react";
import TopNav from "../components/TopNav";
import "../stylesheets/reports.css";
 
class Reports extends Component {
  render() {
    return (
        <main>
          <TopNav/>
          <div className="reports_content">
            <div>Filters</div>
            <div>Reports</div>
          </div>
        </main>
    )
  }
}

export default Reports;