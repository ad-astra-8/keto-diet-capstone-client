import React, {Component} from  'react'


class MyPosts extends Component {
    render() {
        return (
            <section className="favorites">
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
          
          <h1 className="">My posts:</h1>
          
          
              <h2>"Post #1"</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button type="submit" id="update-button">Update</button>
              <button type="submit" id="delete-button">Delete</button>
          
            
              <h2>"Post #2"</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button type="submit" id="update-button">Update</button>
              <button type="submit" id="delete-button">Delete</button>
          
          
              <h2>"Post #3"</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button type="submit" id="update-button">Update</button>
              <button type="submit" id="delete-button">Delete</button>
          </section>
          
        )
    }

}

export default MyPosts;