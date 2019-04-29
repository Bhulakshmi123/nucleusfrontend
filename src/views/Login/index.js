import React, { Component } from 'react';
import AuthInput from '../../components/Inputs/AuthInput';
import AuthButton from '../../components/Buttons/AuthButton';
import { Link } from 'react-router-dom';


class Login extends Component {
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
                            <AuthInput type="email" name="email" label="Email or Phone" placeholder="riz@gmail.com" />
                            <AuthInput type="password" name="password" label="Password" placeholder="" />
                            <AuthButton label="Sign In" />
                            
                            <center style={{'margin': '0 auto'}}>
                                <Link to={`/forgetpassword`} >Forgot Password?</Link> | 
                                <Link to={`/register`} >Create an account</Link>
                            </center>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;