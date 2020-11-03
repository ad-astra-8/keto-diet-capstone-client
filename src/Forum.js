import React, { Component } from "react";
import Navbar from "./Navbar";
import AddPost from "./AddPost";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: "",
      inputValue: "",
      folderList: [],
      tabs: { 1: "Routine", 2: "Workout", 3: "Recipes" },
    };
  }


  componentDidMount() {
    let getCollectionByUserId = `https://keto-diet-api.herokuapp.com/api/notes`;

    fetch(getCollectionByUserId)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          folderList: data,
        });
      })
      .catch((error) => alert(error));
  }

  forumFilterOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleTabClick = (note_folder_id) => {
    this.setState({ currentTabIndex: note_folder_id });
  };

  renderButtons() {
    const currentButton = Object.entries(this.state.tabs).map(
      ([key, value]) => {
        let id = parseInt(key);

        return (
          <button
            className="tab"
            key={id}
            type="button"
            onClick={() => this.handleTabClick(id)}
          >
            {value}
          </button>
        );
      }
    );
    return currentButton;
  }

  renderContent() {
    const currentTab = this.props.tabs.map((tab, index) => {
      if (this.state.currentTabIndex === tab.note_folder_id) {

        return (
          <div key={index}>
            <h2 className="content-title">{tab.name}</h2>
            <div className="content"><p className="content-p">{tab.content}</p></div>
          </div>
        );
      } else {

        return null;
      }

    });
    return currentTab;
  }

  renderTitle() {
    const currentTitle = this.props.tabs[this.state.currentTabIndex];

    return currentTitle && <h2>{currentTitle.name}</h2>;
  }

  render() {
    const filteredForum = this.state.folderList.filter((tab) => {
      let content = tab.content
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
      let title = tab.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
      return content || title;
    });

    return (
      <div>
        <Navbar />
        <section className="forum">
          <h2 className="section-title">Forum</h2>
          <p className='intro'>Search for a post containing a specific keyword and check your results below!</p>
          <form className="forum-form">
            <fieldset className="search-div">
              <label className="search-label" htmlFor="search-term">
                Enter a keyword of your choice:
              </label>
              <input
                className="search-input"
                type="text"
                value={this.state.inputValue}
                onChange={this.forumFilterOnChange}
                id="search-term"
                placeholder="enter keyword"
              />
            </fieldset>
            <div className="postResults">
              <h2>Results matching your specific search below:</h2>
              {this.state.inputValue &&
                filteredForum.map(({ name, content, }, index) => (
                  <div key={index} className="searchTerm-results">
                    <h2>{name}</h2>
                    <p className="content-p">{content}</p>
                  </div>

                ))}
            </div>

            <div className="tabsContainer">
              <p className='intro'>Click on a tab and search posts per topics!</p>

              {this.renderButtons()}
              {!!this.state.folderList.length && this.renderContent()}

            </div>
          </form>

          <AddPost tabs={this.state.tabs} updateNote={this.props.updateNote} />
        </section>
      </div>
    );
  }
}

export default Forum;
