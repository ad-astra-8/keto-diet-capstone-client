import React from 'react';

  
function Navbar() {
  return (
    <div className="Navbar">
      <nav>
    <ul>
  <li className="logo"><a href="#home">Everything Keto</a></li>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#forum">Forum</a></li>
  <li><a href="#account">Jon's Account</a></li>
  <li className="log-out"><a href="#log out">Log out</a></li>
</ul>
  </nav>
    </div>
  );
}

export default Navbar;
