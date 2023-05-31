import CartWidget from "./CartWidget"
import {NavLink, Link} from 'react-router-dom'
const NavBar =()=>{
    return(
  <div>
  <nav>
    <div class="nav-wrapper grey darken-4">
      <a href="#" class="brand-logo">NORDIC HOME</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#">Catálogo</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href=""><CartWidget/></a></li>
      </ul>
     
    </div>
    
  </nav>
  
        </div>
    )
}
export default NavBar