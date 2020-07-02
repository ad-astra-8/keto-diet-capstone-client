import React from 'react';
// import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage'
import HomePage from './HomePage'
import AccountPage from './AccountPage'
// import MyRecipesPage from './MyRecipesPage'
// import MyPostsPage from './MyPostsPage'
// import About from './About'




function App() {
  return (
    <main className="App">
    <BrowserRouter>
        <LandingPage />
          <HomePage />
          {/* <About /> */}
          <AccountPage />
          {/* <Route path='/account' component={AccountPage} /> */}
          {/* <Route path='/MyRecipesPage' component={MyRecipesPage} />
          <Route path='/MyPostsPage' component={MyPostsPage} /> */}
          {/* <MyRecipesPage />
          <MyPostsPage /> */}
      </BrowserRouter>
    </main>
  );
}

export default App;
