import { useEffect, useState } from 'react';

const COINS_URL = 'https://api.coinpaprika.com/v1/tickers';

function CoinTracker() {
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(COINS_URL)
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins!{isLoading ? null : ` (${coins.length})`}</h1>
      {isLoading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CoinTracker;
