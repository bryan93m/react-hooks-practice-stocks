import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuyStock}) {

  const displayStocks = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStockClick={onBuyStock} />
  })


  return (

    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
