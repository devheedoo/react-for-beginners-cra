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
      <h1>The Coins!</h1>
      {isLoading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default CoinTracker;
