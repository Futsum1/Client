import React from 'react'
import { FcHome } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = (props) => {
  

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
  {/* <NavLink class="navbar-brand" to="/"><FcHome /> </NavLink> */}
  <NavLink to="/" className="navbar-brand" style={{fontFamily: "Agustina Regular"}}>
    <span>&lt;</span>
    <span>{props.data}</span>
    <span>/&gt;</span>
  </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home  </NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/contact">Contact</NavLink>
      </li>  <li class="nav-item">
        <NavLink class="nav-link" to="/login">LogIn</NavLink>
      </li>  <li class="nav-item">
        <NavLink class="nav-link" to="/signup">Registration</NavLink>
      </li>

      
      
    </ul>
    
  </div>
</nav>
        </>
    )
}

export default NavBar
