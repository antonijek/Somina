import React, { Component } from 'react'

const Error = () => {
  return (
    <div className=' container  mx-auto'>
      <div className='bg-indigo-500 relative overflow-hidden h-48'>
        <div className=' bg-black opacity-25 absolute'></div>
        <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
          <div className='w-full font-mono flex flex-col items-center relative z-10'>
            <h1 className='font-extrabold text-5xl text-center text-white leading-tight mt-4'>
              Ova stranica ne postoji!
            </h1>
            <p className='font-extrabold text-8xl my-44 text-white animate-bounce'>
              404
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  )
}

export default Error

/* .slika {
  position: relative;
  padding: 0;
  width: 300px;
  display: block;
  cursor: pointer;
  overflow: hidden;
}
.textOnHover {
  opacity: 0;
  font-size: 40px;
  position: absolute;
  top: 0;
  left: 0;
  color: #1c87c9;
  background-color: rgba(200, 200, 200, 0.5);
  width: 300px;
  height: 400px;
  -webkit-transition: all 400ms ease-out;
  -moz-transition: all 400ms ease-out;
  -o-transition: all 400ms ease-out;
  -ms-transition: all 400ms ease-out;
  transition: all 400ms ease-out;
  text-align: center;
}
.slika .textOnHover:hover {
  opacity: 1;
}
.slika .textOnHover .text {
  height: 0;
  opacity: 1;
  transition-delay: 0s;
  transition-duration: 0.4s;
}
.slika .textOnHover:hover .text {
  opacity: 1;
  transform: translateY(300px);
  -webkit-transform: translateY(250px);
}
 */

/* import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Scrollmenu.css'
const menu = [
  { sr: 'O nama', en: 'Aboutus', slika: '../slika1.png' },
  { sr: 'Recepti', en: 'Recipes', slika: '../slika2.png' },
  { sr: 'Pouke', en: 'Teachings', slika: '../slika5.png' },
  { sr: 'Kontakt', en: 'Contact', slika: '../slika4.png' },
  { sr: 'Proizvodi', en: 'Products', slika: '../slika3.png' },
  { sr: 'Test', en: 'Tests', slika: '../slika6.png' },
]
const Scrollmenu = () => {
  return (
    <div
      className=' container fixed w-60 left-3/4'
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      {menu.map((item) => (
        <NavLink activeClassName='' to={item.en} key={item.en}>
          <div className=' slika hidden md:flex mx-32  '>
            <h4 className='textOnHover'>{item.sr}</h4>
            <img
              className='rounded-3xl border-2 border-red-500'
              src={item.slika}
              alt=''
            />
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Scrollmenu */

/* .slika {
  position: relative;
  width: 48px;
  height: 48px;
  margin-top: 16px;
  background-color: cyan;
  animation-name: 'example';
  animation-duration: 4s;
}
@keyframes example {
  from {
    left: 400px;
    top: 0px;
  }
  to {
    left: 0px;
    top: 0px;
  }
}

.slika .textOnHover {
  visibility: hidden;
  width: 120px;
  height: 36px;
  font-size: larger;
  padding: auto;
  text-align: center;
  color: blue;
  margin-left: -120px;
  margin-top: 8px;

 
  position: absolute;
  z-index: 1;
}
.slika:hover .textOnHover {
  visibility: visible;
}
 */

/* import throttle from 'lodash/throttle'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Aboutus from './about-us'
import Contact from './contact.js'
import Footer from './Footer'
import Header from './header'
import Products from './products'
import Recipes from './recipes'
import Scrollmenu from './Scrollmenu.js'
import Teachings from './teachings'
import Tests from './Tests.js'

const array = [
  { component: Aboutus, string: 'aboutus', path: '/aboutus' },
  { component: Products, string: 'products', path: '/products' },
  { component: Recipes, string: 'recipes', path: '/recipes' },
  { component: Teachings, string: 'teachings', path: '/teachings' },
  { component: Contact, string: 'contact', path: '/contact' },
  { component: Tests, string: 'tests', path: '/tests' },
]

const App = () => {
  const [showSidebarNavigation, setShowSidebarNavigation] = useState(false)

  window.onscroll = () => {
    debouncescroll()
  }
  const debouncescroll = throttle(() => {
    console.log('check function')
    window.pageYOffset > 100
      ? setShowSidebarNavigation(true)
      : setShowSidebarNavigation(false)
    console.log('check function')
  }, 200)

  // useEffect(() => {}, [])

  return (
    <div className='container mx-auto px-4'>
      <Router>
        <Header />
        <Footer />
        {showSidebarNavigation && <Scrollmenu />}
        {array.map((obj) => (
          <Route key={obj.string} path={obj.path}>
            {<obj.component />}
          </Route>
        ))}
      </Router>
    </div>
  )
}

export default App */
