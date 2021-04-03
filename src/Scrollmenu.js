import React from 'react';
import { NavLink } from 'react-router-dom';
const menu = [
  { name: 'Pocetna', path: '/', slika: '../slike/slika1.png' },
  { name: 'Recepti', path: '/recepti', slika: '../slike/slika2.png' },
  { name: 'Pouke', path: '/pouke', slika: '../slike/slika3.png' },
  { name: 'Kontakt', path: '/kontakt', slika: '../slike/slika4.png' },
  { name: 'Proizvodi', path: '/proizvodi', slika: '../slike/slika5.png' },
  { name: 'Tests', path: '/tests', slika: '../slike/slika6.png' },
];
const Scrollmenu = () => {
  return (
    <div className="fromoutside invisible md:visible">
      {menu.map((item) => (
        <NavLink
          activeClassName="is-active"
          exact
          to={item.path}
          key={item.name}
        >
          {' '}
          <div className="tooltip mx-36">
            <h2 className="tooltip-text">{item.name}</h2>
            <img
              src={item.slika}
              className=" rounded-full item-image object-cover"
              alt=""
            />
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Scrollmenu;
