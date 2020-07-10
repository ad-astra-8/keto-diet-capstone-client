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
import Footer from './Footer'
// import tabsProp from './Data';



class App extends Component {
state={
  tabsProp: []
}

componentDidMount(){
  // console.warn('*****mounting****')
  fetch('http://localhost:8000/api/notes')

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

      //check if there is meaningful data
      // console.log(data);
      this.setState({
        tabsProp : data
      })
  })
  .catch(err => {
    console.error(err)
      // this.setState({
      //     error: err.message
      // })
  })
}


  updateNote = (note) => {
    console.log(note);
    this.setState({
      tabsProp : [...this.state.tabsProp, note]
    })
  }

  render() {
    // console.log(tabsProp)

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
              render={props => <HomePage tabs={this.state.tabsProp} />}
            />

            <Route exact path='/about' component={About} />
            <Route exact path='/search-recipes' component={Recipes} />
            <Route exact path='/forum'
              render={props => <Forum tabs={this.state.tabsProp} updateNote={this.updateNote}/>}
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
