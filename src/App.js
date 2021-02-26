import logo from "./logo.svg";
import "./App.css";
import "./assets/output.css";
import Footer from "./Footer";

function App() {
  return (
    <div class=" relative bg-purple-300  h-24 p-5">
    <nav class="flex  md:justify-between">
        <div class="flex w-full justify-between">
          <img src='https://www.eparhija.me/images/manastir-somina.jpg' className= ' border-2 border-black hover:border-blue-500 w-20 md:w-24'></img>

           <p  class="md:hidden ">
             menu
           </p>
        </div>
       
        <ul class="hidden md:flex" id="mobileMenu">
            <li class="pr-5"><a> Services </a></li>
            <li class="pr-5"><a>Porfolio</a></li>
            <li class="pr-5"><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
    </nav>
    <Footer/>
</div>
  );
}

export default App;
