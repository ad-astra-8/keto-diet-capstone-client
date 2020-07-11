import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <header className="Navbar">
      <nav>
        <ul className="nav-container">
          <NavLink to="/homePage" className="nav-link"><li>Home</li></NavLink>
          <NavLink to="/about" className="nav-link"><li>About</li></NavLink>
          <NavLink to="/search-recipes" className="nav-link"><li>Recipes</li></NavLink>
          <NavLink to="/forum" className="nav-link"><li>Forum</li></NavLink>
          <NavLink to="/account" className="nav-link"><li>My Account</li></NavLink>
          {/* <li className="log-out"><a href="#log out">Log out</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
