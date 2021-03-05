import React from "react";
import "../css/timeline.css";

function Timeline() {
  function toggleActive(e) {
    if (e.target.className == "timeline__button active") {
      e.target.className = "timeline__button";
    } else {
      e.target.className += " active";
    }
  }
  return (
    <div className="timeline__wrapper">
      <div onClick={toggleActive} className="timeline__button">
        LIVE
      </div>
      <div onClick={toggleActive} className="timeline__button">
        1D
      </div>
      <div onClick={toggleActive} className="timeline__button">
        1W
      </div>
      <div onClick={toggleActive} className="timeline__button">
        3M
      </div>
      <div onClick={toggleActive} className="timeline__button">
        1Y
      </div>
      <div onClick={toggleActive} className="timeline__button">
        ALL
      </div>
    </div>
  );
}

export default Timeline;
