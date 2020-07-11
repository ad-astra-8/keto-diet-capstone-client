import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'


class Account extends Component {
    render() {
        return (
            <div>
                    <Navbar />
                    <section className="my-account">
                        <h1 className="">My Account:</h1>
                        {/* <Link to="/my-posts-page"><h3>See my posts</h3></Link> */}
                        <Link to="/my-recipes-page"><h3>See my favorite recipes</h3></Link>

                        <form className="account-page-form">
                            {/* <label>Update my password: </label>
                            <input type="text" id="update-password" placeholder="enter new password" />
                            <button type="submit" id="update-button">Update</button> */}

                            {/* <label>Delete my account</label>
                            <button type="submit" id="delete-button">Delete</button> */}
                        </form>
                    </section>

            </div>

        )
    }

}

export default Account;