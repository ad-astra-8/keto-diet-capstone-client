import React, { Component } from 'react'
import Navbar from './Navbar'
import AddPost from './AddPost'


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
        console.log('hi from onChange', event.target.value)
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
            <button className="tab" key={index} type="button" onClick={() => this.handleTabClick(index)}>
                {tab.tabName}
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

    renderTitle() {
        const currentTitle = this.props.tabs[this.state.currentTabIndex]
        // console.log(currentTitle)
        // console.log(this.props.tabs)

        return (
            currentTitle && 
            <h2 className='content-title'>
                "{currentTitle.title}"
            </h2>
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
                    <h2 className="section-title">Forum</h2>
                    <form className="forum-form">
                        <fieldset className="search-div">
                        <label className="search-label" htmlFor="search-term">Search for a post with keyword:</label>
                        <input className="search-input" type="text" value={this.state.inputValue} onChange={this.forumFilterOnChange} id="search-term" placeholder="enter keyword" />
                        </fieldset>
                        <div className="postResults">
                            <h2>Results matching your specific search:</h2>
                            {this.state.inputValue && filteredForum.map(({ title, content }) => (
                            <div className="searchTerm-results">
                            <h2>{title}</h2>
                            <p>{content}</p>
                            </div>
                            )
                            )}
                        </div>

                        <div className="tabsContainer">
                            {this.renderButtons()}
                            {this.renderTitle()}
                            {!!this.props.tabs.length && this.renderContent()}
                        </div>

                        {/* <p> Did you find this comment helpful? </p> */}
                        {/* <i className="fa fa-thumbs-up" aria-hidden="true"></i><button type="submit" id="update-helpful-button" onClick={this.handleHelpful}>Helpful ({this.state.helpfulCount})</button>
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i><button type="submit" id="update-notHelpful-button" onClick={this.handleNotHelpful}>Not helpful ({this.state.notHelpfulCount})</button> */}

                        {/* <div>
                            <label htmlFor="post-comment">Post your comment about:</label>
                            <select name="cars" id="cars">
                                <option value="">Select one</option>
                                <option value="">Routine</option>
                                <option value="">Workout</option>
                                <option value="">Recipes</option>
                            </select>
                        </div> */}

                        {/* <p className="error-message">error: please enter a comment</p>
                        <p className="error-message">error: please select a category</p> */}

                        {/* <div className="comment-area">
                            <textarea id="post-comment" placeholder="leave your comment here"></textarea>
                            <br />
                            <button type="submit" id="comment-submit-button">Submit</button>
                        </div> */}
                    </form>

                    <AddPost tabs={this.props.tabs} />

                </section>
            </div>
        )

    }
}

export default Forum;