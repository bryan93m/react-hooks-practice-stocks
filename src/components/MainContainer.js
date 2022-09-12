import React, {useState, useEffect} from "react";
import axios from "axios";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [purchasedStocks, setPurchasedStocks] = useState([])
  const [sort, setSort] = useState("none")
  const [filter, setFilter] = useState("All")



  useEffect(() => {
    axios.get("http://localhost:3001/stocks")
    .then((res) => {
      setStocks(res.data)
    })
  }, [])

  function handlePurchaseStock(stock) {
    setPurchasedStocks([...purchasedStocks, stock])
  }

  function handleSellStock(stock) {
    const newPurchasedStocks = purchasedStocks.filter((purchasedStock) => purchasedStock.id !== stock.id)
    setPurchasedStocks(newPurchasedStocks)
  }

  function handleSort(e) {
    setSort(e.target.value)
  }
  if(sort === "Alphabetically") {
    stocks.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  }else if(sort === "Price") {
    stocks.sort((a, b) => {
      return a.price - b.price
    })
  }

  function handleFilter(e) {
    setFilter(e.target.value)
  }

  const filteredStocks = stocks.filter((stock) => {
    if(filter === "All") {
      return true
    }else {
      return stock.type === filter
    }
  })




  return (
    <div>
      <SearchBar handleChangeSort={handleSort}  handleChangeFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onBuyStock={handlePurchaseStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer purchasedStock={purchasedStocks} onSellStocks={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
