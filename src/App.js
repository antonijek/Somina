import React, { Component } from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./Error.js";
import Aboutus from "./about-us";
import Contact from "./contact.js";
import Footer from "./Footer";
import Header from "./header";
import Products from "./products";
import Recipes from "./recipes";
import Teachings from "./teachings";
import Tests from "./Tests.js";
import SkrolovaniMenu from "./SkrolovaniMenu.js";
import Gallery from "./Gallery";

const array = [
  { component: Aboutus, string: "aboutus", path: "/aboutus" },
  { component: Products, string: "products", path: "/products" },
  { component: Recipes, string: "recipes", path: "/recipes" },
  { component: Teachings, string: "teachings", path: "/teachings" },
  { component: Contact, string: "contact", path: "/contact" },
  { component: Tests, string: "tests", path: "/tests" },
];

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 100 ? setShow(true) : setShow(false);
    };
  });

  return (
    <div className="">
      <Router>
        <Header />
        {show && <SkrolovaniMenu />}
        {array.map((obj) => (
          <Route key={obj.string} path={obj.path}>
            {<obj.component />}
          </Route>
        ))}
        <Gallery />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
