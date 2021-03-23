import throttle from 'lodash/throttle'
import React, { useState, useEffect } from 'react'
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
  const [pos, setPos] = useState(false)

  useEffect(() => {
    document.onscroll = (e) => {
      let scrolled = document.scrollingElement.scrollTop
      scrolled >= 96 ? setPos(true) : setPos(false)
    }
  }, [])
  return (
    <div className='container mx-auto px-4'>
      <Router>
        <Header />
        <Footer />
        {pos && <Scrollmenu />}
        {array.map((obj) => (
          <Route key={obj.string} path={obj.path}>
            {<obj.component />}
          </Route>
        ))}
      </Router>
    </div>
  )
}

export default App
