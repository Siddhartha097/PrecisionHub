import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='FooterMain'>
      <div className='FooterUpper'>
        <div className='left-footer'>
          <h1>Your Final Impact Statement, Make It Memorable!</h1>
          <ul className='social-list'>
            <li><Link to={'#'}><FaInstagram /></Link></li>
            <li><Link to={'#'}><FaFacebookF /></Link></li>
            <li><Link to={'#'}><FaXTwitter /></Link></li>
            <li><Link to={'#'}><FaLinkedin /></Link></li>
          </ul>
        </div>
        <div className='mid-footer'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?</p>
        </div>
        <div className='right-footer'>
          <h4>
            hell@reallyguestsite.com
          </h4>
        </div>
      </div>
      <div className="copyright">
          <h4 >All Copyrights Reserved by PRECISIONHUB IT INDUSTRIES PRIVATE LIMITED. CIN: U62099WB2023PTC264926</h4>
          {/* <h4 >THANK YOU. VISIT AGAIN.</h4> */}
      </div>
    </div>
  )
}

export default Footer
