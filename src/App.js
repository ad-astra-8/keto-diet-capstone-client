import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import HomePage from './HomePage'
// import AccountPage from './AccountPage'
// import MyRecipesPage from './MyRecipesPage'
// import MyPostsPage from './MyPostsPage'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'
import tabsProp from './Data';



class App extends Component {
  render() {
    // const MyData = Data.map((tabsProp, key) =>
    // <Route
    //   exact path='/homepage'
    //   render={props => <HomePage tabs={tabsProp} key={tabsProp.id} />}
    // />
    // )
    console.log(tabsProp)

    return (
      <main className="App">
        <BrowserRouter>
          {/* <LandingPage /> */}
          {/* <HomePage /> */}
          {/* <About /> */}
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* <Route exact path='/homepage' component={HomePage} /> */}
            {/* {MyData} */}
            <Route
              exact path='/homepage'
              render={props => <HomePage tabs={tabsProp} key={tabsProp.id} />}
            />

            <Route exact path='/about' component={About} />
            <Route exact path='/search-recipes' component={Recipes} />
            <Route exact path='/forum'
              render={props => <Forum tabs={tabsProp} key={tabsProp.id} />}
            // component={Forum} />
            />
            {/* <Route path='/my-recipes-page' component={MyRecipesPage} />
            <Route path='/my-posts-page' component={MyPostsPage} /> */}
            {/* <Route path='/account' component={AccountPage} /> */}

          </Switch>
          {/* <AccountPage /> */}
          {/* <MyRecipesPage />
          <MyPostsPage /> */}
        </BrowserRouter>
      </main>
    )
  }
}
export default App;
