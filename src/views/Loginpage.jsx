import React, { Component } from 'react';
import { Button, Row, Col, Form, Card } from 'react-bootstrap';
import TextInput from '../components/FormFields/TextInput';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarViewAction } from '../redux/actions';
const Loginpage = (props) => {
    const dispatch = useDispatch();
    const sidebarView = useSelector(state => state.sidebarView);
    const dataFromUrl = () => {
        dispatch(sidebarViewAction(true));
    }
    return (
        <React.Fragment>
            {dataFromUrl()}
            <div className={sidebarView ? "loginContent" : "mainContent"}>
                <div className="text-white text-center mt-5">
                    <div className="font-size-25">Hello EQUIPHUNT!</div>
                    <div className="font-size-11 opct-8 mb-3">Welcome to EH Trackr !</div>
                    <Col md={4} sm={6} xs={12} className="mx-auto">
                        <Card>
                            <Card.Body>
                                <div className="font-size-20 mt-0 text-dark">Login Details</div>
                                <Form className="pt-4 px-3">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="w-100 text-center text-dark">Email or Phone</Form.Label>
                                        <Form.Control type="email" className="text-center p-4 font-size-13 hi-65" placeholder="Email or Phone" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="w-100 text-center text-dark">Password</Form.Label>
                                        <Form.Control type="password" className="text-center p-4 font-size-13 hi-65" placeholder="Password" />
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
export default Loginpage;
