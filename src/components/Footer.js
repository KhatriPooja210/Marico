import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <div>
        <NavLink to="/">
          <img src="assets/images/logo.png" alt="logo" />
        </NavLink>
        <div>info@marico.co</div>
      </div>
      <div>
        <ul className="footer-list">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/login">Sign In</NavLink>
          </li>
        </ul>
      </div>
      </div>
  </footer>
  )
}

export default Footer
