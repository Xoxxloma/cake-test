import React from "react";
import './Navbar.scss'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <NavLink to="/" className="nav-logo">
          NavBar
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <NavLink to="/" className="nav-menu__item-link">
              Main
            </NavLink>
          </li>
          <li className="nav-menu__item">
            <NavLink to="/favorites" className="nav-menu__item-link">
              Fav
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
