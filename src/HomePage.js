import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from './Footer'
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  render() {
    console.log(this.props.tabs);

    return (
      <div>
        <Navbar />
        <section className="homepage">
          <h2 className="section-title">Homepage</h2>

          <p className="intro">
            Everything Keto will help you gather all the information you
            need about the Keto diet. You will be able to find facts, recipes, and even share your personal experience about the diet. 
            Select one of the section that you would like to discover! 
          </p>

          <div className="icon-title">
            <span>About</span>
            <span>Recipes</span>
            <span>Forum</span>
          </div>

          <div className="icon-container">
            <Link to="about">
              <img src="/images/about-image.jpg" alt="about-icon" />
            </Link>
            <Link to="search-recipes">
              <img src="/images/recipe-image.jpg" alt="recipe-icon" />
            </Link>
            <Link to="forum" tabs={this.props.tabs}>
              <img src="/images/forum-image2.jpg" alt="forum-icon" />
            </Link>
          </div> 
        </section>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
