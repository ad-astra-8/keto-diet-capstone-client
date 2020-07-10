import React, { Component } from "react";
import Navbar from "./Navbar";
import AddPost from "./AddPost";
// import config from "./config";
import { Link } from "react-router-dom";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // helpfulCount: 0,
      // notHelpfulCount: 0,
      currentTabIndex: "",
      inputValue: "",
      folderList: [],
      tabs: { 1: "Routine", 2: "Workout", 3: "Recipes" },
    };
  }

  // static defaultProps = { tabs: [] };
  // state = {
  //   currentTabIndex: 0,
  // };

  componentDidMount() {
    let getCollectionByUserId = `http://localhost:8000/api/notes`;
    //  /${TokenService.getUserId()}`;

    console.log(getCollectionByUserId);

    fetch(getCollectionByUserId)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          folderList: data,
        });
      })
      .catch((error) => console.log(error));
    // console.log('Stateful component Dashboard successfully mounted.');
  }

  forumFilterOnChange = (event) => {
    console.log("hi from onChange", event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  };

  // handleHelpful = (e) => {
  //     e.preventDefault();
  //     this.setState(prevState => {
  //         return {
  //             helpfulCount: prevState.helpfulCount + 1
  //         }
  //     })
  // }

  // handleNotHelpful = (e) => {
  //     e.preventDefault();
  //     this.setState(prevState => {
  //         return {
  //             notHelpfulCount: prevState.notHelpfulCount + 1
  //         }
  //     })
  // }

  handleTabClick = (id_folder) => {
    console.log("button clicked!", { id_folder });
    this.setState({ currentTabIndex: id_folder });
  };

  renderButtons() {
    // console.log(this.props);
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
      if (this.state.currentTabIndex === tab.id_folder) {
        console.log(tab);
        console.log(tab.id_folder);

        return (
          <div key={index}>
            <h2 className="content-title">{tab.name}</h2>
            <div className="content">{tab.content}</div>
          </div>
        );
      }
    });
    return currentTab;
  }

  renderTitle() {
    const currentTitle = this.props.tabs[this.state.currentTabIndex];
    // console.log(currentTitle)
    // console.log(this.props.tabs)

    return currentTitle && <h2>{currentTitle.name}</h2>;
  }

  render() {
    console.log(this.state.folderList);
    // console.log(this.props.tabs)
    const filteredForum = this.props.tabs.filter((tab) => {
      let content = tab.content
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
      let title = tab.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
      return content || title;
    });

    // let listofcollections = 'Unknown';

    // if(this.state.folderList.length !== 0 ){
    //   listofcollections = this.state.folderList.map((collection, key) => {
    //     const linkString = `/folderlist/show/${collection.id}`

    // return (
    //   <div className="list" key={key}>
    //     {/* <Link to={linkString}>
    //       <h3>{collection.collection_name}</h3>
    //     </Link> */}
    //     {/* <Link to={`/comment/add/${collection.id}`}>Add a comment</Link> */}
    //     {/* <form onSubmit={this.deleteCollection} className="deleteForm">
    //       <input type="hidden" name='collectionId' defaultValue={collection.id}></input>
    //       <button type="submit" className="deleteButton">Delete Collection</button>
    //     </form> */}
    //   </div>
    //   )
    // });
    // }
    return (
      <div>
        <Navbar />
        <section className="forum">
          <h2 className="section-title">Forum</h2>
          <p className='intro'>Filter your search and check your results below!</p>
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
              <h2>Results matching your specific search:</h2>
              {this.state.inputValue &&
                filteredForum.map(({ name, content }) => (
                  <div className="searchTerm-results">
                    <h2>{name}</h2>
                    <p>{content}</p>
                  </div>
                ))}
            </div>

            <div className="tabsContainer">
            <p className='intro'>Click on a tab and search posts per topics!</p>

              {this.renderButtons()}
              {/* {listofcollections} */}
              {/* {this.renderTitle()} */}
              {!!this.props.tabs.length && this.renderContent()}
              {/* <Link to="/booklist/create">Create a collection</Link> */}
            </div>

            {/* <p> Did you find this comment helpful? </p> */}
            {/* <i className="fa fa-thumbs-up" aria-hidden="true"></i><button type="submit" id="update-helpful-button" onClick={this.handleHelpful}>Helpful ({this.state.helpfulCount})</button>
                        <i className="fa fa-thumbs-down" aria-hidden="true"></i><button type="submit" id="update-notHelpful-button" onClick={this.handleNotHelpful}>Not helpful ({this.state.notHelpfulCount})</button> */}

            {/* <p className="error-message">error: please enter a comment</p>
                        <p className="error-message">error: please select a category</p> */}
          </form>

          <AddPost tabs={this.state.tabs} updateNote={this.props.updateNote} />
        </section>
      </div>
    );
  }
}

export default Forum;
