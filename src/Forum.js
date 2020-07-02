import React, { Component } from 'react'
import Navbar from './Navbar'



class Forum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            helpfulCount: 0,
            notHelpfulCount: 0,
            currentTabIndex: 0,
            inputValue: ''
        }
    }

    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
    };

    forumFilterOnChange = (event) => {
        console.log('hi from onChnage', event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    handleHelpful = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                helpfulCount: prevState.helpfulCount + 1
            }
        })
    }

    handleNotHelpful = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                notHelpfulCount: prevState.notHelpfulCount + 1
            }
        })
    }


    handleTabClick = (index) => {
        // console.log('button clicked!', { index })
        this.setState({ currentTabIndex: index })
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} type="button" onClick={() => this.handleTabClick(index)}>
                {tab.name}
            </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        const filteredForum =
            this.props.tabs.filter(tab => {
                return tab.content.toLowerCase().includes(this.state.inputValue.toLowerCase())
            })

        return (
            <div>
                <Navbar />
                <section className="forum" >
                    <h2 className="">Forum</h2>
                    <form className="forum-form">
                        <label htmlFor="search-term">Search for a post with keyword:</label>
                        <input type="text" value={this.state.inputValue} onChange={this.forumFilterOnChange} id="search-term" placeholder="enter keyword" />
                        {/* <button type="button" id="submit-keyword" onChange={this.forumFilterOnChange}>Search</button> */}
                        <p className="error-message">error: please enter a search term</p>
                        <p className="error-message">error: sorry, we found 0 result for your search about " "</p>

                        {/* <div className="tab">
                        <button className="tablinks" onClick="openCity(event, 'London')">Routine </button>
                        <button className="tablinks" onClick="openCity(event, 'Paris')">Workout </button>
                        <button className="tablinks" onClick="openCity(event, 'Tokyo')">Recipes </button>
                    </div > */}


                        <div className="postResults">
                            <h3>Results matching your search:</h3>
                            {this.state.inputValue && filteredForum.map(({ content }) => (<p style={{ marginBottom: '10px', borderBottom: '1px solid black' }}>{content}</p>))}
                            {/* <h4>Larry posted:</h4>
                        <p className="lorem">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>*/}
                        </div>

                        <div className="tabsContainer">
                            {this.renderButtons()}
                            {!!this.props.tabs.length && this.renderContent()}
                        </div>

                        {/* <p> Did you find this comment helpful? </p> */}
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i><button type="submit" id="update-helpful-button" onClick={this.handleHelpful}>Helpful ({this.state.helpfulCount})</button>
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i><button type="submit" id="update-notHelpful-button" onClick={this.handleNotHelpful}>Not helpful ({this.state.notHelpfulCount})</button>

                        <div>
                            <label htmlFor="post-comment">Post your comment about:</label>
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
                            <textarea id="post-comment" placeholder="leave your comment here"></textarea>
                            <br />
                            <button type="submit" id="comment-submit-button">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        )

    }
}

export default Forum;