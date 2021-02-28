import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";

class Onama extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <div className='bg-yellow-500'>...O nama</div>;
  }
}

export default Onama;
