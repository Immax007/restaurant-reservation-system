import React, { useState } from "react";
import "./Navbar.css";


function Navbar(){

const [open, setOpen] = useState(false);



return (

<nav className="new-navbar">


<div className="new-logo">
🍃 The Olive Garden
</div>


<button 
  className={`menu-btn ${menuOpen ? "active" : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</button>



<div className={`new-links ${open ? "show-menu" : ""}`}>

<a href="#">Home</a>

<a href="#">Menu</a>

<a href="#">About</a>

<a href="#">Contact</a>


<button className="login-btn">
Login
</button>


<button className="signup-btn">
Sign Up
</button>


</div>


</nav>

)

}


export default Navbar;
