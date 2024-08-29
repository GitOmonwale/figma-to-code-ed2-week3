import { useState } from 'react'
import SideBar from '../../componants/SideBar';
import Header from '../../componants/Header';
import Balance from './Balance';
import CryptoDashboard from './CryptoDashboard';
import TrendingCoinsList from './TrendingCoinsList';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`${darkMode && "dark"} bg-white dark:bg-[#171923]`}>
      <SideBar isSidebarOpen={isSidebarOpen} />
      {isSidebarOpen && <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={toggleSidebar}></div>}
      <div className='lg:ml-72 m-0 bg-white dark:bg-[#171923]'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
        <div className='p-5 lg:flex grid lg:grid-cols-2 grid-cols-1 gap-8  bg-white dark:bg-[#171923]'>
          <div className='md:w-auto w-full min-w-72  bg-white dark:bg-[#171923]'>
            <Balance />
          </div>
          <TrendingCoinsList />
        </div>
        <CryptoDashboard />
      </div>
    </div>
  )
}

export default Home
