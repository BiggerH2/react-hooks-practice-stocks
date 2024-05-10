import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [portfolio, setPortfolio] = useState([]);

  const addStockToPortfolio = (stock) => {
    setPortfolio((prevPortfolio) => [...prevPortfolio, stock]);
  };

  const removeStockFromPortfolio = (stockId) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((stock) => stock.id !== stockId)
    );
  };

  return (
    <div>
      <Header />
      <MainContainer
        portfolio={portfolio}
        addStockToPortfolio={addStockToPortfolio}
        removeStockFromPortfolio={removeStockFromPortfolio}
      />
    </div>
  );
}

export default App;
