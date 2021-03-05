import React from "react";
import "../css/newsfeed.css";
import NewsStory from "./NewsStory";

function News() {
  return (
    <div className="news__wrapper">
      <div className="news__header">
        <h1>News</h1>
      </div>
      <NewsStory
        title={
          "Dow rallies 570 points in big turn around, Nasdaq ends wild day 1.6% higher"
        }
        img={
          "https://images.robinhood.com/QKB5Vv5X8CJTJjGDxiXS6JVrjco/aHR0cHM6Ly9pbWFnZS5jbmJjZm0uY29tL2FwaS92MS9pbWFnZS8xMDY4NTAwNjctMTYxNDk3MzYxOTA1My1pbWdfMTBfNTdfMzlfMjM3NjU1XzEwMDAtMTYxNDk3MzU2NzAyNC0xLmpwZz92PTE2MTQ5NzM2Mzg"
        }
        blurb={"Yeilds ticked down ..."}
        source={"CNBC"}
        srcURL={"https://google.com"}
      />
    </div>
  );
}

export default News;
