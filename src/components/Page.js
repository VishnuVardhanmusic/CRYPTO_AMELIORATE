import "./Page.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&sparkline=false").then(
      (response) => {
        setListOfCoins(response.data);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Enter the Coin Name"
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        <h4>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;Coin Name&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Price(Rs)&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Change(%)&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Mkt Capacity(Rs)   </h4>
        {filteredCoins.map((coin) => {
          return (
            <Coin
            key={coin.id}   
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;