import logo from "./logo.svg";
import "./assets/output.css";
import { createFactory } from "react";
import React, { Component } from "react";

class Header extends Component {
  state = {  }
  render() { console.log(this.props)
    return ( 
      <div className=" bg-blue-200 min-w-full  ">
      <nav className="flex  md:justify-between">
          <div className="flex w-full justify-between">
            <img src='https://www.eparhija.me/images/manastir-somina.jpg' className= ' w-28 md:w-24'></img>
  
             <button onClick={this.props.menubutton} className="md:hidden bg-blue-500 w-20 h-10 font-bold  uppercase mt-4 ">
               menu
               </button>
              
           
              
            
          </div>
         
          <ul className="hidden md:flex items-center  font-bold pr-4 " id="mobileMenu">
              <li className="pr-5 hover:underline "><a href='#'> Istorijat </a></li>
              <li className="pr-5 hover:underline"><a href='#'>Galerija</a></li>
              <li className="pr-5 hover:underline flex-none"><a  href='#'> o Manastiru</a></li>
              <li className="pr-5 hover:underline"><a href='#'>Kontakt</a></li>
          </ul>
          <div className=''>  <button className='  w-10 h-6 text-sm  font-black'>EN</button> 
          <img src='https://wiki2.railml.org/images/b/b8/UK_flag.png' className='w-4 h-3 ml-3'></img>
          </div>
          
      </nav>
     <ul className='text-right font-bold mr-12' >{this.props.menu.map(item=> <li key={item}>{item}</li>)}</ul>
      
  </div>

     );
  }
}
 
export default Header;