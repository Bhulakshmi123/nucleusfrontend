import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveTokenNoAction } from '../../redux/actions/index.jsx'
import { Button, Col, Form, Card } from 'react-bootstrap';
import { getClientInfo } from './actions';
import { Redirect } from 'react-router-dom';
var validator = require('validator');
export class Loginpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            tokenId: "",
            loginStatus: false,
            errorMessage: ''
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitForm(e) {
        e.preventDefault();
        if (this.state.username === null || this.state.password === null) {
            this.setState({ 'errorMessage_submit': 'Check Login Details' })
        }
        else {
            this.getClientInfo();
        }
    }
    getClientInfo = async () => {
        let data = {
            "username": this.state.username,
            "password": this.state.password,
            "companyUuid": "1a8abc1c-8c11-11e8-86bd-7054d27b259a"
        };
        let response = await getClientInfo(data);
        if (response) {
            // this.props.saveTokenNoAction(true);
            console.log(this.props)
            localStorage.setItem("tokenId", response.data.token);
            localStorage.setItem("username", response.data.name);
            this.setState({ loginStatus: true })
        }
        else {
            window.alert("Login Failed");
        }
    }

    handleChange(e) {
        let error = 'errorMessage_' + [e.target.name];
        if (e.target.type === 'text') {
            console.log(error);
            if (!validator.isEmail(e.target.value))
                this.setState({ [error]: 'Check ' + [e.target.name] + ' input' })
            else
                this.setState({ [error]: '', [e.target.name]: e.target.value })
        }
        if (e.target.type === 'password') {
            if (!validator.isAlphanumeric(e.target.value))
                this.setState({ [error]: 'Check ' + [e.target.name] + ' input' })
            else
                this.setState({ 'errorMessage_': 'hwluytut', [e.target.name]: e.target.value })
        }
    }
    render() {
        if (this.state.loginStatus === true) {
            return (<Redirect to="/dashboard"></Redirect>)
        }
        return (
            <React.Fragment>
                <div className="loginContent">
                    <div className="text-white text-center mt-5">
                        <div className="font-size-25">Hello EQUIPHUNT!</div>
                        <div className="font-size-11 opct-8 mb-3">Welcome to EH Trackr !</div>
                        <Col md={4} sm={6} xs={12} className="mx-auto">
                            <Card>
                                <Card.Body>
                                    <div className="font-size-20 mt-0 text-dark">Login Details</div>
                                    <Form className="pt-4 px-3" onSubmit={this.submitForm}>
                                        <Form.Group controlId="username">
                                            <Form.Label className="w-100 text-center text-dark">Email or Phone</Form.Label>
                                            <Form.Control type="text" className="text-center p-4 font-size-13 hi-65" name="username" value={this.state.username} onChange={this.onChange} placeholder="Email or Phone" required autoComplete="new-username" />
                                            <div className="text-danger font-size-10">{this.state.errorMessage_username}</div>
                                            <Form.Control.Feedback type="invalid">
                                                {this.state.errorMessage_email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="password">
                                            <Form.Label className="w-100 text-center text-dark">Password</Form.Label>
                                            <Form.Control type="password" className="text-center p-4 font-size-13 hi-65" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required autoComplete="new-password" />
                                            <div className="text-danger font-size-10"> {this.state.errorMessage_password}</div>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
const mapStateToProps = (state) => {
    return {
        savedTokenNo: state.savedTokenNo
    }
}
const mapDispatchToProps = () => {
    return {
        saveTokenNoAction
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Loginpage);




