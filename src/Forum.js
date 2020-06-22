import React, { Component } from 'react'


class Forum extends Component {
    render() {
        return (
            <section className="forum">
                <h2 className="forum">Forum</h2>
                <label for="search-term">Search for a post with keyword:</label>
                <input type="input" name="search" id="search-term" value="" placeholder=" keyword" />
                <button type="submit" id="submit-keyword">Search</button>
                <p className="error-message">error: please enter a search term</p>
                <p className="error-message">error: sorry, we found 0 result for your search about " "</p>

                <div className="tab">
                    <button className="tablinks" onclick="openCity(event, 'London')">Routine </button>
                    <button className="tablinks" onclick="openCity(event, 'Paris')">Workout </button>
                    <button className="tablinks" onclick="openCity(event, 'Tokyo')">Recipes </button>
                </div>

                <h3>Results for "Routine":</h3>
                <h4>Larry posted:</h4>
                <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p> Did you find this comment helpful? </p>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i><button type="submit" id="update-button">Helpful</button>
                <i className="fa fa-thumbs-down" aria-hidden="true"></i> <button type="submit" id="update-button">Not Helpful</button>

                <div>
                    <label for="post-comment">Post your comment about:</label>
                    <select name="cars" id="cars">
                        <option value="">Select one</option>
                        <option value="">Routine</option>
                        <option value="">Workout</option>
                        <option value="">Recipes</option>
                    </select>
                </div>
                <p className="error-message">error: please enter a comment</p>
                <p className="error-message">error: please select a category</p>


                <div className="comment-area">
                    <textarea id="post-comment" value="" placeholder="leave your comment here"></textarea>
                    <br />
                    <button type="submit" id="comment-submit-button">Submit</button>
                </div>
            </section>

        )
    }

}

export default Forum;