import React, { useState, useEffect } from "react";
import APIkey from "../APIkey";
import "../css/stock.css";

function Stock(props) {
  const [stockData, setStockData] = useState({});
  const TOKEN = APIkey();
  const BASE_URL = "https://finnhub.io/api/v1/quote";

  useEffect(() => {
    fetch(`${BASE_URL}?symbol=${props.ticker}&token=${TOKEN}`)
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, []);

  function percentChange() {
    if (stockData.o > stockData.c) {
      console.log("neg");
    } else console.log("pos");
    let diff = stockData.c - stockData.o;
    let pc = (diff / stockData.o) * 100;
    return pc.toFixed(2);
  }

  return (
    <div className="stock">
      {/* ticker */}
      <h4>{props.ticker}</h4>
      {/* graph */}
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
