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
          <select className='border-[1px] min-w-72 p-2 text-darkGray border-gray rounded outline-none bg-transparent'>
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
                <th className="py-4 font-semibold text-base ml-4">
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
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className='dark:invert' xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.56664 1.91581C8.60189 1.82983 8.66191 1.75629 8.73907 1.70452C8.81624 1.65276 8.90706 1.62512 8.99997 1.62512C9.09289 1.62512 9.18371 1.65276 9.26087 1.70452C9.33804 1.75629 9.39806 1.82983 9.43331 1.91581L11.2041 6.17497C11.2373 6.25467 11.2918 6.32368 11.3616 6.3744C11.4315 6.42513 11.5139 6.4556 11.6 6.46248L16.1983 6.83081C16.6141 6.86414 16.7825 7.38331 16.4658 7.65414L12.9625 10.6558C12.897 10.7118 12.8482 10.7847 12.8215 10.8666C12.7947 10.9485 12.791 11.0361 12.8108 11.12L13.8816 15.6075C13.9032 15.6975 13.8975 15.7919 13.8654 15.8787C13.8333 15.9656 13.7762 16.0409 13.7013 16.0953C13.6264 16.1497 13.5371 16.1807 13.4446 16.1843C13.3521 16.188 13.2606 16.1641 13.1816 16.1158L9.24414 13.7116C9.17062 13.6667 9.08613 13.643 8.99997 13.643C8.91382 13.643 8.82933 13.6667 8.75581 13.7116L4.81831 16.1166C4.73935 16.165 4.64785 16.1888 4.55535 16.1852C4.46286 16.1815 4.37352 16.1505 4.29861 16.0962C4.22371 16.0418 4.16661 15.9664 4.13452 15.8796C4.10243 15.7927 4.09678 15.6983 4.11831 15.6083L5.18914 11.12C5.209 11.0361 5.20535 10.9485 5.17859 10.8666C5.15183 10.7847 5.103 10.7117 5.03747 10.6558L1.53414 7.65414C1.46359 7.594 1.41248 7.51428 1.38727 7.42507C1.36207 7.33586 1.3639 7.24118 1.39255 7.15302C1.42119 7.06485 1.47536 6.98717 1.54818 6.92981C1.62101 6.87245 1.70922 6.838 1.80164 6.83081L6.39997 6.46248C6.48601 6.4556 6.56849 6.42513 6.63833 6.3744C6.70817 6.32368 6.76266 6.25467 6.79581 6.17497L8.56664 1.91581Z" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

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
