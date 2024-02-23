import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Sidebar.css'; 

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div id='' className={`sidebar  ${isSidebarOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="side-button">
        ☰
      </button>
      <ul >
        <li><Link onClick={toggleSidebar} to="/">Home</Link></li>
        <li className="">
          <Link onClick={toggleSidebar} to="/About">About</Link>
          <div className="about-submenu">
            <ul className='submenu'>
              <li><Link to='/our'>Our Journey</Link></li>
              <li><Link to={'buildFuture'}>Let's Build the Future Together</Link></li>
              <li><Link to={'expertise'}>Our Expertise</Link></li>
              <li><Link to={'reliability'}>Reliability</Link></li>
            </ul>
          </div>
        </li>
        <li><Link onClick={toggleSidebar} to="/Portfolio">Portfolio</Link></li>
        <li><Link onClick={toggleSidebar} to="/solutions">Solutions</Link></li>
        <li><Link onClick={toggleSidebar} to="#">Researches</Link></li>
        <li><Link onClick={toggleSidebar} to="/Contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;