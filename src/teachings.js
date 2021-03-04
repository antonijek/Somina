import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";

class Pouke extends Component {
  state = {ime:''};

  pr=(e)=>{
    this.setState({ime:e.target.value})
    console.log(e.target.value)
  }
  render() {
   return <div className=" md:visible bg-yellow-300">...pouke
   </div>;
  }
}

export default Pouke;
