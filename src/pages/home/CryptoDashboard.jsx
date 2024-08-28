import React, { useContext, useEffect, useState } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { CryptoContext } from '../../contexts/CryptoContext';
import { Link } from 'react-router-dom';
import Loader from '../../componants/Loader'
import { star } from '../../icons';

const CryptoDashboard = () => {
  const { coins, currency, loading } = useContext(CryptoContext);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [input, setInput] = useState('');


  useEffect(() => {
    setFilteredCoins(coins); // Update filteredCoins whenever coins change
  }, [coins]);


  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setFilteredCoins(coins);
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const filtered = coins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredCoins(filtered);
  };

  return (
    <div>
      <div className='flex items-center justify-between flex-wrap m-5 gap-2 bg-white dark:bg-[#171923]'>
        <form className="" onSubmit={searchHandler}>
          <div className='min-w-72 p-2 border border-gray rounded flex items-center gap-2 bg-white dark:bg-[#171923]'>
            <button type='submit'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5039_665)">
                  <path d="M14.583 14.583L18.333 18.333" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.667 9.16699C16.667 5.02486 13.3092 1.66699 9.16699 1.66699C5.02486 1.66699 1.66699 5.02486 1.66699 9.16699C1.66699 13.3092 5.02486 16.667 9.16699 16.667C13.3092 16.667 16.667 13.3092 16.667 9.16699Z" stroke="#6B7280" strokeWidth="1.5" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_5039_665">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search crypto by name..."
              required
              onChange={inputHandler}
              value={input}
              className="border-none outline-none bg-transparent"
            />
          </div>
        </form>
        <div className=' bg-white dark:bg-[#171923]'>
          <select className='border-[1px] min-w-72 p-2 border-gray rounded outline-none bg-transparent'>
          <option value="" disabled selected>Categories</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray m-5 bg-white dark:bg-[#171923] text-dark dark:text-white">
        <div className="overflow-y-auto overflow-x-auto max-h-[calc(100vh-150px)]  bg-white dark:bg-[#171923]">
          <table className="min-w-full bg-white dark:bg-[#171923]">
            <thead className=' bg-white dark:bg-[#171923]'>
              <tr className=''>
                <th className="py-4 font-semibold text-base">
                  Market
                </th>
              </tr>
              <tr className='text-center font-medium text-sm border-b-[1px] border-gray bg-lightGray bg-opacity-0 dark:bg-opacity-10'>
                <th className="p-4"> </th>
                <th className="p-4">#</th>
                <th className="p-4">Coin</th>
                <th className="p-4">Price</th>
                <th className="py-4 px-2">24h %</th>
                <th className="p-4">24h Volume</th>
                <th className="p-4">Market Cap</th>
                <th className="p-4">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, index) => (
                <tr key={coin.id} className="border-b-[1px] border-gray">
                  <td className="py-4 px-8">
                    <Link to={`/coinOverview/${coin.id}`}>
                     <img src={star} alt="" />
                    </Link>
                  </td>
                  <td className="py-4 px-8">{index + 1}</td>
                  <td className="py-4 px-8 text-nowrap">
                    <Link to={`/coinOverview/${coin.id}`}>
                      <img src={coin.image} alt={coin.name} width="24" className="inline-block mr-2" />
                      {coin.name} ({coin.symbol.toUpperCase()})
                    </Link>
                  </td>
                  <td className="py-4 px-8">${coin.current_price}</td>
                  <td>
                    <button className={`px-2 py-1 text-xxs font-semibold rounded-2xl ${coin.price_change_percentage_24h < 0 ? 'text-red bg-lightRed' : 'text-green bg-lightGreen'}`}>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </button>
                  </td>
                  <td className="py-4 px-8">${coin.total_volume.toLocaleString()}</td>
                  <td className="py-4 px-8">${coin.market_cap.toLocaleString()}</td>
                  <td className="py-4">
                    <Sparklines data={coin.sparkline_in_7d.price}>
                      <SparklinesLine color={coin.price_change_percentage_24h < 0 ? 'red' : 'green'} />
                    </Sparklines>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
          {loading && (
            <div className="py-4 text-center">
              <Loader></Loader>
            </div>
          )}
        </div>
      </div>

    </div >
  );
};

export default CryptoDashboard;
