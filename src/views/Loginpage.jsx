import React, { Component } from 'react';
import { Button, Row, Col, Table } from 'react-bootstrap';
import TextInput from '../components/FormFields/TextInput';
import '../assets/css/commonStyles.css';
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
                <div className="text-white text-center mt-5 text_align">
                    <div className="companyName">Hello EQUIPHUNT!</div>
                    <div className="wel_stle">Welcome to Nucleus!</div>
                    <Col md={4} sm={6} xs={12} className="login_block">
                        <div className="login_dtls matgin_tp">Login Details</div>
                        <form className="fm_padding">
                            <div className="">
                                <TextInput className="email_stle" name="phone_no" type="text" placeholder="Email or Phone" label="Email or Phone" />
                            </div>
                            <div className="matgin_tp">
                                <TextInput className="pwd_stle" name="phone_no" type="text" placeholder="Password" label="Password" />
                            </div>
                            <div className="matgin_tp">
                                <Button className="" block>SIGN IN</Button>
                            </div>
                            <div className="fnt_stle matgin_tp">
                                <span className="block-link">Back to Company ID</span><span className="balck">|</span><span className="block-link">Forgot Password?</span>
                            </div>
                        </form>
                    </Col>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Loginpage;