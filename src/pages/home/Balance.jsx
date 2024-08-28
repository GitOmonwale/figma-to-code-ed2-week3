import React from 'react'
import { arrowDown, arrowUp} from '../../icons'
const Balance = () => {
    return (
        <div className='p-3 rounded-xl border-[1px] border-lightGray flex flex-col gap-2 bg-white dark:bg-[#171923]'>
            <h3 className='font-semibold text-lg text-dark dark:text-gray'>Balance</h3>
            <div className='flex items-center justify-between gap-2'>
                <p className='font-bold text-lg text-dark dark:text-lightGray'>
                    $63,755,200
                </p>
                <p className='flex gap-2 items-center'>
                <button className='px-2 py-1 rounded-2xl text-green bg-lightGreen text-xxs font-semibold'>
                +2.3%
                </button>
                    <span className='font-medium text-xs text-darkGray dark:text-gray'>vs last month</span>
                </p>
            </div>
            <div className='text-blue grid grid-cols-2 gap-2'>
                <button className='py-3 px-2 flex items-center rounded-xl gap-2 bg-lightBlue'>
                    <img src={arrowUp} alt="" />
                    <span>Deposit</span>
                </button>
                <button className='py-3 px-2 flex items-center rounded-xl gap-2 bg-lightBlue'>
                    <img src={arrowDown} alt="" />
                    <span>Withdraw</span>
                </button>
            </div>
        </div>
    )
}

export default Balance
