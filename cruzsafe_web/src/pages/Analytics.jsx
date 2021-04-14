import React, { Component } from "react";
import TopNav from "../components/TopNav";
import "../stylesheets/analytics.css";
 
class Analytics extends Component {
  render() {
    return (
        <main>
          <TopNav/>
          <div className="analytics_content">
            <div>Chart Options</div>
            <div>Selected Chart</div>
            <div className="avail_charts">Available Charts</div>
            </div>
        </main>
    )
  }
}

export default Analytics;