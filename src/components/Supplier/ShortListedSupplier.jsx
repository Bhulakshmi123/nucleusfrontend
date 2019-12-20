import React, { Component } from 'react';
import AddFeilds3 from '../../components/FormFields/AddFeilds3.jsx';
import { Row, Col, Button, Container, Card, Modal } from 'react-bootstrap';
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
class ShortListedSupplier extends Component {
    constructor(props) {
        super(props)
        console.log('Su', this.props)
        this.state = {
            "isModalShowing": false
        }
    }
    openModalHandler = () => this.setState({ "isModalShowing": true })
    closeModalHandler = () => this.setState({ "isModalShowing": false })
    render() {
        return (
            <React.Fragment>
                <Card className="mx-auto p-3 my-4">
                    <small>
                        <Row>
                            <Col md={4} className="text-left my-auto">
                                <div className="text-dark font-size-10 text-capitalize">{this.props.data.companyName}
                                    <small className="text-danger"> [{this.props.data.equipmentName}]</small>
                                </div>
                                <div className="font-size-08 text-dark">Priority : <span className="text-primary text-capitalize">{this.props.data.leadDet_priority}</span></div>
                            </Col>
                            <Col md={8} className=" my-auto">
                                <Row>
                                    <Col md={1} className="text-center my-auto">
                                        <div><AiOutlineMenu className="font-size-16 text-dark" /></div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto hovertext-danger">
                                        <div><FaRegCheckCircle className="text-center font-size-22" onClick={this.props.finalise} /></div>
                                        <div className="font-size-07">Finalised</div>
                                    </Col>
                                    <Col md={9} className="my-auto text-center">
                                        <div>lead_uuid</div>
                                        <span className="px-4 py-2 bor-rad-1 font-size-10 text-primary text-underline">{this.props.data.lead_uuid}</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="">
                            <Col md={2} className="my-auto">
                                <div className="text-primary font-size-07">Bid Price</div>
                                <div className="text-dark font-size-08">Rs. {this.props.data.leadDet_price === null ? '-NA-' : this.props.data.leadDet_price} </div>
                            </Col>
                            <Col md={1} className="my-auto">
                                <div className="text-primary font-size-07">Battha</div>
                                <div className="text-dark font-size-08">{this.props.data.leadDet_operatorBatha === null ? '-NA-' : this.props.data.leadDet_operatorBatha}</div>
                            </Col>
                            <Col md={1} className="my-auto">
                                <div className="text-primary font-size-07">Year</div>
                                <div className="text-dark font-size-08">{this.props.data.leadDet_year === null ? '-NA-' : this.props.data.leadDet_year}</div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className="text-primary font-size-07">Location</div>
                                <div className="text-dark font-size-08 text-capitalize">{this.props.data.leadDet_location === null ? '-NA-' : this.props.data.leadDet_location}</div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className="text-primary font-size-07">Supplier Remarks</div>
                                <div className="text-dark font-size-08 text-capitalize">{this.props.data.leadDet_remarks === null ? '-NA-' : this.props.data.leadDet_remarks}</div>
                            </Col>
                            <Col md={2} className="my-auto">
                                <Button variant="primary" size="sm" block onClick={this.openModalHandler}><i className="fas fa-edit mr-2"></i>Edit</Button>
                            </Col>
                        </Row>
                    </small>
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
export default ShortListedSupplier