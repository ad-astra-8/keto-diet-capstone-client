import React from 'react';
// import './App.css';
import LandingPage from './LandingPage'
import HomePage from './HomePage'
import AccountPage from './AccountPage'
import MyRecipesPage from './MyRecipesPage'
import MyPostsPage from './MyPostsPage'


function App() {
  return (
    <main className="App">
     <LandingPage />
     <HomePage />
     <AccountPage />
     <MyRecipesPage />
     <MyPostsPage />
    </main>
  );
}

export default App;
