import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, removeStockFromPortfolio }) {
  const handleSellStock = (stock) => {
    removeStockFromPortfolio(stock.id);
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={() => handleSellStock(stock)} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
