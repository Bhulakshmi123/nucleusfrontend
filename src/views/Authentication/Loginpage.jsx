// import React, { Component } from 'react';
import React from 'react';
import { Button, Col, Form, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { render } from "react-dom";
import * as Yup from 'yup';
import { getClientInfo } from './actions';
import { Formik, Field, ErrorMessage } from 'formik';
class Loginpage extends React.Component {
    render() {
        if (this.state.loginStatus === true) {
            return (<Redirect to="/dashboard"></Redirect>)
        }
        return (
            <div>
                <div className="loginContent">
                    <div className="text-white text-center mt-5">
                        <div className="font-size-25">Hello EQUIPHUNT!</div>
                        <div className="font-size-11 opct-8 mb-3">Welcome to EH Trackr !</div>
                        <Col md={4} sm={6} xs={12} className="mx-auto">
                            <Card>
                                <Card.Body>
                                    <div className="font-size-20 mt-0 text-dark">Login Details</div>
                                    <Formik
                                        initialValues={{ email: '', password: '' }}
                                        validationSchema={Yup.object().shape({
                                            email: Yup.string()
                                                .email('Email is invalid')
                                                .required('Email is required'),
                                            password: Yup.string()
                                                .min(4, 'Password must be at least 4 characters')
                                                .required('Password is required'),
                                        })}
                                        // onChange = {(e) => {
                                        //     this.setState({ [e.target.name]: e.target.value })
                                        // }}
                                        onSubmit={fields => {
                                            
                                            let data = { "username": fields.email, "password": fields.password, "companyUuid": "1a8abc1c-8c11-11e8-86bd-7054d27b259a" }
                                            getClientInfo(data).then((res) => {
                                                if (res == false) {
                                                    console.log('Login Failed');
                                                }
                                                else {
                                                    {
                                                        console.log(res)
                                                    }
                                                }
                                            });
                                        }}

                                    >
                                        {({
                                            values,
                                            errors,
                                            handleChange,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => (
                                                <Form className="pt-4 px-3" onSubmit={handleSubmit}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label className="w-100 text-center text-dark">Email or Phone</Form.Label>
                                                        <Form.Control type="email" className="text-center p-4 font-size-13 hi-65" name="email" placeholder="Email or Phone" autoComplete="new-email" onChange={handleChange} value={values.email} />
                                                        <Form.Text className="text_clr">{errors.email && errors.email}</Form.Text>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label className="w-100 text-center text-dark">Password</Form.Label>
                                                        <Form.Control type="password" className="text-center p-4 font-size-13 hi-65" name="password" placeholder="Password" autoComplete="new-password" onChange={handleChange} value={values.password} />
                                                        <Form.Text className="text_clr">{errors.password && errors.password}</Form.Text>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit" className="p-3 mt-4" block size="lg" disabled={isSubmitting} type="submit">SIGN IN</Button>
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Text className="mt-4">
                                                            <span className="text-primary p-1 font-size-08 cursor-pointer">Back to Company ID</span>
                                                            <span className="text-dark">|</span>
                                                            <span className="text-primary p-1 font-size-08 cursor-pointer">Forgot Password ?</span>
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Form>
                                            )}
                                    </Formik>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </div>
            </div>
        )
    }
}
export default Loginpage;



