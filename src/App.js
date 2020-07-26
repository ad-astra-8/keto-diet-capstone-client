import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
import MyRecipesPage from "./MyRecipesPage";
import About from "./About";
import Recipes from "./Recipes";
import Forum from "./Forum";
import Login from './Login'
import Register from './Register'

class App extends Component {
  state = {
    tabsProp: [],
    favorites: []
  };

  componentDidMount() {
    fetch("https://keto-diet-api.herokuapp.com/api/notes")
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
        //check if there is meaningful data
        // console.log({data});
        
        this.setState({
          tabsProp: data,
        });
      })
      .catch((err) => {
        console.error(err);
        // this.setState({
        //     error: err.message
        // })
      });
  }


  updateNote = (note) => {
    console.log(note);
    this.setState({
      tabsProp: [...this.state.tabsProp, note],
    });
  }

  render() {
// console.log(this.state.tabsProp);

    return (
      <div className="App">
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route
                exact
                path="/homepage"
                render={(props) => <HomePage tabs={this.state.tabsProp} />}
              />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/about" component={About} />
              <Route exact path="/search-recipes" component={Recipes} />
              <Route exact path="/forum"
                render={(props) => (
                  <Forum
                    tabs={this.state.tabsProp}
                    updateNote={this.updateNote}
                  />
                )}
              />
              <Route path="/my-recipes-page" component={MyRecipesPage} />
              <Route path="/account" component={AccountPage} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
