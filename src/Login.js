import React, { Component } from "react";
import config from "./config";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        loginUsername: "",
        loginPassword: "",
      },
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    );
    return queryItems.join("&");
  }

  validateUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = "";
    }
    return outputEmail;
  }

  validatePassword(inputPassword) {
    let outputPassword = inputPassword;
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters that are letters, numbers or the underscore
    let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordformat)) {
      outputPassword = "";
    }
    return outputPassword;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {};

    //get all the from data from the form component
    const formData = new FormData(e.target);

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1];
    }
    console.log(data);
    let { loginUsername, loginPassword } = data;

    //starting validation
    //check username
    if (this.validateUsername(loginUsername) === "") {
      this.setState({
        error: "username is not valid",
      });
    }

    //check password
    else if (this.validatePassword(loginPassword) === "") {
      this.setState({
        error: "password is not valid",
      });
    }
    //if validation is successful, make API call
    else {
      //assigning the object from the form data to params in the state
      this.setState({
        params: data,
        error: null,
      });

      //check if the state is populated with the search params data
      console.log(this.state.params);

      const searchURL = `${config.API_ENDPOINT}/login-page`;

      const queryString = this.formatQueryParams(data);

      //sent all the params to the final url
      const url = searchURL + "?" + queryString;

      console.log(url);

      const options = {
        method: "GET",
        header: {
          Authorization: "",
          "Content-Type": "application/json",
        },
      };

      //useing the url and paramters above make the api call
      fetch(url, options)
        // if the api returns data ...
        .then((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong, please try again later.");
          }
          // ... convert it to json
          return res.json();
        })
        // use the json api output
        .then((data) => {
          //check if there is meaningfull data
          console.log(data);
          // check if there are no results
          if (data.totalItems === 0) {
            throw new Error("No user found");
          }
        })
        .catch((err) => {
          // this.setState({
          //     error: err.message
          // })
        });
    }
  };

  render() {
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>
    ) : (
      false
    );
    return (
      <section className="login-component">
        <div className="login-div">
          <Link to="/forum">forum</Link>
          <h1 className="title">Everything Keto</h1>
          <h2 className="subtitle">Log in to enter Ketosis!</h2>
          <div className="form-div">
            <form className="login-form" onSubmit={this.handleSubmit}>
              {errorMessage}
              <label htmlFor="username">Username:</label>
              <input
                className="login-input"
                type="text"
                name="loginUsername"
                placeholder="my.username@ymail.com"
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                className="login-input"
                type="password"
                name="loginPassword"
                placeholder="password"
                required
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <div className="footer">
            <p>Don't have an account yet?</p>
            <a href="#register-component" className="register-link">
              <span>Sign up here</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
