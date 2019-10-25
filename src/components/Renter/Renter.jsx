import React, { Component } from 'react'
import { Button, Grid, Row, Col } from 'react-bootstrap'
import './Renter.css'
class Renter extends Component {
    render() {
        return (
            <div className="card cardPadding">
                <Row className="cardTop">
                    <Col lg={3} className="contentTop">
                        <div className="text-primary">Approved Price</div>
                        <div>Rs. {this.props.ApprovalPrice}</div>
                    </Col>
                    <Col lg={2}>
                        <a href="">
                            <i className="fas fa-thumbs-down nbSpan up"></i>
                            <i className="fas fa-thumbs-up nbSpan down"></i>
                            <div className="smFont">Renter Approved</div>
                        </a>
                    </Col>
                    <Col lg={2} className="text-center">
                        <a href="">
                        <i class="far fa-file-pdf codeRed"></i>
                        <div className="smFont">Quotation</div>
                        </a>
                    </Col>
                    <Col lg={2} className="text-center">
                        <a href="">
                        <i class="far fa-file-pdf codeRed"></i>
                        <div className="smFont">Work Order</div>
                        </a>
                    </Col>
                    <Col lg={3}>
                        <Button bsStyle="primary" bsSize="small" block className="btn-top"><i className="fas fa-edit nbSpan"></i>Edit Price</Button>
                    </Col>
                </Row >
            </div >
        )
    }
}

export default Renter
