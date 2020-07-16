import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from './services/token-service.js';



class Navbar extends Component {


  logOutClick = () => {
    console.log('Logging out')
    TokenService.clearAuthToken()
    TokenService.getUserId = (id) => {
      // console.log(id)
    }

    window.location = '/'
  }
  render() {
    return (
      <header className="Navbar">
        <nav>
          <ul className="nav-container">
            <NavLink to="/homePage" className="nav-link"><li>Home</li></NavLink>
            <NavLink to="/about" className="nav-link"><li>About</li></NavLink>
            <NavLink to="/search-recipes" className="nav-link"><li>Recipes</li></NavLink>
            <NavLink to="/forum" className="nav-link"><li>Forum</li></NavLink>
            <NavLink to="/account" className="nav-link"><li>My account</li></NavLink>
            <NavLink to="/" onClick={this.logOutClick} className="nav-link"><li href="#log out">Log out</li></NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
