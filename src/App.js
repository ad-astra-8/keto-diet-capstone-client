import React from 'react';
import './App.css';
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import Homepage from './HomePage'
import Account from './Account'


function App() {
  return (
    <main className="App">
     <LandingPage />
     <Navbar />
     <Homepage />
     <Account />
    </main>
  );
}

export default App;
