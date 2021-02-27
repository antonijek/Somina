import React, { Component } from "react";
import logo from "./logo.svg";
import Header from './header.js'
import "./App.css";
import "./assets/output.css";
import Footer from "./Footer";



class App extends Component {
  state = { 
   menu:[]
   }
  menubutton = () => {
  let copy = ['Istorijat','Galerija','O manastiru','Kontakt'];
  this.setState({menu:copy});
}

  render() { 
    return ( 
      <>
       <Header menu={this.state.menu}
       menubutton={this.menubutton}
      />
      <Footer></Footer>
      </>);
  }
}
 
export default App;