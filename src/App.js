import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import HomePage from './HomePage'
import AccountPage from './AccountPage'
import MyRecipesPage from './MyRecipesPage'
import MyPostsPage from './MyPostsPage'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'



function App() {
  return (
    <main className="App">
      <BrowserRouter>
        {/* <LandingPage /> */}
        {/* <HomePage /> */}
        {/* <About /> */}
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/search-recipes' component={Recipes} />
          <Route exact path='/forum' component={Forum} />        
          <Route path='/my-recipes-page' component={MyRecipesPage} />
          <Route path='/my-posts-page' component={MyPostsPage} />
        <Route path='/account' component={AccountPage} />

        </Switch>
        {/* <AccountPage /> */}
        {/* <MyRecipesPage />
          <MyPostsPage /> */}
      </BrowserRouter>
    </main>
  );
}

export default App;
