import React, { Component } from 'react';
import { Button, Row, Col, Container, Card, Modal } from 'react-bootstrap';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AddFeilds3 from '../../components/FormFields/AddFeilds3.jsx';
class Renter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renterStatus: "rejected",
            "isApiCallSuccessfull": false,
            "isModalShowing": false
        }
    }
    openModalHandler = () => this.setState({ "isModalShowing": true })
    closeModalHandler = () => this.setState({ "isModalShowing": false })
    changeContent = () => {
        if (this.state.renterStatus === 'approved') { return 'Renter Approved'; }
        else { return 'Renter Rejected'; }
    }
    render() {
        return (

            <React.Fragment>
                <Card className="p-3 mx-auto">
                    <Container>
                        <Row>
                            <Col md={3} className="my-auto">
                                <div className="text-primary font-size-07">Approved Price</div>
                                <div className="font-size-08 text-dark">Rs. {this.props.ApprovalPrice}</div>
                            </Col>
                            <Col md={3} className="my-auto text-center">
                                <Link to="/google">
                                    <FaRegThumbsUp className="text-center font-size-22 text-danger mx-2"></FaRegThumbsUp>
                                    <FaRegThumbsDown className="text-center  font-size-22 text-success  mx-2"></FaRegThumbsDown>
                                    <div className="font-size-07 text-center text-dark mt-1">{this.changeContent()}</div>
                                </Link>
                            </Col>
                            <Col md={2} className="text-center my-auto">
                                <Link to="/google">
                                    <i className="far fa-file-pdf font-size-22  text-danger"></i>
                                    <div className="font-size-07  text-dark">Quotation</div>
                                </Link>
                            </Col>
                            <Col md={2} className="text-center my-auto">
                                <Link to="/google">
                                    <i className="far fa-file-pdf font-size-22 text-danger"></i>
                                    <div className="font-size-07 text-dark">Work Order</div>
                                </Link>
                            </Col>
                            <Col md={2} className="my-auto">
                                <Button variant="primary float-right" size="sm" block onClick={this.openModalHandler}><i className="fas fa-edit mx-2"></i>Edit</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFeilds3></AddFeilds3>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Renter;
