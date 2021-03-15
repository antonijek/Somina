
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Aboutus from './about-us';
import Contact from './contact.js';
import Footer from './Footer';
import Header from './header';
import Products from './products';
import Recipes from './recipes';
import Teachings from './teachings';
import Tests from './Tests.js';

const array = [
  { component: Aboutus, string: 'aboutus', path: '/aboutus' },
  { component: Products, string: 'products', path: '/products' },
  { component: Recipes, string: 'recipes', path: '/recipes' },
  { component: Teachings, string: 'teachings', path: '/teachings' },
  { component: Contact, string: 'contact', path: '/contact' },
]

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        {array.map((item) => (
          <Route key={item.string} path={item.path}>
            {<item.component />}
          </Route>
        ))}

        <Footer />
        <Tests />
      </div>
    </Router>
  )
}

export default App
