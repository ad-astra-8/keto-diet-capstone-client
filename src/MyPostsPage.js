import React, {Component} from  'react'
// import Navbar from './Navbar'


class MyPosts extends Component {
    render() {
        return (
            <div>
                {/* <Navbar /> */}
            <section className="favorites">          
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
          </div>

        )
    }

}

export default MyPosts;