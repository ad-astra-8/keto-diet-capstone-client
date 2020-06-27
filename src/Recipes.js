import React, { Component } from 'react'
import config from './config'


class Recipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&')
}

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {}

    //get all the from data from the form component
    const formData = new FormData(e.target)

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1]
    }
    console.log(data)
    // let { loginUsername, loginPassword } = data

    //check if the state is populated with the search params data
    console.log(this.state.params)

    const searchURL = `${config.API_ENDPOINT}/login-page`

    const queryString = this.formatQueryParams(data)

    //sent all the params to the final url
    const url = searchURL + '?' + queryString

    console.log(url)

    const options = {
      method: 'GET',
      header: {
        "Authorization": "",
        "Content-Type": "application/json"
      }
    }

    //useing the url and paramters above make the api call
    fetch(url, options)

      // if the api returns data ...
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        // ... convert it to json
        return res.json()
      })
      // use the json api output
      .then(data => {

        //check if there is meaningfull data
        console.log(data);
        // check if there are no results
        if (data.totalItems === 0) {
          throw new Error('No user found')
        }

      })
      .catch(err => {
        // this.setState({
        //     error: err.message
        // })
      })
  }



render() {

  return (
    <section className="recipes" onSubmit={this.handleSubmit}>
      <h2 className="forum">Keto Recipes</h2>
      <form className="search-recipe-form">
        <label htmlFor="search-term">Search for a keto recipe with keyword:</label>
        <input type="input" name="searchRecipes" className="search-term" placeholder=" chocolate" />
        <button type="submit" id="submit-keyword">Search</button>
        <p className="error-message">error: please enter a search term</p>
        <p className="error-message">error: sorry, we found 0 result for your search about " "</p>
      </form>
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
}

export default Recipes;
