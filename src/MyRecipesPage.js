import React, { Component } from 'react'
import Navbar from './Navbar'


class MyRecipes extends Component {
    render() {
        return (
            <div>
<Navbar />
            <section className="favorites">

                <h1 className="">My favorite recipes:</h1>
                <h2>"Recipe #1"</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button type="submit" id="delete-button">Delete</button>


                <h2>"Recipe #2"</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button type="submit" id="delete-button">Delete</button>


                <h2>"Recipe #3"</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <button type="submit" id="delete-button">Delete</button>
            </section>
            </div>
        )
    }

}

export default MyRecipes;