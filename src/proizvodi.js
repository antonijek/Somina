import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";

class Proizvodi extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <div className='invisible md:visible bg-blue-300' >...proizvodi</div>;
  }
}

export default Proizvodi;
