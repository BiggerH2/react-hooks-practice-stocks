import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStockToPortfolio }) {
  const handleBuyStock = (stock) => {
    addStockToPortfolio(stock);
  };

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={() => handleBuyStock(stock)} />
      ))}
    </div>
  );
}

export default StockContainer;
