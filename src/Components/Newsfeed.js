import React from "react";
import "../css/newsfeed.css";
import Chart from "./Chart";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,565.84</h1>
            <p>+$44.63 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
