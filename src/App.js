import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './Header.js'
import './App.css'
import './assets/output.css'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './Products'
import Aboutus from './about us'
import Recipes from './Recipes'
import Teachings from './Teachings'
import Contact from './Contact.js'
import Tests from './Tests.js'
import { useState, useEffect } from 'react'

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
