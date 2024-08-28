import React from 'react'

const Button = ({img, title}) => {
  return (
    <button className='py-2 px-2 mb-1 flex items-center w-full rounded-xl gap-2 t active:bg-blue active:text-white text-dark dark:text-white text-xs font-semibold'>
       <img src={img} alt="" className='dark:invert'/> 
       <span>{title}</span>
    </button>
  )
}

export default Button
