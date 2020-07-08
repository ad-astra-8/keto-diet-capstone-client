import React, { Component } from "react";
// import Navbar from './Navbar'
// import config from './config'
// import ValidationError from './ValidationError';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      name: "",
      tabName: "",
      content: "",
    };
  }

  updatetabName(tabName) {
    this.setState({
      tabName: {
        value: tabName,
        // touched: true
      },
    });
  }

  updateName = (name) => {
    this.setState({
      name: {
        value: name,
        // touched: true
      },
    });
  };

  updateContent = (content) => {
    this.setState({
      content: {
        value: content,
        // touched: true
      },
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");

    const { name, tabName, content } = e.target;
    const note = {
      // note_name: title.value,
      name: name.value,
      id_folder: parseInt(tabName.value),
      content: content.value,
    //   modified: new Date(),
    };
    console.log(note);

    const url = "http://localhost:8000/api/notes";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.props.updateNote(data)

        // this.state.title.value = "";
        // this.state.content.value = "";
        // tabName.value = '';
        // this.context.addNote(data);
        // this.setState({ data });
        // this.props.history.push('/', data);
      })

      .catch((error) => {
        // this.setState({ appError: error });
      });
  };

  render() {
// console.log(this.props.tabs)
// console.log(this.state.tabName)
    return (
      <div>
        <section className="addPost">
          <form className="add-note" onSubmit={this.handleSubmit}>
            <fieldset className="post-div">
              <label htmlFor="title">Give a title for your post</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue=""
                onChange={e => this.updateName(e.target.value)}
              />
            </fieldset>

            <fieldset className="post-div">
              <label htmlFor="post-comment">Post your comment about:</label>

              <select
                id="tabName"
                name="tabName"
                value={this.state.tabName.value}
                onChange={(e) => this.updatetabName(e.target.value)}
              >
                <option value={this.state.tabName}>Select a folder</option>
                {Object.entries(this.props.tabs).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>

              <textarea
                id="post-comment"
                placeholder="leave your comment here"
                name="content"
                // id="content"
                defaultValue=""
                onChange={(e) => this.updateContent(e.target.value)}
              ></textarea>
            </fieldset>
            <button type="submit" id="submit-btn">
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default AddPost;
