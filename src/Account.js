import React, { Component } from 'react'
import MyPosts from './MyPosts'
import MyRecipes from './MyRecipes'




class Account extends Component {
    render() {
        return (
            <section className="my-account">
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

                <h1 className="">My Account:</h1>
                <h3><a href="#my-posts">See my posts</a></h3>
                <h3><a href="#favorites">See my favorite recipes</a></h3>

                <label>Update my account</label>
                <button type="submit" id="update-button">Update</button>
                <label>Delete my account</label>
                <button type="submit" id="delete-button">Delete</button>
                <p>(links in blue will direct you to one of the pages below "my favorite" or "my posts")</p>
                <MyPosts />
                <MyRecipes />
            </section>

        )
    }

}

export default Account;