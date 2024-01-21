import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Sidebar.css'; 

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
 

  return (
    <div id='' className={`sidebar  ${isSidebarOpen ? 'open' : ''}`}>
      <button className="side-button" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="">
          <Link to="/About">About</Link>
          <div className="about-submenu">
            <ul className='submenu'>
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
      </ul>
    </div>
  );
};

export default Sidebar;