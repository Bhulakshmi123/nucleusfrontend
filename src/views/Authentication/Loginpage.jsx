import React, { Component } from 'react';
import { Button, Col, Form, Card } from 'react-bootstrap';
import { getClientInfo } from './actions';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var validator = require('validator');
export class Loginpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null,
            tokenId: null,
            loginStatus: false,
            userNameError: false,
            userPasswordError: false,
            errorMessageUsername: '',
            errorMessagePassword: ''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitForm (e) {
        e.preventDefault();
        if (this.state.username === null || this.state.password === null) {
            this.setState({
                'errorMessage_submit': 'Check Login Details'
            })
        } else {
            let data = {
                "username": this.state.username,
                "password": this.state.password,
                "companyUuid": "1a8abc1c-8c11-11e8-86bd-7054d27b259a"
            };
            getClientInfo(data).then((res) => {
                if (res === false) {
                    this.failedNotification();
                }
                else {
                    console.log(res);
                    this.successNotification(res);
                    localStorage.setItem("tokenId", res.data.token);
                    localStorage.setItem("uuid", res.data.uuid);
                    localStorage.setItem("username", res.data.name);
                    localStorage.setItem("supplierUuid", res.data.supplierUuid);
                    this.setState({ tokenId: res.data.token, loginStatus: true });
                }
            });
        }
    }
    // handleChange (e) {
    //     this.setState({ [e.target.name]: e.target.value });
    //     console.log('Validator Test',validator.isEmail(''))
    //     let error = 'errorMessage_' + [e.target.name];
    //     if (e.target.type === 'text') {
    //         if (!validator.isEmail(e.target.value))
    //             this.setState({ [error]: 'Check ' + [e.target.name] + ' input' })
    //         else
    //             this.setState({ [error]: '', [e.target.name]: e.target.value })
    //     }
    //     if (e.target.type === 'password') {
    //         if (!validator.isAlphanumeric(e.target.value))
    //             this.setState({ [error]: 'Check ' + [e.target.name] + ' input' })
    //         else
    //             this.setState({ 'errorMessage_': 'Wrong Password', [e.target.name]: e.target.value })
    //     }
    // }userNameError: false
    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.type === 'text') {
            if (validator.isEmail(e.target.value) || validator.isMobilePhone(e.target.value) && e.target.value.length >= 10) {
                this.setState({ userNameError: false, errorMessageUsername: '' });
            }
            else if (e.target.value.length === 0) {
                this.setState({ userNameError: false, errorMessageUsername: 'Invalid Email / Phone Number' });
            }
            else {
                this.setState({ userNameError: true, errorMessageUsername: 'Invalid Email / Phone Number' });
            }
        }
    }
    successNotification = (res) => {
        toast("Welcome Back "+ res.data.name, {
            position: toast.POSITION.TOP_RIGHT,
            className: 'text-center bg-white text-dark fontGilroyBold bor-rad-05'
        });
    };
    failedNotification = () => {
        toast("Unable to Login Please Check your Credentials", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'text-center bg-white text-dark fontGilroyBold bor-rad-05'
        });
    };

    render () {
        if (this.state.loginStatus === true) {
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
        return (
            <React.Fragment>
                <div className="bg-bluefuchsia overflow-auto w-100 vh-100">
                    <div className="text-white text-center mt-5">
                        <div className="font-size-25">Hello EQUIPHUNT!</div>
                        <div className="font-size-11 opct-08 mb-3">Welcome to EH Trackr !</div>
                        <Col md={4} sm={6} xs={12} className="mx-auto">
                            <Card>
                                <Card.Body>
                                    <div className="font-size-20 mt-0 text-dark">Login Details</div>
                                    <Form className="pt-4 px-3" onSubmit={this.submitForm}>
                                        <Form.Group controlId="username">
                                            <Form.Label className="w-100 text-center text-dark">Email or Phone</Form.Label>
                                            <Form.Control type="text" name='username' value={this.state.username} onChange={this.handleChange.bind(this)} className="text-center p-4 font-size-13 h-65" placeholder="Email or Phone" autoComplete="new-username" />
                                            {this.state.userNameError ? <div className="text-danger font-size-10">{this.state.errorMessageUsername}</div> : null}
                                        </Form.Group>
                                        <Form.Group controlId="password">
                                            <Form.Label className="w-100 text-center text-dark">Password</Form.Label>
                                            <Form.Control type="password" className="text-center p-4 font-size-13 h-65" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} placeholder="Password" autoComplete="new-password" />
                                            {this.state.userPasswordError ? <div className="text-danger font-size-10">{this.state.errorMessagePassword}</div> : null}
                                        </Form.Group>
                                        <Button variant="primary" className="p-3 mt-4" block size="lg" type="submit">SIGN IN</Button>
                                        <div className="text-danger font-size-10"> {this.state.errorMessage_submit}</div>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                            <Form.Text className="mt-4">
                                                <span className="text-primary p-1 font-size-08 cursor-pointer">Back to Company ID</span>
                                                <span className="text-dark">|</span>
                                                <span className="text-primary p-1 font-size-08 cursor-pointer">Forgot Password ?</span>
                                            </Form.Text>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Loginpage;


