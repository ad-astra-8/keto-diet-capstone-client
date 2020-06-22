import React, { Component } from 'react'
import Navbar from './Navbar'





class Account extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <section className="my-account">
                    <h1 className="">My Account:</h1>
                    <h3><a href="#my-posts">See my posts</a></h3>
                    <h3><a href="#favorites">See my favorite recipes</a></h3>

                    <label>Update my account</label>
                    <button type="submit" id="update-button">Update</button>
                    <label>Delete my account</label>
                    <button type="submit" id="delete-button">Delete</button>
                    <p>(links in blue will direct you to one of the pages below "my favorite" or "my posts")</p>
                </section>
            </div>

        )
    }

}

export default Account;