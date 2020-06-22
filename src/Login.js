import React, { Component } from 'react'


class Login extends Component {
    render() {
        return (
            <section className="login-component">
                <h1 className="title">Everything Keto</h1>
                <h2 className="subtitle">Log in to enter Ketosis!</h2>
                <div className="form-div">
                    <form className="login-form">
                        <label for="username">Username:</label>
                        <input type="input" name="login" id="username" value="" placeholder="my username" required />
                        <p className="error-message">username is not valid, please try again</p>
                        <label for="password">Password:</label>
                        <input type="input" name="login" id="password" value="" placeholder="my password" required />
                        <p className="error-message">password is not valid, please try again</p>
                    </form>
                </div>
                <div className="footer">
                    <p>Don't have an account yet?</p>
                    <a href="#register-component" className="register-link">
                        <span>Sign up here</span>
                    </a>
                </div>
            </section>
        )
    }

}

export default Login;