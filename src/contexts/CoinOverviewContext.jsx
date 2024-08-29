import React, { createContext, useContext, useState } from 'react';
import { CryptoContext } from './CryptoContext';
export const CoinOverviewContext = createContext();

export const CoinOverviewProvider = ({ children }) => {
  const [coinDetails, setCoinDetails] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
const {currency} = useContext(CryptoContext)
  const fetchCoinDetails = async (coinId) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?x_cg_demo_api_key=CG-rXE4JJ9wxMhDucxGz8eha4tV`);
      const data = await response.json();
      setCoinDetails(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du coin :", error);
    }
  };

  const fetchHistoricalData = async (coinId) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`);
      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'historique du coin :", error);
    }
  };



  return (
    <CoinOverviewContext.Provider value={{ coinDetails,historicalData, fetchCoinDetails,fetchHistoricalData }}>
      {children}
    </CoinOverviewContext.Provider>
  );
};
