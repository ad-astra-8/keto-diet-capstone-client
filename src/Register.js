import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <section class="register-component">
                <h1 class="title">Everything Keto</h1>
                <h2 class="subtitle">Create your account!</h2>
                <div class="form-div">
                    <form class="register-form">
                        <label for="enter-username">Enter Username:</label>
                        <input type="input" name="register" id="enter-username" value="" placeholder="enter username here" required />
                        <p className="error-message">please enter a valid username</p>      
                        <label for="enter-password">Enter Password:</label>
                        <input type="input" name="register" id="enter-password" value="" placeholder="enter password here" required />
                        <p className="error-message">please enter a valid password</p>      
                        <button type="submit" id="submit-registration">Register</button>
                    </form>
                </div>
            </section>
        )
    }

}

export default Register;