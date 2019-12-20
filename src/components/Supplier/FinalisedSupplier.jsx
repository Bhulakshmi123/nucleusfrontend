import React, { Component } from 'react';
import AddFeilds3 from '../FormFields/AddFeilds3.jsx';
import { Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
class FinalisedSupplier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "isModalShowing": false
        }
    }
    openModalHandler = () => this.setState({ "isModalShowing": true })
    closeModalHandler = () => this.setState({ "isModalShowing": false })
    render() {
        return (
            <React.Fragment>
                <Card className="mx-auto p-3">
                    <Row>
                        <Col md={3} className="text-left my-auto">
                            <div className="text-primary font-size-08 text-capitalize">{this.props.formData.leadDet_companyType}</div>
                            <div className="font-size-09 text-dark">{this.props.formData.equipmentName}</div>
                        </Col>
                        <Col md={9} className=" my-auto">
                            <Row>
                                <Col md={1} className="text-center my-auto">
                                    <div><AiOutlineMenu className="font-size-16 text-dark" /></div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-success" onClick={(e) => this.props.testChanger('FINALISED', 'Mnao', 'Vishnu', 'Retro', 'MAno')}>
                                    <div><FaRegCheckCircle className=" text-center font-size-22" /></div>
                                    <div className="font-size-07">Finalised</div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-success" name="INSPECTION" onClick={(e) => this.props.testChanger('INSPECTION', 'Mnao', 'Vishnu', 'Retro', 'MAno')}>
                                    <div><FaRegCheckCircle className=" text-center font-size-22" /></div>
                                    <div className="font-size-07">Inspection</div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-success" name="FEILDVISIT" onClick={(e) => this.props.testChanger('FEILDVISIT', 'Mnao', 'Vishnu', 'Retro', 'MAno')}>
                                    <div><FaRegCheckCircle className=" text-center font-size-22" /></div>
                                    <div className="font-size-07">Feild Visit</div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-success" name="AGREEMENT" onClick={(e) => this.props.testChanger('AGREEMENT', 'Mnao', 'Vishnu', 'Retro', 'MAno')}>
                                    <div><FaRegCheckCircle className=" text-center font-size-22" /></div>
                                    <div className="font-size-07">Agreement</div>
                                </Col>
                                <Col md={3} className="text-center my-auto  hovertext-success" name="SIGNEDAGREEMENT" onClick={(e) => this.props.testChanger('SIGNEDAGREEMENT', 'Mnao', 'Vishnu', 'Retro', 'MAno')}>
                                    <div><FaRegCheckCircle className=" text-center font-size-22" /></div>
                                    <div className="font-size-07">Signed Agreement</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={2}>
                            <div className="text-primary font-size-08">Bid Price</div>
                            <div className="text-dark font-size-09">Rs. {this.props.formData.leadDet_price}</div>
                        </Col>
                        <Col md={1}>
                            <div className="text-primary font-size-08">Battha</div>
                            <div className="text-dark font-size-09">{this.props.formData.leadDet_operatorBatha}</div>
                        </Col>
                        <Col md={1}>
                            <div className="text-primary font-size-08">Year</div>
                            <div className="text-dark font-size-09">{this.props.formData.leadDet_year}</div>
                        </Col>
                        <Col md={3}>
                            <div className="text-primary font-size-08">Location</div>
                            <div className="text-dark font-size-09 text-capitalize">{this.props.formData.leadDet_location}</div>
                        </Col>
                        <Col md={3}>
                            <div className="text-primary font-size-08">Supplier Remarks</div>
                            <div className="text-dark font-size-09 text-capitalize">{this.props.formData.leadDet_remarks}</div>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="outline-primary" size="sm" block onClick={this.openModalHandler}><i className="fas fa-edit mr-2"></i>Edit Bid</Button>
                        </Col>
                    </Row>
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

export default FinalisedSupplier
