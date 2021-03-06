import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import TokenService from './services/token-service.js';



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render() {
    let User_Id = TokenService.getUserId();
    return (
      <div>
        <Navbar />
        <section className="homepage">
          <h2 className="section-title">Homepage</h2>

          <p className="intro">
            Everything Keto will help you gather all the information you need
            about the Keto diet. Find facts, recipes, and
            even share your personal experience about the diet. Select one of
            the section that you would like to discover!
            </p>

          <div className="icon-container">
            <div className="sub-container">
              <span className="icon-title">About</span>
              <Link to="about">
                <img src="/images/about-image.jpg" alt="about-icon" />
              </Link>
            </div>

            <div className="sub-container">
              <span className="icon-title">Recipes</span>
              <Link to="search-recipes">
                <img src="/images/recipe-image.jpg" alt="recipe-icon" />
              </Link>
            </div>
            <div className="sub-container">
              <span className="icon-title">Forum</span>
              <Link to="forum" tabs={this.props.tabs}>
                <img src="/images/forum-image2.jpg" alt="forum-icon" />
              </Link>
            </div>
          </div>

          <p className="intro">
            Bon Appetit!
          </p>

        </section>
      </div>
    );
  }
}

export default HomePage;
