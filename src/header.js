import { useEffect, useState } from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const firstMenu = ['aboutus', 'recipes', 'teachings']
const secondMenu = ['contact', 'products', 'tests']

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  const [menu, setMenu] = useState([])
  const [en, setEn] = useState([])

  const language = () => {
    en.length === 0 ? setEn(['EN', 'SR']) : setEn([])
  }

  useEffect(() => {
    isOpen
      ? setMenu([
          'aboutus',
          'products',
          'recipes',
          'teachings',
          'contact',
          'tests',
        ])
      : setMenu([])
  }, [isOpen])

  return (
    <div className='container  mx-auto relative bg-blue-400  h-24'>
      <nav className='flex md:ml-24 justify-between'>
        <ul className='hidden md:flex    pr-3  '>
          {firstMenu.map((item) => (
            <Link className='flex-none' key={item} to={item}>
              {' '}
              <li className=' font-bold pr-2 pl-2 hover:underline hover:text-blue-500'>
                {item}
              </li>
              <div className='ml-4 w-12 h-12 border rounded-3xl '>vinjeta</div>
            </Link>
          ))}
        </ul>
        <Link to='/'>
          <div className=' w-20 h-20 border rounded-3xl text-center p-4'>
            LOGO
          </div>
        </Link>

        <ul className='hidden md:flex   pr-3  '>
          {secondMenu.map((item) => (
            <Link className='flex-none' key={item} to={item}>
              <li className=' font-bold pr-2 pl-2 hover:underline hover:text-blue-500'>
                {item}
              </li>
              <div className='ml-4 w-12 h-12 border rounded-3xl '>vinjeta</div>
            </Link>
          ))}
        </ul>
        <div className='mr-4'>
          <img
            onClick={() => setIsOpen(!isOpen)}
            className='   w-12 h-12 md:hidden hover:bg-blue-300'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'
          ></img>

          <div className=' ml-4'>
            <button
              onClick={language}
              className=' rounded-sm  w-5 h-5 hover:text-white mb-1'
            >
              EN
            </button>
            <div className='flex flex-col   text-center  text-red-500'>
              {en.map((lan) => (
                <button key={lan} className='hover:text-black text-xs'>
                  {lan}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <ul className=' md:hidden divide-y divide-blue-300 text-center text-lg font-bold bg-gray-500 relative'>
        {menu.map((item) => (
          <Link onClick={() => setIsOpen(!isOpen)} to={item} key={item}>
            <li className='h-10 p-2 '>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
export default Header
