import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { CoinOverviewContext } from '../../contexts/CoinOverviewContext';
import { CryptoContext } from '../../contexts/CryptoContext';
import Loader from '../../componants/Loader'
import LineChart from '../../componants/LineChart';
const CoinOverview = () => {
  const { coinOverviewId } = useParams(); // Récupère l'ID du coin depuis l'URL
  const { coinDetails, fetchCoinDetails, historicalData, fetchHistoricalData } = useContext(CoinOverviewContext);
  const { currency } = useContext(CryptoContext);

  useEffect(() => {
    fetchCoinDetails(coinOverviewId); // Fetch les détails du coin à l'aide du contexte
    fetchHistoricalData(coinOverviewId); // Fetch les données historiques du coin
  }, [coinOverviewId, currency]);

  if (!coinDetails || !historicalData) {
    return <div>
      <Loader></Loader>
    </div>; // Affiche un loader pendant la récupération des données
  }

  const sanitizedDescription = DOMPurify.sanitize(coinDetails.description.en);

  return (
    <div className='md:p-10 sm:p-5 p-3 dark:bg-[#171923]'>
      <nav className='flex items-center justify-between mb-10'>
        <h1 className='font-bold text-base'>{coinDetails.name}</h1> {/* Affiche le nom du coin */}
        <Link to={'/'}>
          <button className='rounded-lg h-10 w-10 bg-[#E5E5E5] opacity-50 flex items-center justify-center'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 5L15 15" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Link>
      </nav>
      <div className='md:p-5 p-2'>
        <LineChart></LineChart>
      </div>
      <div className='mt-4 flex justify-between items-center font-semibold text-sm dark:text-lightGray'>
        <div className='flex items-center gap-1'>
          <img src={coinDetails.image.large} alt={coinDetails.name} className='rounded-full h-10 x-10' />
          <p>({coinDetails.symbol.toUpperCase()}/{currency.name.toUpperCase()})</p>
        </div>
        <div>{currency.symbol}{coinDetails.market_data.current_price[currency.name].toLocaleString()}</div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-medium text-sm flex items-center justify-between'>
          <p className='text-dark'>Crypto Market Rank</p>
          <button className='p-1 bg-gray rounded-lg'>Rank {coinDetails.market_cap_rank}</button>
        </div>
        <div className='font-medium text-sm flex items-center justify-between'>
          <p>Market cap</p>
          <p className='text-darkGray'>{currency.symbol}{coinDetails.market_data.market_cap[currency.name].toLocaleString()}</p>
        </div>
        <div className='font-medium text-sm flex items-center justify-between'>
          <p>Circulating supply</p>
          <p>{coinDetails.market_data.circulating_supply.toLocaleString()}</p>
        </div>
        <div className='font-medium text-sm flex items-center justify-between'>
          <p>24 Hour High</p>
          <p>{coinDetails.market_data.high_24h[currency.name]}</p>
        </div>
        <div className='font-medium text-sm flex items-center justify-between'>
          <p>24 Hour Low</p>
          <p>{coinDetails.market_data.low_24h[currency.name]}</p>
        </div>
        <div className='flex flex-col gap-4 text-justify'>
          <h3 className='font-medium'>Description</h3>
          <div className='text-darkGray dark:text-gray font-xs' dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
        </div>
        <button className='flex justify-center items-center rounded-xl gap-2 bg-lightBlue dark:bg-gray bg-opacity-0 dark:bg-opacity-65 py-4'>
          <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.56664 1.91584C8.60189 1.82987 8.66191 1.75632 8.73907 1.70456C8.81624 1.65279 8.90706 1.62515 8.99997 1.62515C9.09289 1.62515 9.18371 1.65279 9.26087 1.70456C9.33804 1.75632 9.39806 1.82987 9.43331 1.91584L11.2041 6.17501C11.2373 6.2547 11.2918 6.32371 11.3616 6.37443C11.4315 6.42516 11.5139 6.45563 11.6 6.46251L16.1983 6.83084C16.6141 6.86417 16.7825 7.38334 16.4658 7.65417L12.9625 10.6558C12.897 10.7118 12.8482 10.7848 12.8215 10.8666C12.7947 10.9485 12.791 11.0362 12.8108 11.12L13.8816 15.6075C13.9032 15.6975 13.8975 15.7919 13.8654 15.8788C13.8333 15.9656 13.7762 16.041 13.7013 16.0953C13.6264 16.1497 13.5371 16.1807 13.4446 16.1844C13.3521 16.188 13.2606 16.1642 13.1816 16.1158L9.24414 13.7117C9.17062 13.6668 9.08613 13.643 8.99997 13.643C8.91382 13.643 8.82933 13.6668 8.75581 13.7117L4.81831 16.1167C4.73935 16.165 4.64785 16.1888 4.55535 16.1852C4.46286 16.1815 4.37352 16.1506 4.29861 16.0962C4.22371 16.0418 4.16661 15.9664 4.13452 15.8796C4.10243 15.7928 4.09678 15.6984 4.11831 15.6083L5.18914 11.12C5.209 11.0362 5.20535 10.9485 5.17859 10.8666C5.15183 10.7847 5.103 10.7118 5.03747 10.6558L1.53414 7.65417C1.46359 7.59403 1.41248 7.51431 1.38727 7.4251C1.36207 7.33589 1.3639 7.24121 1.39255 7.15305C1.42119 7.06488 1.47536 6.9872 1.54818 6.92984C1.62101 6.87248 1.70922 6.83803 1.80164 6.83084L6.39997 6.46251C6.48601 6.45563 6.56849 6.42516 6.63833 6.37443C6.70817 6.32371 6.76266 6.2547 6.79581 6.17501L8.56664 1.91584Z" stroke="#006EFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className='font-medium text-sm text-blue'>Add to favorites</span>
        </button>
      </div>
    </div>
  );
};

export default CoinOverview;
