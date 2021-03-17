import { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const english = ['aboutus', 'recipes', 'teachings', 'contact', 'products']
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [menu, setMenu] = useState([]);
  const [en, setEn] = useState([]);

  const language = () => {
    en.length === 0 ? setEn(['EN', 'SR']) : setEn([])
  }

  useEffect(() => {
    isOpen
      ? setMenu(['aboutus', 'products', 'recipes', 'teachings', 'contact'])
      : setMenu([])
  }, [isOpen])

  return (
    <div>
      <div className=' bg-blue-200  h-24  '>
        <nav className='flex  md:justify-between'>
          <div className='flex w-full justify-between '>
            <Link to='/'>
              <img
                src='https://manastirbukovo.org/wp-content/uploads/2020/12/Logo_FB-1.png'
                className=' w-24 '
              ></img>
            </Link>
            <img
              onClick={() => setIsOpen(!isOpen)}
              className=' mt-8  w-12 h-12 md:hidden hover:bg-blue-300'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
            ></img>
          </div>

          <ul className='hidden md:flex items-center  font-bold pr-3 divide-x-2 divide-blue-700 '>
            {english.map((item) => (
              <Link className='flex-none' key={item} to={item}>
                {' '}
                <li className='pr-2 pl-2 hover:underline hover:text-blue-500'>
                  {' '}
                  {item}
                </li>
              </Link>
            ))}
          </ul>
          <div className='flex flex-col mr-2'>
            <button
              onClick={language}
              className=' rounded-sm  w-5 h-5 hover:text-white mb-1'
            >
              EN
            </button>
            <div className='flex flex-col bg-yellow-400 rounded-sm text-center -p-1 text-white'>
              {en.map((lan) => (
                <button key={lan} className='hover:text-black text-sm'>
                  {lan}
                </button>
              ))}
            </div>
          </div>
        </nav>
        <p className=' w-24 text-left -mt-9 ml-4 font-mono text-blue-700'>
          Сомина
        </p>
        <ul className=' md:hidden divide-y divide-blue-300 text-center text-lg font-bold bg-gray-500 relative'>
          {menu.map((item) => (
            <Link onClick={() => setIsOpen(!isOpen)} to={item} key={item}>
              <li className='h-10 p-2 '>{item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full h-20 text-center bg-blue-200 text-white font-sans text-42 flex justify-center"> 
            <span className="flex sm:hidden">XS</span>
            <span className="hidden sm:flex md:hidden">SM</span>
            <span className="hidden md:flex lg:hidden">MD</span>
            <span className="hidden lg:flex ">LG</span>

      </div>
    </div>
  )
}
export default Header
