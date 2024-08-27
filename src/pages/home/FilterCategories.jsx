import React from 'react'
const currencyHandler = (event) => {
    switch (event.target.value) {
        case "usd":
            setCategoryData({
                name: "Layer 1 (L1)",
            });
            break;
        case "eur":
            setCategoryData({
                name: "eur",
            });
            break;
        case "inr":
            setCategoryData({
                name: "inr",
            });
            break;
        default:
            setCategoryData({
                name: "usd",
            });
            break;
    }
}


const FilterCategories = () => {
  return (
    <div>
       <select onChange={currencyHandler} className='py-3 px-2 flex items-center rounded-xl gap-2 text-darkGray border-[1px] bg-white border-gray outline-none'>
       <option value="" disabled selected>Catégorie</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                    
        </select>
    </div>
  )
}

export default FilterCategories
