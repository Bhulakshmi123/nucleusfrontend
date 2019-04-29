import React, { Component } from 'react';
import './ForgetPassword.css';

class ForgetPassword extends Component {
    render() {
        return (
            <div class="container">
                <div class="root">
                    <div class="text-center">
                        <p class="heading text-center">Hello ABC Constructions!</p>
                        <p class="subheading text-center">Welcome to Telematix Alpha!</p>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-center card-heading">Enter your Login Details</h5>
                            <div class="inputbox">
                                <label class="labeltext text-center">Email or Phone</label>
                                <input type="email" class="form-control text-center fc-modified" value="geekymano@gmail.com" required />
                            </div>
                            <div class="buttonbox">
                                <button class="btn btn-primary btn-block sign-btn">Reset Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;