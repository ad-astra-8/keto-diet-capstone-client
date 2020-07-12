import React, { Component } from "react";
import config from "./config";
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        registerUsername: "",
        registerPassword: "",
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
    let { registerUsername, registerPassword } = data;
    //starting validation
    //validate username
    if (this.validateUsername(registerUsername) === "") {
      this.setState({
        error: "username must be an email address",
      });
    }
    //validate password
    else if (this.validatePassword(registerPassword) === "") {
      this.setState({
        error: "password is not valid",
      });
    }
    //if validation successful, make API call
    else {
      //assigning the object from the form data to params in the state
      this.setState({
        params: data,
        error: null,
      });

      //check if the state is populated with the search params data
      console.log(this.state.params);

      const searchURL = `${config.API_ENDPOINT}/registration-page`;

      const queryString = this.formatQueryParams(data);

      //sent all the params to the final url
      const url = searchURL + "?" + queryString;
      console.log(url);

      //define the API call parameters
      const options = {
        method: "POST",
        header: {
          Authorization: "",
          "Content-Type": "application/json",
        },
      };

      //using the url and paramters above make the api call
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
          TokenService.saveAuthToken(response.authToken)
          TokenService.saveUserId(response.id)
          //check if there is meaningfull data
          console.log(data);
          // check if there are no results
          if (data.totalItems === 0) {
            throw new Error("No data found");
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
      <section className="register-component">
        <div className="login-div">
          <h1 className="title">Everything Keto</h1>
          <h2 className="subtitle">Create your account!</h2>
          <div className="form-div">
            <form className="register-form" onSubmit={this.handleSubmit}>
              {errorMessage}
              <label htmlFor="enter-username">Enter Username:</label>
              <input
                className="register-input"
                type="text"
                name="registerUsername"
                placeholder="my.username@ymail.com"
                required
              />
              <label htmlFor="enter-password">Enter Password:</label>
              <input
                className="register-input"
                type="password"
                name="registerPassword"
                placeholder="password"
                required
              />
              <button type="submit" className="login-button">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
