import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Home/logo/title_icon.png"
function Navbar(){

    function menu(){
       let nav =document.getElementById("nav-part2")
       let menuu = document.getElementById("monile-menu")

        nav.classList.toggle("open")
        console.log(nav.classList)
    }
    return(
    <div id="page1nav">
    <nav>
        <div id="logo-box">
            <img src={logo} alt="logo"/>
        </div>
        <div id="monile-menu" onClick={menu}>
            <h3>menu</h3>
        </div>
        <div id="nav-part2" className="navv open " >
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Solutions</a></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li className="About"><Link to="/About">About</Link>
            <div className="dropdown">
                <ul>
                <li><Link to={'#'}>Our Journey</Link></li>
                        <li><Link to={'#'}>Let's Build the Future Together</Link></li>
                        <li><Link to={'#'}>Our Expertise</Link></li>
                        <li><Link to={'#'}>Reliability</Link></li>

                </ul>
            </div>
            </li>
            <li><a href="#">Researches</a>
            </li>
            <li><Link to="/Contact">Contact</Link></li>
        </div>

    </nav>
    <body>

    </body>
</div>)
}
export default Navbar