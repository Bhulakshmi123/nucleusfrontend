import React, { Component } from 'react';
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
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

            <React.Fragment>
                {/* <div className="card cardPadding">
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
                        <Button variant="primary" className="mt-2" size="sm"><i className="fas fa-edit mr-2"></i>Edit Price</Button>
                    </Col>
                </Row>
            </div> */}
                <Card className="p-3 mx-auto">
                    <Container>
                        <Row>
                            <Col lg={3} className="my-auto">
                                <div className="text-primary">Approved Price</div>
                                <div className="font-size-11 text-dark">Rs. {this.props.ApprovalPrice}</div>
                            </Col>
                            <Col lg={3} className="my-auto">
                                <a href="https://www.google.com">
                                    <i className={`fas fa-thumbs-down font-size-22 text-dark mr-4 ${this.state.renterStatus === 'rejected' ? 'text-danger' : ''}`}></i>
                                    <i className={`fas fa-thumbs-up font-size-22 mr-4 ${this.state.renterStatus === 'approved' ? 'text-success' : ''}`}></i>
                                    <div className="font-size-08  text-dark">{this.changeContent()}</div>
                                </a>
                            </Col>
                            <Col lg={2} className="text-center my-auto">
                                <a href="https://www.google.com" target="_blank">
                                    <i className="far fa-file-pdf font-size-22  text-danger"></i>
                                    <div className="font-size-08  text-dark">Quotation</div>
                                </a>
                            </Col>
                            <Col lg={2} className="text-center my-auto">
                                <a href="https://www.google.com" target="_blank">
                                    <i className="far fa-file-pdf font-size-22 text-danger"></i>
                                    <div className="font-size-08 text-dark">Work Order</div>
                                </a>
                            </Col>
                            <Col lg={2} className="my-auto">
                                <Button variant="primary float-right" size="sm"><i className="fas fa-edit mx-2"></i>Edit Price</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </React.Fragment>

        )
    }
}

export default Renter;
