import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from './services/token-service.js';



class Navbar extends Component {


  logOutClick = () => {
    TokenService.clearAuthToken()
    TokenService.getUserId = (id) => {
    }

    window.location = '/'
  }
  render() {
    return (
      <header className="Navbar">
        <nav>
          <ul className="nav-container">
            <NavLink to="/homePage" className="nav-link"><li>HOME</li></NavLink>
            <NavLink to="/about" className="nav-link"><li>ABOUT</li></NavLink>
            <NavLink to="/search-recipes" className="nav-link"><li>RECIPES</li></NavLink>
            <NavLink to="/forum" className="nav-link"><li>FORUM</li></NavLink>
            <NavLink to="/account" className="nav-link"><li>FAVS</li></NavLink>
            <NavLink to="/" onClick={this.logOutClick} className="nav-link"><li href="#log out"><i className="fa fa-sign-out" aria-hidden="true"></i></li></NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
