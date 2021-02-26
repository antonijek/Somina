import logo from "./logo.svg";
import "./App.css";
import "./assets/output.css";

function App() {
  return (
    <div class=" bg-blue-200   ">
    <nav class="flex  md:justify-between">
        <div class="flex w-full justify-between">
          <img src='https://www.eparhija.me/images/manastir-somina.jpg' className= ' w-28 md:w-24'></img>

           <p  class="md:hidden  font-bold  uppercase p-6">
            <a href='#'> menu</a>
           </p>
        </div>
       
        <ul class="hidden md:flex items-center  font-bold pr-4 " id="mobileMenu">
            <li class="pr-5 hover:underline"><a href='#'> Istorijat </a></li>
            <li class="pr-5"><a href='#'>Galerija</a></li>
            <li class="pr-5"><a  href='#'>Manastir</a></li>
            <li><a href='#'>Kontakt</a></li>
        </ul>
         <button className='bg-blue-400 w-10 h-6 hover:bg-green-200  font-black'>EN</button>
    </nav>
   
    
</div>
  );
}

export default App;
