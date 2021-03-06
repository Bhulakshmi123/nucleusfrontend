import React, { Component } from 'react';
import { Button, Row, Col, Container, Card, Modal } from 'react-bootstrap';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { randomHeaderColorGenerator } from '../../commonFunctions/randomColorGenerator';
import AddFieldsPro from '../FormFields/AddFieldsPro';
class Renter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isApiCallSuccessful: false,
            isServiceModalShowing: false,
            isModalShowing: false
        }
    }
    isServiceModalShowing = () => this.setState({ "isServiceModalShowing": true })
    closeServiceModalHandler = () => this.setState({ "isServiceModalShowing": false })

    modalHandler = (modalStatus) => {
        this.setState({
            isModalShowing: modalStatus
        });
    }

    render () {
        return (
            <React.Fragment>
                <Card className="p-3 mx-auto">
                    <Container>
                        <Row>
                            <Col md={3} className="my-auto p-0">
                                <div className="text-primary font-size-08">Approved Price</div>
                                <div className="font-size-09 text-dark">Rs. {this.props.formData.leadDet_price}</div>
                            </Col>
                            <Col md={3} className="my-auto text-center">
                                {
                                    this.props.formData.transactions === null || this.props.formData.transactions.length === 0 ?
                                        <React.Fragment>
                                            <FaRegThumbsUp className="text-center font-size-22 text-muted mx-2 cursor-pointer"></FaRegThumbsUp>
                                            <FaRegThumbsDown className="text-center  font-size-22 text-danger  mx-2 cursor-pointer"></FaRegThumbsDown>
                                            <div className="font-size-07 text-center text-danger mt-1">Rejected</div>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <FaRegThumbsUp className="text-center font-size-22 text-success mx-2 cursor-pointer"></FaRegThumbsUp>
                                            <FaRegThumbsDown className="text-center  font-size-22 text-muted  mx-2 cursor-pointer"></FaRegThumbsDown>
                                            <div className="font-size-07 text-center text-success mt-1">Approved</div>
                                        </React.Fragment>
                                }
                            </Col>
                            {
                                this.props.formData.transactions_logs === null || this.props.formData.transactions_logs.length === 0 ?
                                    <React.Fragment>
                                        <Col md={2} className="text-center my-auto cursor-pointer" onClick={this.isServiceModalShowing}>
                                            <i className="far fa-file-pdf font-size-22  text-muted"></i>
                                            <div className="font-size-07  text-muted">Quotation</div>
                                        </Col>
                                        <Col md={2} className="text-center my-auto cursor-pointer" onClick={this.isServiceModalShowing}>
                                            <i className="far fa-file-pdf font-size-22 text-muted"></i>
                                            <div className="font-size-07 text-muted">Work Order</div>
                                        </Col>
                                        <Col md={2} className="my-auto px-0">
                                            <Button variant="primary" size="sm" block onClick={() => this.modalHandler(true)}><i className="fas fa-edit mx-2"></i>Edit Price</Button>
                                        </Col>
                                    </React.Fragment> :
                                    null
                            }
                        </Row>
                    </Container>
                </Card>
                <Modal show={this.state.isModalShowing} onHide={() => this.modalHandler(false)} size="xl">
                    <Modal.Header closeButton className={`text-white ${randomHeaderColorGenerator()}`}>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFieldsPro leadUuid={this.props.formData.lead_uuid} leadDetUuid={this.props.formData.leadDet_uuid}></AddFieldsPro>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.isServiceModalShowing} onHide={this.closeServiceModalHandler} size="md">
                    <Modal.Header closeButton className={`text-white ${randomHeaderColorGenerator()}`}>
                        <Modal.Title id="contained-modal-title-lg">Upload Documents</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Button variant="outline-danger" size="sm" block>Submit</Button>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Renter;
