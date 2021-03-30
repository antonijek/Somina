import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
const firstMenu = [
  { sr: 'Pocetna', path: '', image: '../slike/slika1.png' },
  { sr: 'Recepti', path: 'recepti', image: '../slike/slika2.png' },
  { sr: 'Pouke', path: 'pouke', image: '../slike/slika3.png' },
];
const secondMenu = [
  { sr: 'Kontakt', path: 'kontakt', image: '../slike/slika4.png' },
  { sr: 'Proizvodi', path: 'proizvodi', image: '../slike/slika5.png' },
  { sr: 'Test', path: 'tests', image: '../slike/slika6.png' },
];

const smallMenu = [
  { name: 'Pocetna', path: '/' },
  { name: 'Recepti', path: '/recepti' },
  { name: 'Pouke', path: '/pouke' },
  { name: 'Kontakt', path: '/kontakt' },
  { name: 'Proizvodi', path: '/proizvodi' },
  { name: 'Tests', path: '/tests' },
];
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    isOpen ? setMenu(smallMenu) : setMenu([]);
  }, [isOpen]);

  return (
    <div className="bg-blue-400 ">
      <div className="container mx-auto p-4">
        <div className="relative h-24">
          <nav className="flex justify-between items-center">
            <ul className="hidden md:flex pr-3  ">
              {firstMenu.map((item) => (
                <NavLink
                  activeClassName="is-active"
                  className="flex flex-col items-center justify-center pr-4 w-24"
                  key={item.path}
                  exact
                  to={item.path}
                >
                  <li className=" font-bold hover:underline hover:text-blue-500">
                    {item.sr}
                  </li>
                  <img
                    alt=""
                    src={item.image}
                    className="item-image w-12 h-12 rounded-full"
                  ></img>
                </NavLink>
              ))}
            </ul>
            <NavLink activeClassName="is-active-logo" exact to="">
              <img
                src="../slike/slika7.png"
                className="logo w-24 h-24"
                alt=""
              ></img>
            </NavLink>

            <ul className="hidden md:flex pr-3  ">
              {secondMenu.map((item) => (
                <NavLink
                  activeClassName="is-active"
                  className="flex flex-col items-center justify-center pr-4 w-24"
                  key={item.path}
                  to={item.path}
                >
                  <li className=" font-bold hover:underline hover:text-blue-500">
                    {item.sr}
                  </li>
                  <img
                    alt=""
                    src={item.image}
                    className="item-image w-12 h-12 border rounded-3xl"
                  ></img>
                </NavLink>
              ))}
            </ul>
            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={40} />
            </div>
          </nav>

          <ul className=" my-4 md:hidden  text-center text-lg font-bold bg-gray-500 relative z-100">
            {menu.map((item) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to={item.path}
                key={item.path}
              >
                <li className="h-10 p-2 hover:text-red-500">{item.name}</li>
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
      </div>
    </div>
  );
};
export default Header;
