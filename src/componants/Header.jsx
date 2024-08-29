import React from 'react'
import { addWallet, menu, moon, sun } from '../icons'
import { useContext } from 'react'
import { CryptoContext } from '../contexts/CryptoContext'
 

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {

    const { setCurrency } = useContext(CryptoContext)
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd":
                setCurrency({
                    name: "usd",
                    symbol: "$"  // Ajout des guillemets
                });
                break;
            case "eur":
                setCurrency({
                    name: "eur",
                    symbol: "€" // Ajout du symbole euro
                });
                break;
            case "inr":
                setCurrency({
                    name: "inr",
                    symbol: "₹" // Ajout du symbole roupie indienne
                });
                break;
            default:
                setCurrency({
                    name: "usd",
                    symbol: "$"
                });
                break;
        }
    }


    return (
        <div className='py-3 px-5 flex gap-2 items-center justify-between w-full border-b-[1px] border-b-lightGray bg-white dark:bg-[#171923]'>
            <div className='flex gap-8 items-center '>
                <div className='flex items-center gap-2'>
                    <button className='h-10 w-12 items-center justify-center rounded-xl border border-gray lg:hidden flex' onClick={toggleSidebar}>
                          <img 
                          src={menu} 
                          alt="menu icon" 
                          className='dark:invert'/>
                    </button>
                    <div className='flex flex-col'>
                        <h1 className='text-dark dark:text-lightGray text-sm font-semibold'>Dashbord</h1>
                        <h2 className='text-darkGray dark:text-gray font-medium text-xs'>Welcome back, John Doe!</h2>
                    </div>
                </div>
                <div className='sm:flex hidden'>
                    <button className='py-2 px-5 flex items-center rounded-xl gap-2 bg-blue text-white'>
                        <img src={addWallet} alt="" />
                        <span>Connect wallet</span>
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <select onClick={currencyHandler} className='h-10 px-1 flex items-center rounded-xl gap-2 text-darkGray border-[1px] bg-white dark:bg-transparent border-gray outline-none'>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>

                <button className='w-10 h-10 rounded-xl border flex border-gray justify-center items-center' onClick={toggleDarkMode}>
                    {
                            darkMode ?
                          <img src={sun} alt="" />
                             :
                              <img src={moon} alt="" />
                              

                        }
                </button>
            </div>
        </div>
    )
}

export default Header
