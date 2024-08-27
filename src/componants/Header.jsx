import React from 'react'
import { addWallet } from '../icons'
import { useContext } from 'react'
import { CryptoContext } from '../contexts/CryptoContext'
 

const Header = ({ darkMode, toggleDarkMode }) => {

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
        <div className='py-3 px-5 flex gap-2 items-center justify-between w-full border-b-[1px] border-b-lightGray'>
            <div className='flex gap-8 items-center '>
                <div className='flex items-center gap-2'>
                    <button className='h-10 w-12 items-center justify-center rounded-xl border border-gray lg:hidden flex'>
                        {
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.33325 10H16.6666" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M3.33325 5H16.6666" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M3.33325 15H16.6666" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                           
                        }
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
                <select onClick={currencyHandler} className='h-10 px-1 flex items-center rounded-xl gap-2 text-darkGray border-[1px] bg-white border-gray outline-none'>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>

                <button className='w-10 h-10 rounded-xl border flex border-gray justify-center items-center' onClick={toggleDarkMode}>
                    {
                            darkMode ?
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0001 13.3333C11.841 13.3333 13.3334 11.8409 13.3334 9.99999C13.3334 8.15904 11.841 6.66666 10.0001 6.66666C8.15913 6.66666 6.66675 8.15904 6.66675 9.99999C6.66675 11.8409 8.15913 13.3333 10.0001 13.3333Z" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 3.33334H10.0083" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.6667 10H16.6751" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 16.6667H10.0083" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.33325 10H3.34159" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.7141 5.28583H14.7224" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.7141 14.7142H14.7224" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.28589 14.7142H5.29422" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.28589 5.28583H5.29422" stroke="#D1D5DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                             :
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.5C9.00544 3.49456 8.4467 4.84348 8.4467 6.25C8.4467 7.65652 9.00544 9.00544 10 10C10.9946 10.9946 12.3435 11.5533 13.75 11.5533C15.1565 11.5533 16.5054 10.9946 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4968 9.99168 17.6453 8.53683 17.3559C7.08197 17.0665 5.7456 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35472 10.0083 2.50325 8.50032 3.07091 7.12987C3.63856 5.75943 4.59986 4.58809 5.83323 3.76398C7.0666 2.93987 8.51664 2.5 10 2.5Z" stroke="#1D1D1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              

                        }
                </button>
            </div>
        </div>
    )
}

export default Header
