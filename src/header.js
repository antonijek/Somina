import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const firstMenu = [
  { sr: 'O nama', en: 'aboutus', slika: '../slike/slika1.png' },
  { sr: 'Recepti', en: 'recipes', slika: '../slike/slika2.png' },
  { sr: 'Pouke', en: 'teachings', slika: '../slike/slika3.png' },
]
const secondMenu = [
  { sr: 'Kontakt', en: 'contact', slika: '../slike/slika4.png' },
  { sr: 'Proizvodi', en: 'products', slika: '../slike/slika5.png' },
  { sr: 'Test', en: 'tests', slika: '../slike/slika6.png' },
]

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
    <div on className='container  mx-auto relative bg-blue-400  h-24'>
      <nav className='flex md:ml-24 justify-between'>
        <ul className='hidden md:flex    pr-3  '>
          {firstMenu.map((item) => (
            <NavLink activeClassName='is-active' className=' flex-none' key={item.en} to={item.en}>
              {' '}
              <li className=' font-bold pr-2 pl-2 hover:underline hover:text-blue-500'>
                {item.sr}
              </li>
              <img
                alt=''
                src={item.slika}
                className='item-image ml-4 w-12 h-12 border rounded-3xl '
              ></img>
            </NavLink>
          ))}
        </ul>
        <Link to='/'>
          <div className='w-24 h-24 '>
            <img
              className=' w-28 h-28 rounded-2xlobject-none text-center '
              src='../slike/slika7.png'
              alt=''
            />
          </div>
        </Link>

        <ul className='hidden md:flex   pr-3  '>
          {secondMenu.map((item) => (
            <NavLink  activeClassName='is-active' className='flex-none' key={item.en} to={item.en}>
              <li className=' font-bold pr-2 pl-2 hover:underline hover:text-blue-500'>
                {item.sr}
              </li>
              <img
                alt=''
                src={item.slika}
                className='item-image  ml-4 w-12 h-12 border rounded-3xl'
              ></img>
            </NavLink>
          ))}
        </ul>
        <div className='mr-4'>
          <img
            alt=''
            onClick={() => setIsOpen(!isOpen)}
            className='w-12 h-12 md:hidden hover:bg-blue-300'
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
      {/* <div className='w-full h-20 text-center bg-blue-200 text-white font-sans text-42 flex justify-center'>
        <span className='flex sm:hidden'>XS</span>
        <span className='hidden sm:flex md:hidden'>SM</span>
        <span className='hidden md:flex lg:hidden'>MD</span>
        <span className='hidden lg:flex '>LG</span>
      </div> */}
    </div>
  )
}
export default Header
