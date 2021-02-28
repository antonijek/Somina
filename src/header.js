import logo from "./logo.svg";
import "./assets/output.css";

import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends Component {
  state = {  }
  render() { console.log(this.props)
    return ( 
      <div className=" bg-blue-200    ">
      <nav className="flex  md:justify-between">
          <div className="flex w-full justify-between flex-col">
           <button className='bg-blue-25 w-24  '> <img src='https://manastirbukovo.org/wp-content/uploads/2020/12/Logo_FB-1.png' className= ' w-24 '></img></button>
  
             <button onClick={this.props.menubutton} className="md:hidden   font-bold text-xl uppercase text-right  -mt-8 -mr-8">
               menu
               </button>
              
           
              
            
          </div>

          <ul className="hidden md:flex items-center  font-bold pr-4 " id="mobileMenu">
             <Link className='flex-none' to='/onama'> <li className="pr-5 hover:underline"> O nama </li></Link>
 <Link to='/proizvodi'>     <li className="pr-5 hover:underline">Proizvodi</li></Link>
         <Link to='/recepti'>     <li className="pr-5 hover:underline "> Recepti</li></Link>
          <Link to='/pouke'>    <li className="pr-5 hover:underline "> Pouke</li></Link>
           <Link to ='/kontakt'>   <li className="pr-5 hover:underline">Kontakt</li></Link>
          </ul>
          <div className=''>  <button className='  w-10 h-6 text-sm  font-black'>EN</button> 
          <img src='https://wiki2.railml.org/images/b/b8/UK_flag.png' className='w-4 h-3 ml-3'></img>
          </div>
          
      </nav>
     <ul className='text-right font-bold mr-2' >{this.props.menu.map(item=> <li key={item}>{item}</li>)}</ul>
      
  </div>

     );
  }
}
 
export default Header;