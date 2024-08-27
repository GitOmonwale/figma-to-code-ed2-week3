import React, { useState } from 'react';
import { useTrendingCoins } from '../../contexts/TrendingCoinsContext';
import { tradeDown, tradeUp, chevronRight } from '../../icons';
import Loader from '../../componants/Loader'; // Correction du chemin

const TrendingCoinsList = () => {
  const { trendingCoins, loading } = useTrendingCoins();
  const [visibleCoins, setVisibleCoins] = useState(4); // Nombre initial de pièces à afficher

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  // Vérifie si le bouton doit être affiché
  const hasMoreCoins = visibleCoins <= 4;

  const loadMoreCoins = () => {
    setVisibleCoins((prevVisibleCoins) => prevVisibleCoins + 6); // Augmenter le nombre de pièces affichées par 5
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
      <div className='flex justify-between mb-2'>
        <h3 className='text-base font-semibold'>Tendance</h3>
        {hasMoreCoins && (
          <button onClick={loadMoreCoins} className="flex items-center gap-1 text-dark">
            <span className='font-medium text-xs text-darkGray'>View more</span>
            <img src={chevronRight} alt="" />
          </button>
        )}
      </div>
      <div className='lg:flex gap-3 grid sm:grid-cols-2 grid-cols-1'>
      {trendingCoins.slice(0, visibleCoins).map((coin) => (
        <div
          key={coin.item.id}
          className="inline-block lg:w-80 w-full p-4 bg-gray-100 rounded-2xl border border-lightGray"
        >
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center gap-3'>
              <div className='flex gap-2 items-center'>
                <img src={coin.item.small} alt={coin.item.name} className="w-12 h-12 rounded-full" />
                <div className='max-w-[calc(100%-3rem)]'>
                  <h3 className="text-xs overflow-hidden overflow-ellipsis whitespace-nowrap">{coin.item.name}</h3>
                  <p className="text-darkGray opacity-60 text-xxs">{coin.item.symbol.toUpperCase()}</p>
                </div>
              </div>
              <div>
                <button className={`px-2 py-1 text-xxs font-semibold rounded-2xl flex items-center ${coin.item.data.price_change_percentage_24h.btc < 0 ? 'text-red bg-lightRed' : 'text-green bg-lightGreen'}`}>
                  <span>{coin.item.data.price_change_percentage_24h.btc.toFixed(2)}%</span>
                  <img src={coin.item.data.price_change_percentage_24h.btc < 0 ? tradeDown : tradeUp} alt="" />
                </button>
              </div>
            </div>
            <div className='text-darkGray'>
              <div className='font-bold text-xs'>
                {coin.item.data.total_volume_btc} {coin.item.symbol.toUpperCase()}
              </div>
              <div className='font-medium text-xxs'>
                {coin.item.data.total_volume}
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TrendingCoinsList;
