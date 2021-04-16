import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Home.js';

import Contact from './contact';
import Footer from './Footer';
import Header from './header';
import Products from './products';
import Recipes from './recipes';
import Scrollmenu from './Scrollmenu';
import Teachings from './teachings';
import Tests from './Tests';
import PageNotFound from './PageNotFound';

const arrayOfComponents = [
  { component: Home, string: 'home', path: '/home', title: '' },
  {
    component: Products,
    string: 'products',
    path: '/proizvodi',
    title: 'Somina | proizvodi',
  },
  {
    component: Recipes,
    string: 'recipes',
    path: '/recepti',
    title: 'Somina | recepti',
  },
  {
    component: Teachings,
    string: 'teachings',
    path: '/pouke',
    title: 'Somina | pouke',
  },
  {
    component: Contact,
    string: 'contact',
    path: '/kontakt',
    title: 'Somina | kontakt',
  },
  {
    component: Tests,
    string: 'tests',
    path: '/tests',
    title: 'Somina | tests',
  },
];

const App = (props) => {
  const [pos, setPos] = useState(false);

  useEffect(() => {
    document.onscroll = (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      scrolled >= 96 ? setPos(true) : setPos(false);
    };
  }, []);

  return (
    <div className="">
      <Router>
        <Header />
        {pos && <Scrollmenu />}
        <Switch>
          <Route exact path="/">
            <div className="min-h-screen">
              <Home />
            </div>
          </Route>
          {arrayOfComponents.map((component) => (
            <Route key={component.string} path={component.path}>
              <div className="min-h-screen">
                <Helmet>
                  <title>{component.title}</title>
                </Helmet>{' '}
                {<component.component />}
              </div>
            </Route>
          ))}

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
