import React, { useState, useContext } from 'react';
import { NewsContext } from '../../contexts/NewsContext';
import SideBar from '../../componants/SideBar';
import Header from '../../componants/Header';
import Loader from '../../componants/Loader';
import CoinMarketCap from '../../assets/images/CoinMarketCap.png';
import { arrowDown } from '../../icons';

const News = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8); // Afficher 8 articles au début
  const { articles, loading } = useContext(NewsContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode toggled");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar toggled");
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 8); // Charger 8 articles supplémentaires
  };

  return (
    <div className={`${darkMode ? "dark" : ""} bg-white dark:bg-[#171923]`}>
      <SideBar isSidebarOpen={isSidebarOpen} />
      {isSidebarOpen && <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={toggleSidebar}></div>}
      <div className='lg:ml-72 m-0 bg-white dark:bg-[#171923]'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
        <div className='p-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 bg-white dark:bg-[#171923]'>
          {loading ? (
            <div className='flex items-center justify-center'><Loader /></div>
          ) : articles.length > 0 ? (
            articles.slice(0, visibleCount).map((article, index) => (
              <div key={index} className="flex flex-col gap-2 border border-lightGray p-2 rounded-lg dark:bg-[#292C3B]">
                <div className='flex item-center justify-between'>
                  <img src={CoinMarketCap} alt="CoinMarketCap" />
                  <div className='flex flex-col'>
                    <p className='text-dark font-semibold text-xs dark:text-white'>CoinMarketCap</p>
                    <p className='text-darkGray text-xs dark:text-lightGray'>News - {new Date(article.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <img src={article.image} alt="Article" className='h-52 w-full rounded-xl'/>
                <h2 className="font-bold text-dark dark:text-gray">{article.title}</h2>
                <p className='text-darkGray dark:text-lightGray'>{article.description}</p>
              </div>
            ))
          ) : (
            <p className='text-darkGray dark:text-lightGray'>No articles available</p>
          )}
        </div>
        {visibleCount < articles.length && (
          <div className="flex justify-center mt-4 mb-8">
            <button 
              onClick={loadMore} 
              className="px-4 py-2 bg-gray text-black dark:text-white rounded-full dark:bg-[#292C3B] flex items-center justify-center">
              <span>Load More</span>
              <img src={arrowDown} alt="Load More" className='dark:invert'/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
