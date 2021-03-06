import React, { Component } from "react";

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
      },
    });
  }

  updateName = (name) => {
    this.setState({
      name: {
        value: name,
      },
    });
  };

  updateContent = (content) => {
    this.setState({
      content: {
        value: content,
      },
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, tabName, content } = e.target;
    const note = {
      name: name.value,
      id_folder: parseInt(tabName.value),
      content: content.value,
    };

    const url = "https://keto-diet-api.herokuapp.com/api/notes";

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
        this.props.updateNote(data);
        alert('Post added!');
        window.location = '/forum'
      })

      .catch((error) => {
        // this.setState({ appError: error });
      });
  };

  render() {
    return (
      <div>
        <section className="addPost">
          <p className='intro'>Select a topic to discuss and share your experience!</p>
          <form className="add-note" onSubmit={this.handleSubmit}>

            <fieldset className="post-div">
              <label htmlFor="post-comment">
                Post your comment about:
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
              </label>

              <fieldset className="post-title">
                <label htmlFor="title">Give a title for your post</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue=""
                  placeholder="your title"
                  onChange={(e) => this.updateName(e.target.value)}
                />
              </fieldset>

              <textarea
                id="postComment"
                placeholder="leave your comment here"
                name="content"
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
