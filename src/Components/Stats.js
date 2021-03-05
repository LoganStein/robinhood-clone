import React, { useState, useEffect } from "react";
import "../css/stats.css";
import Stock from "./Stock";
import { db } from "../firebase";

function Stats() {
  const [ownedStocks, setOwnedStocks] = useState([]);
  const [stockList, setStockList] = useState([]);

  // grab stocks that you own from firebase db and add that info to state
  const getMyStocks = () => {
    db.collection("ownedStocks").onSnapshot((snapshot) => {
      let data = snapshot.docs.map((doc) => doc.data());
      let ownedStocksDB = [];
      data.map((stock) => {
        // create add stock objects from database to an array
        ownedStocksDB.push({ ticker: stock.ticker, shares: stock.shares });
      });
      // set the state to reflect the database info
      setOwnedStocks(ownedStocksDB);
    });
  };

  useEffect(() => {
    setStockList(["TZA", "FAZ", "NNVC"]);
    getMyStocks(); //grab stock data from firebase database
  }, []);
  //map over owned stocks and display them with stock components
  const stocks = ownedStocks.map((stock, index) => (
    // owned prop depreciated?
    <Stock
      key={index}
      ticker={stock.ticker}
      shares={stock.shares}
      owned={true}
    />
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
