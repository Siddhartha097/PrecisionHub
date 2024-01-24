import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Home/logo/title_icon.png"
import logo2 from '../Home/img/logo.png'
import './Navbar.css'
import Sidebar from "./Sidebar";


function Navbar(){

    const [SidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!SidebarOpen);
    };

    // function menu(){
    //    let nav =document.getElementById("nav-part2")
    //    let menu = document.getElementById("mobile-menu")

    //     nav.classList.toggle("open")
    //     console.log(nav.classList)
    // }
    return(
    // <div id="page1nav" className="">
    <nav id="page1nav">
        <div id="logo-box">
            <Link to={'/'}><img src={logo2} alt="logo"/></Link>
        </div>
        {/* <div id="mobile-menu" onClick={menu}>
            <h3>menu</h3>
        </div> */}
        
        
        <div id="nav-part2" className="navv" >
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Solutions</Link></li>
            <li><Link to="#">Researches</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li className="About"><Link to="/About">About</Link>
                <div className="dropdown">
                    <ul className="sub-menu" style={{textAlign: 'center'}}>
                        <li><Link to='/our'>Our Journey</Link></li>
                        <li><Link to={'buildFuture'}>Let's Build the Future Together</Link></li>
                        <li><Link to={'expertise'}>Our Expertise</Link></li>
                        <li><Link to={'reliability'}>Reliability</Link></li>
                    </ul>
                </div>
            </li>
            <li><Link to="/Contact">Contact</Link></li>       
        </div>
        <div>
            <button className="toggle-button" onClick={toggleSidebar}>
                ☰
            </button>
        </div>
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={SidebarOpen} />

    </nav>
// </div>
)
}
export default Navbar