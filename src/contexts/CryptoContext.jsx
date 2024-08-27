import { createContext, useContext, useEffect, useState } from "react";

export const CryptoContext = createContext();

const CryptoContextProvider = (props) => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });
  const [loading, setLoading] = useState(true);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&sparkline=true&per_page=250`);
      const data = await response.json();
      setCoins(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const contextValue = {
    coins,
    currency,
    setCurrency,
    loading  
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
