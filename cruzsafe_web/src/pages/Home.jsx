import React, { Component } from "react";
import TopNav from "../components/TopNav";
import "../stylesheets/homepage.css";

class Home extends Component {
  render() {
    return (
        <main>
            <TopNav/>
            <div className="home_content">
              <div>Charts</div>
              <div>Map</div>
              <div>Recent Reports</div>
            </div>
        </main>
    );
  }
}
 
export default Home;