import React, { useState, useEffect } from "react";
import "../css/stats.css";
import Stock from "./Stock";

function Stats() {
  const [ownedStocks, setOwnedStocks] = useState([]);
  const [stockList, setStockList] = useState([]);

  useEffect(() => {
    setOwnedStocks(["IYR", "WINT", "RKT", "MMM", "MSFT", "IBM", "AMZN"]);
    setStockList(["TZA", "FAZ", "NNVC", "JCS", "HOV"]);
  }, []);
  //map over owned stocks and display them with stock components
  const stocks = ownedStocks.map((stock, index) => (
    <Stock key={index} ticker={stock} />
  ));
  const listStocks = stockList.map((stock, index) => (
    <Stock key={index} ticker={stock} />
  ));
  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {/* our current stocks */}
            {stocks}
          </div>
        </div>
        <div className="stats__header">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {/* stocks we can buy */}
            {listStocks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
