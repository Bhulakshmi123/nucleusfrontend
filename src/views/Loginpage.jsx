import React, { Component } from 'react';
import { Button, Row, Col, Table } from 'react-bootstrap';
import TextInput from '../components/FormFields/TextInput';
import '../assets/css/commonStyles.css';
class Loginpage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mainContent">
                    <div className="text-white text-center mt-5 text_align">
                    <div className="companyName">Hello EQUIPHUNT!</div>
                    <div className="wel_stle">Welcome to EHTrackR!</div>
                    <Col md={4} sm={6} xs={12} className="login_block">
                        <div className="login_dtls">Login Details</div>
                    <form className="fm_padding">
                    <TextInput className="email_stle" name="phone_no" type="text" placeholder="Email or Phone" label="Email or Phone"/>
                    <TextInput className="pwd_stle" name="phone_no" type="text" placeholder="Password" label="Password"/>
                    <Button block>SIGN IN</Button>
                    <div>
                        <span className="block-link">Back to Company ID</span><span className="balck">|</span><span className="block-link">Forgot Password?</span>
                    </div>
                    </form>
                    </Col>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Loginpage;