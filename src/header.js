import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";


const jelovnik= ["O nama", "Proizvodi", "Recepti", "Pouke", "Kontakt"]
class Header extends Component {
  state = {};
  render() {
    return (
      <div className=" bg-blue-200  h-24  ">
        <nav className="flex  md:justify-between">
          <div className="flex w-full justify-between ">
        <Link to='/'>    <img
              src="https://manastirbukovo.org/wp-content/uploads/2020/12/Logo_FB-1.png"
              className=" w-24 "
            ></img>
</Link>
            <img
              onClick={this.props.menubutton}
              className=" mt-8  w-12 h-12 md:hidden hover:bg-blue-300"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            ></img>
          </div>

          <ul className="hidden md:flex items-center  font-bold pr-3 divide-x-2 divide-blue-700 ">
            {jelovnik.map((item) => (
              <Link className="flex-none"  key={item} to={item}>
                {" "}
                <li className="pr-2 pl-2 hover:underline hover:text-blue-500">
                  {" "}
                  {item}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-col mr-2">
            <button
              onClick={this.props.language}
              className=" rounded-sm  w-5 h-5 hover:text-white mb-1"
            >
              EN
            </button>
            <div className="flex flex-col bg-yellow-400 rounded-sm text-center -p-1 text-white">
              {this.props.lan.map((lan) => (
                <button key={lan} className="hover:text-black text-sm">
                  {lan}
                </button>
              ))}
            </div>
          </div>
        </nav>
        <p className=" w-24 text-left -mt-9 ml-4 font-serif text-blue-700">
          Сомина
        </p>
        <ul className=" md:hidden divide-y divide-blue-300 text-center text-lg font-bold bg-gray-500 relative">
          {this.props.menu.map((item) => (
            <Link onClick={this.props.menubutton} to={item} key={item}>
              <li className="h-10 p-2 " key={item}>
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
