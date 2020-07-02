import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar'
import MyRecipesPage from './MyRecipesPage'
import MyPostsPage from './MyPostsPage'


class Account extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <section className="my-account">
                        <h1 className="">My Account:</h1>
                        <Link to="/MyPostsPage"><h3>See my posts</h3></Link>
                        <Link to="/MyRecipesPage"><h3>See my favorite recipes</h3></Link>
                        <Route path='/MyRecipesPage' component={MyRecipesPage} />
                        <Route path='/MyPostsPage' component={MyPostsPage} />

                        <form className="account-page-form">
                            <label>Update my password: </label>
                            <input type="text" id="update-password" placeholder="enter new password" />
                            <button type="submit" id="update-button">Update</button>

                            <label>Delete my account</label>
                            <button type="submit" id="delete-button">Delete</button>
                        </form>
                    </section>
                </BrowserRouter>

            </div>

        )
    }

}

export default Account;