import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";

class Pouke extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <div className='bg-purple-500'>...pouke</div>;
  }
}

export default Pouke;
