import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import AboutUs from './about-us';
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
  { component: AboutUs, string: 'about-us', path: '/about-us' },
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
    <div>
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
              <div className="min-h-screen">{<component.component />}</div>
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
