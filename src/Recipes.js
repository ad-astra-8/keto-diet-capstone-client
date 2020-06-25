import React from 'react';


function Recipes() {
  return (
    <section className="recipes">  
  <h2 className="forum">Keto Recipes</h2>
        <label htmlFor="search-term">Search for a keto recipe with keyword:</label>
        <input type="input" name="search" id="search-term" placeholder=" chocolate" />
        <button type="submit" id="submit-keyword">Search</button>
        <p className="error-message">error: please enter a search term</p>
        <p className="error-message">error: sorry, we found 0 result for your search about " "</p>

  <h3>Results for "chocolate dessert":</h3>
  <h4>Keto Brownies:</h4>  
    <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  
  <h4>Keto Chocolate Mousse:</h4>  
    <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  
  <h4>Keto Chocolate Cupcakes:</h4>  
    <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </section>
  
  );
}

export default Recipes;
