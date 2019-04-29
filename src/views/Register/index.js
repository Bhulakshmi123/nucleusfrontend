import React, { Component } from 'react';
import Input from '../../components/Inputs/AuthInput';
import RegisterButton from '../../components/Buttons/AuthButton';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Register extends Component{
    render(){
        return (
            <div class="container">
                <div class="root">
                    <div class="text-center">
                        <p class="heading text-center">Hello ABC Constructions!</p>
                        <p class="subheading text-center">Welcome to Telematix Alpha!</p>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="text-center card-heading">Enter your Details</h5>
                            <Input label="Company Name" type="text" placeholder="Enter Your Company Name" />
                            <Input label="Name"  type="text"  name="name" placeholder="Enter Your Name" />
                            <Input label="Email" type="email" name="email" placeholder="Enter Your Email" />
                            <Input label="Phone" type="text" name="phone" placeholder="Enter Your Phone" />
                            <RegisterButton label="Sign Up" />

                            <Link to={`/login`} class="Forgot-Password text-center">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;