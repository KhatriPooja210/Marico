import React from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
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
              <NavLink to="/">
                Use Cases <BiChevronDown />
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
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
      </nav>
    </header>
  );
};

export default Navbar;
