import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ portfolio, addStockToPortfolio, removeStockFromPortfolio }) {
  const [stocks, setStocks] = useState([]);
  const [sortType, setSortType] = useState("Alphabetically");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const handleSort = (event) => {
    setSortType(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterType(event.target.value);
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sortType === "Alphabetically") {
      return a.ticker.localeCompare(b.ticker);
    } else if (sortType === "Price") {
      return a.price - b.price;
    }
    return 0;
  });

  const filteredStocks = sortedStocks.filter((stock) => {
    if (filterType === "") {
      return true;
    }
    return stock.type === filterType;
  });

  return (
    <div>
      <SearchBar handleSort={handleSort} handleFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks}
            addStockToPortfolio={addStockToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            removeStockFromPortfolio={removeStockFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
