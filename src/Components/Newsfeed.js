import { Avatar, Chip } from "@material-ui/core";
import React from "react";
import "../css/newsfeed.css";
import BuyingPower from "./BuyingPower";
import Chart from "./Chart";
import MarketNews from "./MarketNews";
import News from "./News";
import Timeline from "./Timeline";

const popularTopics = [
  "Technology",
  "Top Movers",
  "Upcoming Earnings",
  "Crypto",
  "Cannabis",
  "Healthcare Supplies",
  "Index ETFs",
  "China",
  "Pharma",
];

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
            <Timeline />
          </div>
          <BuyingPower />
          <MarketNews />
          <div className="newsfeed__popularlist__section">
            <div className="newsfeed__popularlist__intro">
              <h1>Popular Lists</h1>
              <p>Show More</p>
            </div>
          </div>
          <div className="newsfeed__popularlist__badges">
            {popularTopics.map((topic) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/gridy/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
          <News />
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
