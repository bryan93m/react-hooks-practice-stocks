import React from "react";
import Stock from "./Stock";

function PortfolioContainer({purchasedStock, onSellStocks}) {

  const displayPurchasedStocks = purchasedStock.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStockClick={onSellStocks} />
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPurchasedStocks}
    </div>
  );
}

export default PortfolioContainer;
