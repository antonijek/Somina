import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./header.js";
import "./App.css";
import "./assets/output.css";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Proizvodi from "./proizvodi";
import Onama from "./Onama";
import Recepti from "./recepti";
import Pouke from "./pouke";
import Kontakt from "./kontakt.js";
class App extends Component {
  state = {
    menu: [],
  };
  menubutton = () => {
    let copy = ["O nama", "Proizvodi", "Recepti", "Pouke", "Kontakt"];
    this.setState({ menu: copy });
  };
  button = () => {
    console.log("testiram");
  };
  render() {
    return (
      <Router>
        <div>
          <Header menu={this.state.menu} menubutton={this.menubutton} />
          <Route path="/onama">
            {" "}
            <Onama fix={"kiks"} />
          </Route>
          <Route path="/proizvodi">
            <Proizvodi nesto={"kjhgkjhgk"} />
          </Route>
         <Route path='/recepti'> <Recepti/></Route>
         <Route path='/pouke'> <Pouke/></Route>
         <Route path='/kontakt'> <Kontakt/></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
