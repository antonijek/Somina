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
  state = { isOpen: "open", menu: [] };
  pritisni = () => {
    this.state.isOpen === "open"
      ? this.setState({ isOpen: "closed" })
      : this.setState({ isOpen: "open" });
    this.state.isOpen === "open"
      ? this.setState({
          menu: ["O nama", "Proizvodi", "Recepti", "Pouke", "Kontakt"],
        })
      : this.setState({ menu: [] });
  };
  render() {
    return (
      <Router>
        <div>
          <Header menu={this.state.menu} menubutton={this.pritisni} />
          <Route exact path="/onama">
            {" "}
            <Onama />
          </Route>
          <Route path="/proizvodi">
            <Proizvodi />
          </Route>
          <Route path="/recepti">
            {" "}
            <Recepti />
          </Route>
          <Route path="/pouke">
            {" "}
            <Pouke />
          </Route>
          <Route path="/kontakt">
            {" "}
            <Kontakt />
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
