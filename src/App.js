import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Aboutus from './about-us';
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
  { component: Aboutus, string: 'about-us', path: '/about-us' },
  { component: Products, string: 'products', path: '/products' },
  { component: Recipes, string: 'recipes', path: '/recipes' },
  { component: Teachings, string: 'teachings', path: '/teachings' },
  { component: Contact, string: 'contact', path: '/contact' },
  { component: Tests, string: 'tests', path: '/tests' },
];

const App = () => {
  const [pos, setPos] = useState(false);

  useEffect(() => {
    document.onscroll = (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      scrolled >= 96 ? setPos(true) : setPos(false);
    };
  }, []);
  return (
    <Router>
      <Header />
      <Footer />

      {pos && <Scrollmenu />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {arrayOfComponents.map((component) => (
          <Route key={component.string} path={component.path}>
            {<component.component />}
          </Route>
        ))}

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
