import React, { Component } from "react";
import config from "./config";
import Navbar from "./Navbar";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      searchTerm: "",
      recipe: [],
      favorite: []
    };
  }

  formatQueryParams(searchTerm) {
    const queryItems = Object.keys(searchTerm).map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(searchTerm[key])}`
    );
    return queryItems.join("&");
  }

  addToFavorites = (e) => {
    e.preventDefault();
    const data = {}
    const formData = new FormData(e.target)
    for (let value of formData) {
      data[value[0]] = value[1]
    }

    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })

      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })

      .then(response => {
        let existingFavorites = this.state.favorite
        existingFavorites.push(response)
        //set data to state 
        this.setState({
          favorite: existingFavorites
        })
        alert('Recipe added to favorites! ;)');
      })

      .catch((err) => {
        console.log(err.message);
      });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {};

    //get all the data from the form component
    const formData = new FormData(e.target);
    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1];
      value[1] = ""
    }

    let { searchTerm } = data;
    if (searchTerm === "") {
      this.setState({
        error: "You must enter a search term!",
      });

    } else {
      //assigns the object from the form data to params in the state
      this.setState({
        searchTerm: data,
        error: null
      });
    }

    const searchURL = 'https://api.spoonacular.com/recipes/complexSearch';
    const queryString = this.formatQueryParams(data);
    //sends all the params to the final url
    const url =
      searchURL +
      "?" +
      queryString +
      "&diet=ketogenic&number=4&instructionsRequired=true&addRecipeInformation=true&apiKey=006e4475b2c34b2ea02b8f008d4a3cef";

    this.setState({ loading: true });
    //using the url and paramters above make the api call
    fetch(url)
      // if the api returns data ...
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        // ... convert it to json
        return res.json();
      })

      // use the json api output
      .then((data) => {
        this.setState({
          loading: false,
          recipe: data.results,
        });

        //check if there is meaningful data

        // check if there are no results
        if (data.results.length === 0) {
          throw new Error("Sorry, we found 0 result for your search.");
        }
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  };


  render() {
    const errorMessage = this.state.error ? <p className="error-message">{this.state.error}</p> : false
    const displayResults = this.state.loading
      ? "loading the meals..."
      : this.state.recipe.map((result, index) => (
        <div className='div-results' key={index}>
          <h2 className='result-title'>{result.title}</h2>
          <li key={index} className="results-li">
            <a href={result.sourceUrl} target='_blank' rel="noopener noreferrer">
              <img
                className="results-link"
                src={result.image}
                alt="meal-preview"
              />
            </a>
            <p>{result.sourceName}</p>
            <form onSubmit={this.addToFavorites} className="favForm">
              <input type="hidden" name='user_id' defaultValue='1'></input>
              <input type="hidden" name='title' defaultValue={result.title}></input>
              <input type="hidden" name='image' defaultValue={result.image}></input>
              <input type="hidden" name='source' defaultValue={result.sourceUrl}></input>
              <button type="submit" id="fav-btn"><i className="fa fa-heart" aria-hidden="true"></i></button>
            </form>
          </li>
        </div>
      ));
    return (
      <div>
        <Navbar />
        <section className="recipes">
          <h2 className="section-title">Recipes Index</h2>
          <p className='intro'> Search for a keto recipe based on a keyword and check your results below!</p>
          <form className="search-recipe-form" onSubmit={this.handleSubmit}>
            <label htmlFor="search-term">
              Enter an ingredient of your choice:
            </label>
            {errorMessage}
            <input
              type="input"
              name="query"
              className="search-term"
              placeholder="cake"
              required
            />
            <button type="submit" id="submit-btn-index">
              Search
          </button>
          </form>
          <ul className="results-list">{displayResults}</ul>

        </section>
      </div>
    );
  }
}

export default Recipes;
