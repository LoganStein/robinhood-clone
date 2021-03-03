import React from "react";
import Newsfeed from "../Components/Newsfeed";
import Stats from "../Components/Stats";
import "../css/home.css";

function Home() {
  return (
    <div className="page__wrapper home">
      <Newsfeed />
      <Stats />
    </div>
  );
}

export default Home;
