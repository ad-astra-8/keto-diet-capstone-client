import React, { Component } from "react";
import config from "./config";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      searchTerm: "",
      recipe: [],
    };
  }

  formatQueryParams(searchTerm) {
    const queryItems = Object.keys(searchTerm).map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(searchTerm[key])}`
    );
    return queryItems.join("&");    
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
    }
    console.log(data.query);
    
    let { searchTerm } = data;
    if (searchTerm === "") {
      this.setState({
        error: "You must enter a search term!",
      });
    } else {
      //assigning the object from the form data to params in the state
      this.setState({
        searchTerm: data,
        error: null
      });
    }
    // const searchURL = `${config.API_ENDPOINT}/recipes-page`
    const searchURL = `${config.API_ENDPOINT}`;

    const queryString = this.formatQueryParams(data);
    //sent all the params to the final url
    const url =
      searchURL +
      "?" +
      queryString +
      "&diet=ketogenic&number=4&instructionsRequired=true&addRecipeInformation=true&apiKey=006e4475b2c34b2ea02b8f008d4a3cef";
    console.log(url);
    console.log(queryString)
    console.log(data['query'])    
    
    const options = {
      method: "GET",
      header: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    };

    this.setState({ loading: true });
    //using the url and paramters above make the api call
    fetch(url, options)
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
        // console.log(data.results);

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
          <div className='div-results'  key={index}>
            <h2 className='result-title'>{result.title}</h2>
            <li key={index} className="results-li">
              {/* <Link to={`//${result.sourceUrl}`} target="_blank"> */}
                <a href={result.sourceUrl} target='_blank' rel="noopener noreferrer">
                <img
                  className="results-link"
                  src={result.image}
                  alt="meal-preview"
                />
                </a>
                {/*</Link> */}
              <p>{result.sourceName}</p>
            </li>
          </div>
        ));
    return (
      <div>
        <Navbar />
        <section className="recipes" onSubmit={this.handleSubmit}>
          <h2 className="section-title">Keto Recipes</h2>
          <p className='intro'> Search for a keto recipe based on a keyword and check your results below!</p>
          <form className="search-recipe-form">
            <label htmlFor="search-term">
              Enter an ingredient of your choice:
            </label>
            {errorMessage}
            <input
              type="input"
              name="query"
              className="search-term"
              placeholder="chocolate"
              required
            />
            <button type="submit" id="submit-searchTerm">
              Search
            </button>
              <ul className="results-list">{displayResults}</ul>
          </form>
        </section>
      </div>
    );
  }
}

export default Recipes;
