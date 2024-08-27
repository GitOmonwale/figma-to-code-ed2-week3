import React from 'react'

const Button = ({img, title}) => {
  return (
    <button className='py-2 px-2 mb-1 flex items-center w-full rounded-xl gap-2 active:bg-blue active:text-white text-xs font-semibold'>
       <img src={img} alt="" /> 
       <span>{title}</span>
    </button>
  )
}

export default Button
