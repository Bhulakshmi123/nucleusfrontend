import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './Renter.css'
class Renter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renterStatus: "rejected"
        }
    }
    changeContent = () => {
        if (this.state.renterStatus === 'approved') {
            return 'Renter Approved';
        }
        else {
            return 'Renter Rejected';
        }
    }
    render() {
        return (
            <div className="card cardPadding">
                <Row className="cardTop">
                    <Col lg={3} className="contentTop">
                        <div className="text-primary">Approved Price</div>
                        <div>Rs. {this.props.ApprovalPrice}</div>
                    </Col>
                    <Col lg={2}>
                        <a href="https://www.google.com">
                            <i className={`fas fa-thumbs-down nbSpan up ${this.state.renterStatus === 'rejected' ? 'text-danger' : ''}`}></i>
                            <i className={`fas fa-thumbs-up nbSpan down ${this.state.renterStatus === 'approved' ? 'text-success' : ''}`}></i>
                            <div className="smFont">{this.changeContent()}</div>
                        </a>
                    </Col>
                    <Col lg={2} className="text-center">
                        <a href="https://www.google.com" target="_blank">
                            <i className="far fa-file-pdf codeRed"></i>
                            <div className="smFont">Quotation</div>
                        </a>
                    </Col>
                    <Col lg={2} className="text-center">
                        <a href="https://www.google.com" target="_blank">
                            <i className="far fa-file-pdf codeRed"></i>
                            <div className="smFont">Work Order</div>
                        </a>
                    </Col>
                    <Col lg={3}>
                        <Button bsStyle="primary"  className="mt-2 btn-primary-overRide btn-right-overRide"><i className="fas fa-edit nbSpan"></i>Edit Price</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Renter;
