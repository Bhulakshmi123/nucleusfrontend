import React, { Component } from 'react';
import { Button, Col, Form, Card } from 'react-bootstrap';
import { getClientInfo } from './actions';
export class Loginpage extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state;
        let data = { "username": username, "password": password, "companyUuid": "1a8abc1c-8c11-11e8-86bd-7054d27b259a" }
        getClientInfo(data).then((res) => {
            if (res == false) { console.log('Login Failed'); }
            else {
                {console.log(res)}
            }
        });
    }
    render() {
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
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="w-100 text-center text-dark">Email or Phone</Form.Label>
                                            <Form.Control type="text" className="text-center p-4 font-size-13 hi-65" name="username" value={this.state.username} onChange={this.onChange} placeholder="Email or Phone" required autoComplete="new-username" />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label className="w-100 text-center text-dark">Password</Form.Label>
                                            <Form.Control type="password" className="text-center p-4 font-size-13 hi-65" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required autoComplete="new-password" />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Button variant="primary" className="p-3 mt-4" block size="lg" type="submit">SIGN IN</Button>
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



