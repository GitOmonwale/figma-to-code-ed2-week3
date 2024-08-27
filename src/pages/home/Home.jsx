import  { useState } from 'react'
import SideBar from '../../componants/SideBar';
import Header from '../../componants/Header';
import Balance from './Balance';
import CryptoDashboard from './CryptoDashboard';
import TrendingCoinsList from './TrendingCoinsList';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
const toggleDarkMode = ()=>{
  setDarkMode(!darkMode);
  console.log("console")
}

  return (
    <div className=' text-dark'>
        <SideBar />
      <div className='lg:ml-72 m-0'>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <div className='p-5 lg:flex grid lg:grid-cols-2 grid-cols-1 gap-8'>
         <div className='md:w-auto w-full min-w-72'>
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
