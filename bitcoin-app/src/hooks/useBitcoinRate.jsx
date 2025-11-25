import { useState, useEffect } from "react";

export function useBitcoinRate(currency) {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    let ignore = false;
    setRate(null); 

    const url =
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (!ignore) {
          setRate(json.bitcoin[currency.toLowerCase()]);
        }
      })
      .catch(() => {
        if (!ignore) {
          setRate("Error loading");
        }
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  return rate;
}
