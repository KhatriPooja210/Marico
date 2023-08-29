import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="nav">
        <div>
          <NavLink to="/">
            <img src="assets/images/logo.png" alt="logo" />
          </NavLink>
        </div>
        <div>
          <ul className="navbar-list">
            <li>
              <NavLink to="/" activeClassName="active">
                Use Cases <BiChevronDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="navBtn">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button className="navBtn">
            <NavLink to="/signUp">Sign Up</NavLink>
          </button>
        </div>
        <div className="mobile-menu-icon" onClick={handleToggle}>
          <CgMenu />
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu overlay">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Use Cases <BiChevronDown /></NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            </li>
          </ul>
          <div>
          <button className="navBtn">
            <NavLink to="/login">Login</NavLink>
          </button>
          <button className="navBtn">
            <NavLink to="/signUp">Sign Up</NavLink>
          </button>
        </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
