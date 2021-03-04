import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./header.js";
import "./App.css";
import "./assets/output.css";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./products";
import Aboutus from "./about us";
import Recipes from "./recipes";
import Teachings from "./teachings";
import Contact from "./contact.js";


class App extends Component {
  state = { isOpen: true, menu: [], en: [] };

  menubutton = () => {
    this.state.isOpen === true
      ? this.setState({
          isOpen: false,
          menu: ["O nama", "Proizvodi", "Recepti", "Pouke", "Kontakt"],
        })
      : this.setState({ isOpen: true, menu: [] });
  };
  language = () => {
    this.state.en.length===0
      ? this.setState({ en: ["EN", "SR"] })
      : this.setState({ en: [] });
   };
  

  render() {
    return (
      <Router>
        <div>
          <Header
            menu={this.state.menu}
            menubutton={this.menubutton}
            lan={this.state.en}
            language={this.language}
            
          
          />
          <Route exact path="/O nama">
            {" "}
            <Aboutus />
          </Route>
          <Route path="/proizvodi">
            <Products />
          </Route>
          <Route path="/recepti">
            {" "}
            <Recipes />
          </Route>
          <Route path="/pouke">
            {" "}
            <Teachings />
          </Route>
          <Route path="/kontakt">
            {" "}
            <Contact />
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
