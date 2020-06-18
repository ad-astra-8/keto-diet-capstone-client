import React from 'react';
// import './App.css';
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import HomePage from './HomePage'
import Account from './Account'


function App() {
  return (
    <main className="App">
     <LandingPage />
     <Navbar />
     <HomePage />
     <Account />
    </main>
  );
}

export default App;
