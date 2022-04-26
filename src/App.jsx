import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response =
        await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `);
      setCoins(response.data);
    }
    fetch();
  });

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" className="coin-input" placeholder="search" />
        </form>
      </div>
    </div>
  );
}

export default App;
