import React, { useState, useEffect } from 'react';

const TrendingCoinsContext = React.createContext();

export const TrendingCoinsProvider = ({ children }) => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins);
      } catch (error) {
        console.error('Failed to fetch trending coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <TrendingCoinsContext.Provider value={{ trendingCoins, loading }}>
      {children}
    </TrendingCoinsContext.Provider>
  );
};

export const useTrendingCoins = () => React.useContext(TrendingCoinsContext);
