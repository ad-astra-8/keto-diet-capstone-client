import React from 'react';
// import './App.css';
import LandingPage from './LandingPage'
import HomePage from './HomePage'
import AccountPage from './AccountPage'
import MyRecipesPage from './MyRecipesPage'
import MyPostsPage from './MyPostsPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <LandingPage />
        <HomePage />
        <AccountPage />
        <Switch>
          <Route path='/MyRecipesPage' component={MyRecipesPage} />
          <Route path='/MyPostsPage' component={MyPostsPage} />
          {/* <MyRecipesPage />
          <MyPostsPage /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
