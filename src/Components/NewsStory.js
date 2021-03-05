import React from "react";
import "../css/newsfeed.css";

function NewsStory(props) {
  return (
    <div className="story__wrapper">
      <div className="story__text__wrapper">
        <h6>{props.source}</h6>
        <h3>{props.title}</h3>
        <p>{props.blurb}</p>
      </div>
      <div
        className="story__img__wrapper"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
    </div>
  );
}

export default NewsStory;
