import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <header className="Navbar">
      <nav>
        <ul>
          {/* <li className="logo"><a href="#home">Everything Keto</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#forum">Forum</a></li>
          <li><a href="#account">Jon's Account</a></li>
          <li className="log-out"><a href="#log out">Log out</a></li> */}
          <NavLink to="/homePage"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/search-recipes"><li>Recipes</li></NavLink>
          <NavLink to="/forum"><li>Forum</li></NavLink>
          <NavLink to="/account"><li>My Account</li></NavLink>
          <li className="log-out"><a href="#log out">Log out</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
