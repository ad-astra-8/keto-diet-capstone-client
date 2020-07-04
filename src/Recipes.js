import React, { Component } from 'react'
import config from './config'
import Navbar from './Navbar'


class Recipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // error: null,
      searchTerm: "",
      recipeObject: {}
    }
  }

  formatQueryParams(searchTerm) {
    const queryItems = Object.keys(searchTerm)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(searchTerm[key])}`)
    return queryItems.join('&')
  }

  //   validateName(inputString) {
  //     let outputString = inputString;
  //     if (!inputString === '') {
  //       outputString = null
  //   }
  //     return outputString
  // }


  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {}

    //get all the data from the form component
    const formData = new FormData(e.target)

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1]
    }
    console.log(data)
    let { searchTerm } = data
    //starting validation
    //validate searchTerm
    if (searchTerm === '') {
      this.setState({
        error: 'You must enter a search term!'
      })
    }
    //if validation successful, make API call
    else {

      //assigning the object from the form data to params in the state
      this.setState({
        searchTerm: data,
        // error: null
      })

      // //check if the state is populated with the search params data
      console.log(this.state.searchTerm)

      // const searchURL = `${config.API_ENDPOINT}/recipes-page`
      const searchURL = `${config.API_ENDPOINT}`

      const queryString = this.formatQueryParams(data)

      //sent all the params to the final url
      const url = searchURL + '?' + queryString + '&diet=ketogenic&number=3&instructionsRequired=true&addRecipeInformation=true&apiKey=006e4475b2c34b2ea02b8f008d4a3cef'
      console.log(url)

      const options = {
        method: 'GET',
        header: {
          "Authorization": "",
          "Content-Type": "application/json"

        }
      }

      //using the url and paramters above make the api call
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
          this.setState({
            recipeObject : data

          })
          //check if there is meaningful data
          console.log(data);
          console.log(this.state.recipeObject.results)
          // check if there are no results
          if (data.totalItems === 0) {
            throw new Error('Sorry, we found 0 result for your search.')
          }

        })
        .catch(err => {
          // this.setState({
          //     error: err.message
          // })
        })


    }
  }


  render() {
    const errorMessage = this.state.error ? <p className="error-message">{this.state.error}</p> : false
//    const displayResults = this.state.recipeObject.results.map(({ title, image, sourceUrl, summary, sourceName }) => (
//     <li>
//     <h4 class="title"><a href="${responseJson.results[i].sourceUrl}">{title}</a></h4> 
//   {/* <a href="${responseJson.results[i].sourceUrl}" target='_blank'><img class="recipe-image" src='${responseJson.results[i].image}' alt="recipe image" /></a> */}
//     <p class="summary">{summary}</p>              
//     <p class="sourcename">{sourceName}</p>
// </li>
// )
//  )

    return (
      <div>
        <Navbar />
        <section className="recipes" onSubmit={this.handleSubmit}>
          <h2 className="forum">Keto Recipes</h2>
          <form className="search-recipe-form">
            {errorMessage}
            <label htmlFor="search-term">Search for a keto recipe with keyword:</label>
            <input type="input" name="query" className="search-term" placeholder="chocolate" value="chocolate" required />
            <button type="submit" id="submit-searchTerm">Search</button>
            {/* {this.state.results.title} */}



            {/* <p className="error-message">error: please enter a search term</p>
            <p className="error-message">error: sorry, we found 0 result for your search about " "</p> */}
          </form>
          <h3>Results for "chocolate dessert":</h3>
          {/* <h4>Keto Brownies:</h4>
          <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

          <h4>Keto Chocolate Mousse:</h4>
          <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

          <h4>Keto Chocolate Cupcakes:</h4>
          <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
        </section>
      </div>
    );
  }
}

export default Recipes;
