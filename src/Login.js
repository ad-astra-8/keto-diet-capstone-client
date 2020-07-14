import React, { Component } from "react";
// import config from "./config";
// import { Link } from "react-router-dom";
import AuthApiService from './services/auth-api-service';
import TokenService from './services/token-service';

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


  handleSubmit = (event) => {
    event.preventDefault();
    const { loginUsername, loginPassword } = event.target
    console.log('loginUsername:', loginUsername.value, "loginPassword:", loginPassword.value);
    AuthApiService.postLogin({
      userName: loginUsername.value,
      password: loginPassword.value,
    })

      .then(response => {
        console.log("response ID", response)
        loginUsername.value = ''
        loginPassword.value = ''
        TokenService.saveAuthToken(response.authToken)
        TokenService.saveUserId(response.userId)
        window.location = '/homepage'
      })
      .then(response => {
        console.log("response:", response)
      })
      .catch(err => {
        console.log(err);
      });
  }

  validateloginUsername(inputEmail) {
    let outputEmail = inputEmail;
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
    if (!inputEmail.match(mailformat)) {
      outputEmail = "";
    }
    return outputEmail;
  }

  validateloginPassword(inputloginPassword) {
    let outputloginPassword = inputloginPassword;
    // at least one number, one lowercase and one uppercase letter
    // at least eight characters that are letters, numbers or the underscore
    let loginPasswordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputloginPassword.match(loginPasswordformat)) {
      outputloginPassword = "";
    }
    return outputloginPassword;
  }


  render() {
    const errorMessage = this.state.error ? (
      <p className="error-message">{this.state.error}</p>) : (false);

    return (
      <section className="login-component">
        <div className="login-div">
          {TokenService.getUserId()}
          <h1 className="title">Everything Keto</h1>
          <h2 className="subtitle">Log in to enter Ketosis!</h2>
          <div className="form-div">
            <form className="login-form" onSubmit={this.handleSubmit}>
              {errorMessage}
              <label htmlFor="loginUsername">Username:</label>
              <input
                className="login-input"
                type="text"
                name="loginUsername"
                placeholder="my.username@ymail.com"
                required
              />
              <label htmlFor="loginPassword">Password:</label>
              <input
                className="login-input"
                type="Password"
                name="loginPassword"
                placeholder="Password"
                required
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <div className="link-register">
            <p>Don't have an account yet?</p>
            <a href="#register-component" className="register-link">
              {/* <Link to="/register" component={Register}>Sign up here</Link> */}
              {/* <Route exact path="/about" component={About}/> */}

            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
