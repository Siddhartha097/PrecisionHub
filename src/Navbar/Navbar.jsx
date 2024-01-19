import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Home/logo/title_icon.png"
import logo2 from "../Home/img/logo.jpg"
import './Navbar.css'


function Navbar(){

    function menu(){
       let nav =document.getElementById("nav-part2")
       let menu = document.getElementById("mobile-menu")

        nav.classList.toggle("open")
        console.log(nav.classList)
    }
    return(
    <div id="page1nav" className="">
    <nav>
        <div id="logo-box">
            <img src={logo} alt="logo"/>
        </div>
        <div id="mobile-menu" onClick={menu}>
            <h3>menu</h3>
        </div>
        <div id="nav-part2" className="navv open " >
            <li><Link to="/">Home</Link></li>
            <li className="About"><Link to="/About">About</Link>
                <div className="dropdown">
                    <ul>
                        <li><Link to='/our'>Our Journey</Link></li>
                        <li><Link to={'buildFuture'}>Let's Build the Future Together</Link></li>
                        <li><Link to={'expertise'}>Our Expertise</Link></li>
                        <li><Link to={'reliability'}>Reliability</Link></li>
                    </ul>
                </div>
            </li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="#">Solutions</Link></li>
            <li><Link to="#">Researches</Link></li>
            <li><Link to="/Contact">Contact</Link></li>       
        </div>

    </nav>
</div>)
}
export default Navbar