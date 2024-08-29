import React from 'react';
import { Link } from 'react-router-dom';
import { bell, chart, chevronDown, creditCard, headphone, home, invoice, logo, news, reports, settings, wallet } from '../icons';
import avatar from '../assets/images/avatar.png'
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

const SideBar = ({ isSidebarOpen }) => {
  return (
    <aside className={`left-0 top-0 fixed h-screen z-40 w-72 p-3 border-r border-gray text-dark transition-transform lg:translate-x-0 bg-white dark:bg-[#171923] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className='flex gap-2  bg-lightBlue w-full px-4 py-2 mb-5 rounded-xl'>
        <img
          src={logo}
          alt="icon logo" />
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
          <Link to={'/news'}>
            <Button img={news} title={"News"} />
          </Link>
          <div className="">
            {Buttons.slice(0, 2).map(button => (
              <Button key={button.id} img={button.image} title={button.title} />
            ))}
          </div>
          <button className='flex justify-between items-center w-full py-3 px-2 mb-2 rounded-xl active:bg-blue text-dark dark:text-white font-semibold text-xs'>
            <div className='flex gap-2'>
              <img src={reports} alt="" className='dark:invert' />
              <span>Reports</span>
            </div>
            <img
              src={chevronDown}
              alt="chevronDown icon"
              className='dark:invert' />
          </button>
          <div>
            {Buttons.slice(2).map(button => (
              <Button key={button.id} img={button.image} title={button.title} />
            ))}
          </div>
        </div>
        <div className='absolute bottom-3 w-64 flex items-center justify-between dark:bg-gray dark:bg-opacity-50 p-2 rounded-xl'>
          <div className='flex items-center gap-2'>
            <img src={avatar} alt="" className='rounded-full' />
            <div className='flex flex-col'>
              <p className='text-dark dark:text-white text-xs font-medium'>Jonh Doe</p>
              <p className='text-darkGray dark:text-gray bg-opacity-0 dark:bg-opacity-50 text-xs'>johndoe8@gmail.com</p>
            </div>
          </div>
          <img
            src={chevronDown}
            alt="chevronDown Icon"
            className='dark:invert' />
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
