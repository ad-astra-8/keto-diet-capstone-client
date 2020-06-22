import React from 'react';
// import './App.css';
import LandingPage from './LandingPage'
import HomePage from './HomePage'
import Account from './Account'
import MyRecipes from './MyRecipes'
import MyPosts from './MyPosts'


function App() {
  return (
    <main className="App">
     <LandingPage />
     <HomePage />
     <Account />
     <MyRecipes />
     <MyPosts />
    </main>
  );
}

export default App;
