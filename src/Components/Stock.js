import React, { useState, useEffect } from "react";
import APIkey from "../APIkey";
import "../css/stock.css";
import stockSVG from "../assets/stock.svg";

function Stock(props) {
  const [stockData, setStockData] = useState({});
  const TOKEN = APIkey();
  const BASE_URL = "https://finnhub.io/api/v1/quote";

  useEffect(() => {
    fetch(`${BASE_URL}?symbol=${props.ticker}&token=${TOKEN}`)
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, []);

  // calculate the percent change from daily open to current price
  function percentChange() {
    let diff = stockData.c - stockData.o;
    let pc = (diff / stockData.o) * 100;
    return pc.toFixed(2);
  }

  return (
    <div className="stock">
      {/* ticker */}
      <div className="stock__tickerAndNumber">
        <h4>{props.ticker}</h4>
        {props.owned ? <p>{props.shares} shares</p> : null}
      </div>
      {/* graph */}
      <img src={stockSVG} height={16} /> {/* fake chart */}
      {/* price */}
      <div className="stock__prices">
        {/* share price */}
        <p>${stockData.c}</p>
        <p className={stockData.o > stockData.c ? "neg" : "pos"}>
          {percentChange()}%
        </p>
        {/* percent change today */}
      </div>
    </div>
  );
}

export default Stock;
