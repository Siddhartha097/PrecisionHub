import React from "react";
import Page1 from "../Home/Page1";
import logo from "../Home/logo/title_icon.png"
import { Link } from "react-router-dom";
import './About.css'
function About(){
    return(
        <>
        {/* <div id="main">
            <div id="page1">
            <nav>
                <div id="logo-box">
                    <img src={logo} alt="logo"/>
                </div>
                <div id="monile-menu">
                    <h3>menu</h3>
                </div>
                <div id="nav-part2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li className="About"><Link to="/About">About</Link>
                    <div className="dropdown">
                        <ul>
                            <li>New Research</li>
                            <li>Technologies</li>
                            <li>Something</li>
                        </ul>
                    </div>
                    </li>
                    <li><a href="#">Researches</a>
                    </li>
                    <li><a href="#">Contact</a></li>
                </div>

            </nav>
            <body>

            </body>
        </div>

            </div> */}
        </>
    )
}
export default About