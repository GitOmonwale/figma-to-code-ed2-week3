import React from 'react';
import { Link } from 'react-router-dom';
import {bell, chart, chevronDown, creditCard, headphone, home, invoice, logo, news, reports, settings, wallet } from '../icons';
import Button from './Button';
const Buttons = [
  { id: "1", image: chart, title: 'Activities' },
  { id: "2", image: creditCard, title: 'Cards' },
  { id: "3", image: bell, title: 'Notifications' },
  { id: "4", image: wallet, title: 'Billing' },
  { id: "5", image: invoice, title: 'Invoice' },
  { id: "6", image: headphone, title: 'Help Center' },
  { id: "7", image: settings, title: 'Settings' },
]
 
const SideBar = () => {
  return (
    <div className='left-0 fixed h-screen w-72 p-3 lg:flex hidden flex-col gap-5 border-r-[1px] border-gray text-dark transition-transform duration-300'>
      <div className='flex gap-2  bg-lightBlue w-full px-4 py-2 rounded-xl'>
        <img src={logo} alt="" />
        <div className='flex flex-col text-darkBlue'>
          <h1 className='text-xs font-bold'>Tokena</h1>
          <h2 className='text-xxs'>Finace app</h2>
        </div>
      </div>
      <div>
        <h2 className='text-darkGray mb-4 font-medium text-sm'>
          Menu
        </h2>
        <div>
          <Link to={'/'}>
          <Button img={home} title={"Dashboard"} />
          </Link>
          <Button img={news} title={"News"} />
          <div className="">
            {Buttons.slice(0, 2).map(button => (
              <Button key={button.id} img={button.image} title={button.title} />
            ))}
          </div>
          <button className='flex justify-between items-center w-full py-3 px-2 mb-2 rounded-xl active:bg-blue font-semibold text-xs'>
            <div className='flex gap-2'>
            <img src={reports} alt="" />
            <span>Reports</span>
            </div>
            <img src={chevronDown} alt="" />
          </button>
          <div>
        {Buttons.slice(2).map(button => (
          <Button key={button.id} img={button.image} title={button.title} />
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
