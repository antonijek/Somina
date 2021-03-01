import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className=" bg-blue-200  h-24  ">
        <nav className="flex  md:justify-between">
          <div className="flex w-full justify-between ">
            
             <img
                src="https://manastirbukovo.org/wp-content/uploads/2020/12/Logo_FB-1.png"
                className=" w-24 "
              ></img>
            
            <img
              onClick={this.props.menubutton}
              className="-mr-4 mt-8  w-12 h-12 md:hidden hover:bg-blue-300"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            ></img>
          </div>

          <ul
            className="hidden md:flex items-center  font-bold pr-4 "
            id="mobileMenu"
          >
            <Link className="flex-none" to="/onama">
              {" "}
              <li className="pr-5 hover:underline"> O nama </li>
            </Link>
            <Link to="/proizvodi">
              {" "}
              <li className="pr-5 hover:underline">Proizvodi</li>
            </Link>
            <Link to="/recepti">
              {" "}
              <li className="pr-5 hover:underline "> Recepti</li>
            </Link>
            <Link to="/pouke">
              {" "}
              <li className="pr-5 hover:underline "> Pouke</li>
            </Link>
            <Link to="/kontakt">
              {" "}
              <li className="pr-5 hover:underline">Kontakt</li>
            </Link>
          </ul>
         <div className='flex'>
          <button className="text-center w-6 h-6 text-sm hover:text-blue-500">
              RU
            </button>
            <button className="text-center w-6 h-6 text-sm hover:text-blue-500">
              EN
            </button>
           </div>
         
        </nav>
        <ul className=" md:hidden divide-y divide-blue-300 text-center text-lg font-bold bg-gray-500">
          {this.props.menu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
