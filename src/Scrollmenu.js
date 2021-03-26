import React from 'react'
import { NavLink } from 'react-router-dom'
const menu = [
  { sr: 'O nama', en: 'Aboutus', slika: '../slike/slika1.png' },
  { sr: 'Recepti', en: 'Recipes', slika: '../slike/slika2.png' },
  { sr: 'Pouke', en: 'Teachings', slika: '../slike/slika3.png' },
  { sr: 'Kontakt', en: 'Contact', slika: '../slike/slika4.png' },
  { sr: 'Proizvodi', en: 'Products', slika: '../slike/slika5.png' },
  { sr: 'Test', en: 'Tests', slika: '../slike/slika6.png' },
]
const Scrollmenu = () => {
  return (
    <div className='fromoutside invisible md:visible'>
      {menu.map((item) => (
        <NavLink activeClassName='is-active' to={item.en} key={item.en}>
          {' '}
          <div className='tooltip mx-36'>
            <h2 className='tooltip-text'>{item.sr}</h2>
            <img
              src={item.slika}
              className=' rounded-full item-image object-cover'
              alt=''
            />
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Scrollmenu
